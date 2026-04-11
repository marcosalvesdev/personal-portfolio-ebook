const none = "none";

let navMenu = document.getElementById("navMenu");
let menuIcon = document.getElementById("menu-icon");

console.log(navMenu.style)

menuIcon.addEventListener("click", () => {
    if (navMenu.style.display == none) {
        navMenu.classList.add("tray-nav-menu");
        navMenu.classList.remove("nav-menu");
    } else {
        navMenu.classList.add("nav-menu");
        navMenu.classList.remove("tray-nav-menu");
    }
});
