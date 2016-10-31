jQuery(document).ready(function ($) {
    var $fbEditor = $(document.getElementById('fb-editor'));
    var formBuilder = $fbEditor.formBuilder({
        dataType: 'json',
        editOnAdd: true,
        typeUserAttrs: {
            autocomplete: {
                dependsOn: {
                    label: 'Depends On'
                }
            },            
            button: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            checkbox: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            'checkbox-group': {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            date: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            fileupload: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            hidden: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            paragraph: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            number: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            'radio-group': {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            select: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            text: {
                dependsOn: {
                    label: 'Depends On'
                }
            },
            textarea: {
                dependsOn: {
                    label: 'Depends On'
                }
            }
        }
    }).data('formBuilder');

    $(".form-builder-save").click(function (e) {
        e.preventDefault();
        var fields = formBuilder.formData;
        var data = {title: $('#module-title').val(), module_id: $('#module-id').val(), fields: fields};
        alert(data);
        $.ajax({
            url: '/insert',
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                alert('Complete');
            }
        });
    });
});