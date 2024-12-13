$(document).ready(function() {

    $("#signupForm").validate({
        rules :{
            firstName : "required",
            lastName : "required",
            email : {
                required : true ,
                email : true
            },
            password : {
                required : true,
                minlength : 8
            },
            confirmPassword : {
                required : true,
                minlength : 8,
                equalTo : "#password"  
            }
        },
        messages :{
            firstName : "Please enter First Name",
            lastName : "Please enter Last Name",
            email : {
                required : "Please enter email",
                email : "Please enter valid email"
            },
            password : {
                required : "Please enter password ",
                minlength : "Password must be 8 char long"
            },
            confirmPassword : {
                required : "Please enter password ",
                minlength : "Password must be 8 char long",
                equalTo : "Please enter same password as above"  
            }
        }
    });

});