function validateData(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confrim_password = document.getElementById("confirm-password");
    var terms_services = document.getElementById("terms-condition-checkbox");
    var date = document.getElementById("dob")
    var radios = document.getElementsByName("gender");
    var dateLim = new Date("2003-01-01");


    if(name.value.length < 5){
        alert("Name must be longer");
    }

    else if(!email.value.endsWith("@gmail.com")){
        alert("Email has to end with @gmail.com");
    }

    else if(password.value.length < 5){
        alert("Password has to be at least 5 characters");
    }

    else if(password.value != confrim_password.value){
        alert("Confrim Password has to be the same as Password");
    }
    else if(!male && !female){
        alert("Must pick gender");
    }
    else if(!terms_services.checked){
        alert("You have to agree to terms and services");
    }
    else if(date < dateLim){
        alert("Date of birth must be below 2003-01-01");
    }
    else if(!radios[0].checked && !radios[1].checked){
        alert("Must pick gender");
    }
    else{
        window.location.href = "../movies/index.html"
    }
}