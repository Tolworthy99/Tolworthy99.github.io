//Map of different parts of my home time
var mymap = L.map('mapid').setView([54.614940, -1.282996], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidG9sd29ydGh5MSIsImEiOiJjazZsYmV5a2gwZDlzM2xueTRiOHNscGoxIn0.aJB5chRIixiPuc-kkmaP7g'
}).addTo(mymap);

var shapefiles = {
  'Countries I have been to': L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-6714073776aa4de3b47a6d09084c3dd3/wms',{
  layers: 'CEEN514_Assignment_8 Countries_Visited',
  format: 'image/png',
  transparent: true,
}),

  'Cities that would be cool to visit': L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-6714073776aa4de3b47a6d09084c3dd3/wms',{
  layers: 'CEEN514_Assignment_8 Cities_to_visit',
  format: 'image/png',
  transparent: true,
}),

  'Both Layers': L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-6714073776aa4de3b47a6d09084c3dd3/wms',{
  layers: 'CEEN514_Assignment_8 Countries_Visited,CEEN514_Assignment_8 Cities_to_visit',
  format: 'image/png',
  transparent: true,
})
}

L.control.layers(shapefiles).addTo(mymap);

var Bound1 = [47.583393, 19.394759],
    Bound2 = [22.176344, -160.875554];

mymap.fitBounds([Bound1,Bound2]);
