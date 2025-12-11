

export function loginUser(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if(!email || !password){
        alert("Enter the email and password");
        return;
    }

    if(!storedUser){
        alert("No user registered. Sign up first");
        window.location.href = "./signup.html";
        return;
    }

    if(email !== storedUser.email){
        alert("Not registered email. Please sign up");
        window.location.href = "./signup.html";
    }else if(password !== storedUser.password)
        alert("Incorrect password");
    else{
        alert("Login successful!");
        window.location.href = "./todos.html";
      
    }
}

export function signupUser(){
    let emailR = document.getElementById("emailR").value.trim();
    let passwordR = document.getElementById("passwordR").value.trim();

    if(!emailR || !passwordR){
        alert("Enter your email and password");
        return;
    }

    let user = {email:emailR, password:passwordR};

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "./login.html";
}

