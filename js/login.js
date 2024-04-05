var username = document.querySelector("#username")
var password = document.querySelector("#password")
var loginBtn = document.querySelector("#login")
var gitUsername = localStorage.getItem("username")
var gitPassword = localStorage.getItem("password")

loginBtn.addEventListener("click", function(){
    if (username.value ==="" || password.value === ""){
        alert("Please Enter Data")
    }else{
        if(gitUsername.trim() === username.value.trim() && gitPassword.trim() === password.value ){
            setTimeout(() =>{
                window.location = "index.html"
            }, 1000)
        }else{
            alert("The username or password is wrong ")
        }
    }
})