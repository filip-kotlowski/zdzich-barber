const image = document.querySelector("#about-pic");

let scrolled = window.pageYOffset;
let rate;

window.addEventListener("scroll", function (e) {
    scrolled = window.pageYOffset;
    rate = scrolled * -0.0003 * this.window.innerHeight;
    image.style.transform = "translateY(" + rate + "px)";
});