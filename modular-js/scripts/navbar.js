

export function loadNavbar(){

    let navbar = document.getElementById("navbar");
    navbar.innerHTML = "";

    let linkDiv = document.createElement("div");
    linkDiv.className = "linkDiv";

    function createLink(text, href){
        let link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        link.className = "navLinks";
        return link;
    }

    linkDiv.append(
        createLink("Home", "./index.html"),
        createLink("About", "./about.html"),
        createLink("To-Do", "./todos.html"),
        createLink("Gallary", "./gallary.html"),
        createLink("Contacts", "./contacts.html")
    );

    let logout = document.createElement("button");
    logout.textContent = "Log Out";
    logout.className = "logout";
    logout.addEventListener("click", ()=>{
        alert("Are you sure?");
        window.location.href = "./index.html";
    });

    navbar.append(linkDiv, logout);
}
