$(document).ready(function(){

    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");


    loginForm.on("submit", function(event){
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