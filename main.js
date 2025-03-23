//screenshots on home page
window.onload = function () {
    var slideIndex = 1;
    showDivs(slideIndex);

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

    document.querySelector(".w3-left").onclick = function () { plusDivs(-1); };
    document.querySelector(".w3-right").onclick = function () { plusDivs(1); };

    var dots = document.querySelectorAll(".demo");
    dots.forEach((dot, index) => {
        dot.onclick = function () { currentDiv(index + 1); };
    });

    showDivs(slideIndex);
};

//map on pikmin page
window.onload = function () {
    var map = L.map('map').setView([40.9153, -73.1226], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
};

window.onload = function () {
    // Steps Chart
    var stepsIn = ["4000~6999", "7000~9999", "10,000~12,999", "13,000~15,999", "16,000~18,999"];
    var stepsCount = [4, 8, 10, 5, 1];
    var barColors = ["#536f16","#536f16","#536f16","#536f16","#536f16"];

    new Chart(document.getElementById("steps"), {
        type: "bar",
        data: {
            labels: stepsIn,
            datasets: [{
                backgroundColor: barColors,
                data: stepsCount
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Amount of Steps for February"
            }
        }
    });

    // Mood Chart
    var moodType = ["Sad", "Neutral", "Happy"];
    var moodCount = [2, 12, 14];

    new Chart(document.getElementById("mood"), {
        type: "bar",
        data: {
            labels: moodType,
            datasets: [{
                backgroundColor: barColors,
                data: moodCount
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Mood"
            }
        }
    });
};