$("document").ready(function () {
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    $('#emaildvalidation').hide();


    var usrValid = false;
    var passValid = false;
    var cnPassValid = false;
    var emailValid = false;

    $("#username").keyup(usernameValidator);
    $("#email").keyup(emailValidator);
    $("#password").keyup(passwordValidator);
    $("#confirmPassword").keyup(confirmPassValidator);

    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
    var emailRegex = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/


    function usernameValidator() {

        var usernameVal = $("#username").val();
        console.log(usernameVal);
        if (usernameVal.length == "" || usernameVal.length < 4) {
            $('#usernamevalidation').show();
            $("#username").addClass('text-danger bg-danger p-2  bg-opacity-10');
            $('#usernamevalidation').html("Invalid Username, please make sure: <br>~it is not empty <br>~length is greater than 3 charact ers.");

        }
        else {
            $('#usernamevalidation').hide();
            $("#username").removeClass('text-danger bg-danger p-2  bg-opacity-10');
            usrValid = true;
        }
    }
    function emailValidator() {

        var emailVal = $("#email").val();
        if (!emailRegex.test(emailVal)) {
            $('#emailvalidation').show();
            $("#email").addClass('text-danger bg-danger p-2  bg-opacity-10');
            $('#emailvalidation').html("Invalid Email, please enter a valid email address");
        }
        else {
            $('#emailvalidation').hide();
            $("#email").removeClass('text-danger bg-danger p-2  bg-opacity-10');
            passValid = true;
        }
    }

    function passwordValidator() {
        var passVal = $("#password").val();
        if (!passwordRegex.test(passVal)) {
            $('#passwordvalidation').show();
            $("#password").addClass('text-danger bg-danger p-2  bg-opacity-10');
            $('#passwordvalidation').html("Invalid password, please make sure: <br>~must contains one digit from 0-9 <br>~must contains at least one special character <br>~length at least 8 characters and maximum of 20");
        }
        else {
            $('#passwordvalidation').hide();
            $("#password").removeClass('text-danger bg-danger p-2  bg-opacity-10');
            passValid = true;
        }
    }

    function confirmPassValidator() {
        var passVal = $("#password").val();
        var confirmPassVal = $("#confirmPassword").val();
        if (passVal != confirmPassVal) {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html("Invalid password, please make sure you are entering same password as above");
            $("#confirmPassword").addClass('text-danger bg-danger p-2  bg-opacity-10');
        }
        else {
            $('#confirmpasswordvalidation').hide();
            $("#confirmPassword").removeClass('text-danger bg-danger p-2  bg-opacity-10');
            cnPassValid = true;
        }
    }



    $('input').keyup(activateSubmit);

    function activateSubmit() {
        if (usrValid && passValid && cnPassValid) {
            $('#submitvalidation').removeClass('disabled')
        }
        else {
            $('#submitvalidation').addClass('disabled')
        }
    }


})


