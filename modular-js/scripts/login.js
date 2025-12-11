import { loginUser } from "./auth.js";

document.getElementById("loginUserBtn").addEventListener("click", loginUser);

document.getElementById("goHomeBtn").addEventListener("click", ()=>{
    window.location.href = "./index.html";
});