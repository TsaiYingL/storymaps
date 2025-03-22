var map = L.map('map').setView([40.9153, -73.1226], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var stepsIn = ["4000~6999", "7000~9999", "10,000~12,999", "13,000~15,999", "16,000~18,999"];
var stepsCount = [4, 8, 10, 5, 1];
var barColors = ["#536f16","#536f16","#536f16","#536f16","#536f16"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: stepsIn,
    datasets: [{
      backgroundColor: barColors,
      data: stepsCount
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Amount of steps for Feburary"
    }
  }
});