const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://localhost:27017/form-builder', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/scripts', express.static(__dirname + '/node_modules/formBuilder/dist/'));

app.get('/', (req, res) => {
  db.collection('forms').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {forms: result})
  })
})

app.post('/insert', (req, res) => {
  console.log(req.body);
  db.collection('forms').insert(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('Saved to database')
    res.redirect('/')
  })
})

app.put('/update', (req, res) => {
  db.collection('forms')
  .findOneAndUpdate({name: 'Test'}, {
    $set: {
      //name: req.body.name,
      //quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/forms', (req, res) => {
  db.collection('forms').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Deleted')
  })
})
