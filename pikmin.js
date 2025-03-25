document.addEventListener('DOMContentLoaded', function() {
    //map on pikmin page
    var map = L.map('map').setView([40.9153, -73.1226], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    //add markers for places I often visit on campus
    var oneill = L.marker([40.91861902949204, -73.11953635459429]).addTo(map);
    var keller = L.marker([40.91193761180697, -73.13012189405977]).addTo(map);
    var humanities = L.marker([40.91436658218632, -73.1211217025065]).addTo(map);
    var oldCompSci = L.marker([40.91285754370208, -73.12279628608825]).addTo(map);
    var physics = L.marker([40.91635987210889, -73.1260114757106]).addTo(map);
    var eastDining = L.marker([40.916868, -73.120663]).addTo(map);

    //add popups to the markers
    oneill.bindPopup("<b>O'Neill Hall</b><br>My friend's dorm. I often go there after class</b>").openPopup();
    keller.bindPopup("<b>Keller Hall</b><br>My dorm</b>");
    humanities.bindPopup("<b>Humanities Building</b><br>Where I have my WRT377 class</b>");
    oldCompSci.bindPopup("<b>Old Computer Science Building</b><br>Where I have my CSE160 class</b>");
    physics.bindPopup("<b>Physics Building</b><br>Where I have my PHY132 recitation. I also do work in the Math and Physics Library</b>");
    eastDining.bindPopup("<b>East Dining Hall</b><br>Where I eat most of my meals. But I like west side dining more</b>");


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
});