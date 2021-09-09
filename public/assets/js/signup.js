$(document).ready(function(){
    // GETTING referances to our form and input

    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");


    // when the signup button is clicked, we validate the email and password are not blank

    signUpForm.on("submit", function(event){
        event.preventDefualt();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if(!userData.email || !userData.password){
            return;
        }
    })
})