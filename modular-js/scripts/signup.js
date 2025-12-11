import { signupUser } from "./auth.js";

document.getElementById("signupUserBtn").addEventListener("click", signupUser);

document.getElementById("goHomeBtn").addEventListener("click", ()=>{
    window.location.href = "./index.html";
});