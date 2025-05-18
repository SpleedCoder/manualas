const scrollBtn = document.getElementById("scrollToTopBtn");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add("visible");
        navbar.classList.add("scrolled");
    } else {
        scrollBtn.classList.remove("visible");
        navbar.classList.remove("scrolled");
    }
});
