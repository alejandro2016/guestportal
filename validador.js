(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#loginForm").validate({
                rules: {
                    codigoh: "required",
                    password: "required",
                    acepto: "required",
					login: {
                        required: true,
                        digits: true
                    },
                },
                messages: {
                    codigoh: "Debe ingresar el c&oacute;digo correspondiente a su hotel",
                    password: "Debe ingresar alguno de sus apellidos o nombre",
                    login: {
                        required: "Debe ingresar su n&uacute;mero de habitaci&oacute;n",
                        digits: "La habitaci&oacute;n debe contener solo n&uacute;meros."
                    },
                    acepto: "Porfavor acepte nuestros t&eacute;rminos y condiciones para continuar",
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);