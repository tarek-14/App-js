var links = document.querySelector("#links")
var infoUser = document.querySelector("#info-user")
var user = document.querySelector("#user")

if (localStorage.getItem("username")){
    links.remove()
    infoUser.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
var logOut = document.querySelector("#logout")
logOut.addEventListener("click", function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html"
    }, 1500)
})