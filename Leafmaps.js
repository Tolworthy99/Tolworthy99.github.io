var mymap = L.map('mapid').setView([54.614940, -1.282996], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidG9sd29ydGh5MSIsImEiOiJjazZsYmV5a2gwZDlzM2xueTRiOHNscGoxIn0.aJB5chRIixiPuc-kkmaP7g'
}).addTo(mymap);

var marker = L.marker([54.601669, -1.280650]).addTo(mymap);
