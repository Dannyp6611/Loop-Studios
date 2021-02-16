const nav = document.querySelector(".nav");

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        document.querySelector("body").style.overflowY = "hidden";
    } else {
        document.querySelector("body").style.overflowY = "visible";
    }
    

});