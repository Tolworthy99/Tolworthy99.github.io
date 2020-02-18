var mymap = L.map('mapid').setView([54.614940, -1.282996], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidG9sd29ydGh5MSIsImEiOiJjazZsYmV5a2gwZDlzM2xueTRiOHNscGoxIn0.aJB5chRIixiPuc-kkmaP7g'
}).addTo(mymap);

var marker = L.marker([54.624918, -1.279280]).addTo(mymap);
marker.bindPopup("<b>Old Home</b><br>");

var marker = L.marker([54.617078, -1.282447]).addTo(mymap);
marker.bindPopup("<b>College</b><br>");

var marker = L.marker([54.614176, -1.271438]).addTo(mymap);
marker.bindPopup("<b>Secondary School</b><br>");

var marker = L.marker([54.607679, -1.281147]).addTo(mymap);
marker.bindPopup("<b>Church</b><br>");

var polygon = L.polygon([
    [54.625060, -1.279191],
    [54.624790, -1.279223],
    [54.624785, -1.279333],
    [54.625069, -1.279312]
],{color: "red",}).addTo(mymap);

var circle = L.circle([54.624918, -1.279280], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 550
}).addTo(mymap);
