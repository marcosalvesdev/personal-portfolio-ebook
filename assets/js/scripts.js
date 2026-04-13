let navMenu = document.getElementById("navMenu");
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
});
