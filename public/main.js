jQuery(document).ready(function ($) {
    var $fbEditor = $(document.getElementById('fb-editor'));
    var formBuilder = $fbEditor.formBuilder({
        dataType: 'json'
    }).data('formBuilder');

    $(".form-builder-save").click(function (e) {
        e.preventDefault();
        var data = formBuilder.formData;
        $.ajax({
            url: '/insert',
            type: "POST",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                alert('Complete');
            }
        });
    });
});