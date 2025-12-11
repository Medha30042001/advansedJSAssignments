import { loadFooter } from "./footer.js"
import { loadNavbar } from "./navbar.js"



document.getElementById("loginBtn").addEventListener("click", ()=>{
    window.location.href = "./login.html"
})

document.getElementById("signupBtn").addEventListener("click", ()=>{
    window.location.href = "./signup.html"
})

document.addEventListener("DOMContentLoaded", ()=>{
    loadNavbar();
    loadFooter();
})

