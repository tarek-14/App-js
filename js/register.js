var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var signUpBtn = document.querySelector("#signUp")

signUpBtn.addEventListener("click", function (){
    if (username.value ==="" || email.value ==="" || password.value ===""){
        alert("Please Enter Data")
    }else{
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(() =>{
            window.location = "login.html"
        }, 1000)
    }
})
