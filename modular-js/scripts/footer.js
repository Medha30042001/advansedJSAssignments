

export function loadFooter(){
    let footer = document.getElementById("footer");
    footer.innerHTML = "";

    let credits = document.createElement("p");
    credits.className = "credits";
    credits.textContent = `© 2025 My Website`;

    footer.appendChild(credits);
}