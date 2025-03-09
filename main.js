import "./assets/css/tailwind.css";

let hamburger = document.querySelector("#hamburger");
let navlinks = document.querySelector("#navlinks");
let isToggled = false;

hamburger.addEventListener("click", () => {
    isToggled = !isToggled;
    if (isToggled) {
        navlinks.classList.replace("hidden", "flex");
        hamburger.classList.add("toggled");
    } else {
        navlinks.classList.replace("flex", "hidden");
        hamburger.classList.remove("toggled");
    }
});
