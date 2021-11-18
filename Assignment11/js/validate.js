$(document).ready(function (event) {

    $('#myform').validate({ // initialize the plugin
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            city: {
                required: true
            }
        }
    });

});