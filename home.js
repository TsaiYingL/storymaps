//file for the slideshow on the home page

var slideIndex = 1;

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("screens");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

setTimeout(function() {
    showDivs(slideIndex);
}, 0);

document.addEventListener('DOMContentLoaded', function() {
    showDivs(slideIndex); // Initial showDivs call
    document.querySelector(".w3-left").onclick = function () { plusDivs(-1); };
    document.querySelector(".w3-right").onclick = function () { plusDivs(1); };
    var dots = document.querySelectorAll(".demo");
    dots.forEach((dot, index) => {
        dot.onclick = function () { currentDiv(index + 1); };
    });
});