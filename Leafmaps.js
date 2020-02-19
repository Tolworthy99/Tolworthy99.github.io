
//Map of different parts of my home time
var mymap = L.map('mapid').setView([54.614940, -1.282996], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidG9sd29ydGh5MSIsImEiOiJjazZsYmV5a2gwZDlzM2xueTRiOHNscGoxIn0.aJB5chRIixiPuc-kkmaP7g'
}).addTo(mymap);

var markerimg = '<img src=Images/IMG_0689.jpeg height="100px" width="100px">'
var customPopupHome = "<b>Old Home</b><br>" + markerimg ;
var customPopupCollege = "<b>Bede Sixth Form College (Community College)</b><br><ul><li>Graduated 2010</li><li>3 A-Levels</li><ul><li>Chemistry</li><li>Geology</li><li>Math</li></ul></ul>";
var customPopupSchool = "<b>St Michaels RC Secondary School (Secondary School)</b><br><ul><li>Graduated 2008</li><li>13 G.S.C.E's</li></ul>"
var customPopupChurch = "<b>Church of Jesus Christ of Latter-day Saints</b><br><p>It is the stake center and had the family history center</p>"

 // specify popup options
 var customOptions =
     {
     'maxWidth': '500',
     'className' : 'custom'
     }
var marker = L.marker([54.624918, -1.279280]).addTo(mymap);
marker.bindPopup(customPopupHome, customOptions);

var marker = L.marker([54.617078, -1.282447]).addTo(mymap);
marker.bindPopup(customPopupCollege, customOptions);

var marker = L.marker([54.614176, -1.271438]).addTo(mymap);
marker.bindPopup(customPopupSchool, customOptions);

var marker = L.marker([54.607679, -1.281147]).addTo(mymap);
marker.bindPopup(customPopupChurch, customOptions);

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



//The Journey of Life
//The Journey of Life
var lifeMap = L.map('lifemap').setView([40.68510, -73.94136], 1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidG9sd29ydGh5MSIsImEiOiJjazZsYmV5a2gwZDlzM2xueTRiOHNscGoxIn0.aJB5chRIixiPuc-kkmaP7g'
}).addTo(lifeMap);

var Not = [52.952554, -1.157361],
    Tin = [50.662969, -4.751187],
    Cam = [50.622162, -4.681178],
    Lau = [50.637047, -4.361419],
    Bil1 =[54.624918, -1.279280],
    Pro = [40.237660, -111.655390],
    Hol = [40.682336, -111.836639],
    Ave = [40.777697, -111.873582],
    Ros = [41.591734, -109.226177],
    Far = [40.956509, -111.884243],
    Too = [40.527403, -112.303549],
    Ssl = [40.705801, -111.898126],
    Bil2 = [54.601661, -1.280549];


var route = L.featureGroup([
	L.marker(Not) .bindPopup("Nottingham"),
	L.polyline([Not, Tin],{color:"rgba(190, 144, 212, 1)"}),
	L.marker(Tin) .bindPopup("Tintagel"),
	L.polyline([Tin, Cam],{color:"rgba(18, 78, 13, 1)",}),
	L.marker(Cam) .bindPopup("Camelford"),
	L.polyline([Cam, Lau],{color:"rgba(190, 144, 212, 1)"}),
  L.marker(Lau) .bindPopup("Launceston"),
	L.polyline([Lau, Bil1],{color:"rgba(18, 78, 13, 1)",}),
	L.marker(Bil1) .bindPopup("Billingham"),
	L.polyline([Bil1, Pro],{color:"rgba(190, 144, 212, 1)"}),
	L.marker(Pro) .bindPopup("Provo"),
	L.polyline([Pro, Hol],{color:"rgba(18, 78, 13, 1)",}),
	L.marker(Hol) .bindPopup("Holladay"),
	L.polyline([Hol, Ave],{color:"rgba(190, 144, 212, 1)"}),
  L.marker(Ave) .bindPopup("The Avenues"),
  L.polyline([Ave, Ros],{color:"rgba(18, 78, 13, 1)",}),
  L.marker(Ros) .bindPopup("Rock Springs"),
  L.polyline([Ros, Far],{color:"rgba(190, 144, 212, 1)"}),
  L.marker(Far) .bindPopup("Farmington/Centerville"),
  L.polyline([Far, Too],{color:"rgba(18, 78, 13, 1)",}),
  L.marker(Too) .bindPopup("Tooele"),
  L.polyline([Too, Ssl],{color:"rgba(190, 144, 212, 1)"}),
  L.marker(Ssl) .bindPopup("South Salt Lake"),
  L.polyline([Ssl, Bil1],{color:"rgba(18, 78, 13, 1)",}),
  L.marker(Bil1) .bindPopup("Billingham (House 1)"),
  L.polyline([Bil1, Bil2], {color:"rgba(190, 144, 212, 1)"}),
  L.marker(Bil2) .bindPopup("Billingham (House 2)"),
  L.polyline([Bil2, Pro], {color:"rgba(18, 78, 13, 1)",}),
  L.marker(Pro) .bindPopup("Provo")
]);

//lifeMap.addLayer(route);

route.addTo(lifeMap).snakeIn();

lifeMap.fitBounds([Too, Bil1]);

function snake() {
			route.snakeIn();
		}

		route.on('snakestart snake snakeend', function(ev){
			console.log(ev.type);
		});
