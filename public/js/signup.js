$(document).ready(function(){
    // GETTING referances to our form and input

    var signUpForm = $("form.signup");
    var emailInput = $("input#email-singup-input");
    var passwordInput = $("input#password-singup-input");


    // when the signup button is clicked, we validate the email and password are not blank

    signUpForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            email: emailInput.val() || '',
            password: passwordInput.val() || ''
        };

        if(!userData.email || !userData.password){
            return;
        }

        //if we have an email and password, run the signUp user function
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirect to the members page
    // Otherwise w log any errors

    function signUpUser(email,password) {
        $.post("/api/signup",{
            email:email,
            password:password
        }).then(function(data){
            window.location.replace("/member");
        }).catch(handleLoginError);
    }

    function handleLoginError(err){
        $("#alart .msg").text(err.responseJSON);
        $("#alart").fadeIn(500);
    }
})