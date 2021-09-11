$(document).ready(function(){

    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // when the form is submitted, we validate there's an email and password entered.
    loginForm.on("submit", function(event){
        event.preventDefualt();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if(!userData.email || !userData.password){
            return;
        }

        // if we have an email and password we run the loginUser function and clear the form. 
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us to the member page.
    function loginUser(email, password) {
        $.post("api/login", {
            email:email,
            password:password
        }).then(function(){
            window.location.replace("../memeber");
            // if there's an error, log the error
        }).catch(function(err){
            console.log(err)
        })
    }


})