// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoidGhhcm1hMyIsImEiOiJjamkzazRtd3AyNWFyM2twZGpmNWp5Znh3In0.t0f4CwdP5o0wMM6adrU4Cg';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-92.9043735, 45.7080326]
var initialZoom = 8.21


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/tharma3/ck6v1di5e053i1jmu4weo8dbn', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in central park
 // new mapboxgl.Marker()
 //   .setLngLat([-73.974087,40.770718])
 //   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
 //    .setHTML('I am in Central Park'))
 //   .addTo(map);


// iterate over each object in studentData
beerdata.forEach(function(beerdata) {
  // for each object in the beerdata, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([beerdata.longitude, beerdata.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${beerdata.brewery}`))
    .addTo(map);
})

// event listeners for the fly to buttons

// $('#china').on('click', function() {
//   map.flyTo({
//     center: [112.556005, 37.818758],
//     zoom: initialZoom
//   })
// })
//
// $('#michigan').on('click', function() {
//
//   var michiganLngLat = [-83.10538, 42.50448]
//
//   map.flyTo({
//     center: michiganLngLat,
//     zoom: initialZoom
//   })
// })
//
// $('#colombia').on('click', function() {
//   var colombiaLngLat = [-73.997208, 0.721615]
//
//   map.flyTo({
//     center: colombiaLngLat,
//     zoom: initialZoom
//   })
// })
//
// $('#nyc').on('click', function() {
//   map.flyTo({
//     center: initialCenterPoint,
//     zoom: initialZoom
//   })
// })
