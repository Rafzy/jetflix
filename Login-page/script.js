function validateData(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(!email.value.endsWith("@gmail.com")){
        alert("Email has to end with @gmail.com");
    }
    else if(password.value.length < 5){
        alert("Password has to be at least 5 characters");
    }
    else{
        window.location.href = "../movies/index.html"
    }

}