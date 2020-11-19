//const { update } = require("../../models/User");

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);




let map;
function initMap() {
  var inputStart = document.getElementById('start');
  var options = {
    types: ['(cities)'],
    componentRestrictions: {country: 'pt'}
  };
  var autocompleteStart = new google.maps.places.Autocomplete(inputStart, options);
  var inputEnd = document.getElementById('end');
  var autocompleteEnd = new google.maps.places.Autocomplete(inputEnd, options);
  const lisbon = { lat: 38.7223, lng: -9.1393 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, 
    center: lisbon,
    

  })

}



// function addMarkersFromMongo(map) {
//   const map = displayMap();
//   const markerStreetart = addMarkers(map);
// }