/* var map = L.map('map', {
  crs: L.CRS.Simple, // CRS.Simple, which represents a square grid:
  minZoom: -5,
  maxZoom: 6
})

var bounds = [xy(0, 0), xy(16384, 11622)]
var image = L.imageOverlay('../images/landingpage-resize-large.jpg', bounds)
image.addTo(map)

map.fitBounds(bounds); */


// script.js

// Create a map instance
var map = L.map('map', {
  crs: L.CRS.Simple // Use a simple CRS (Coordinate Reference System) for non-geographical maps
});

// Add the Zoomify tiled layer to the map
L.tileLayer.zoomify('../images/landing-page-tiles', {
  width: 1000, // Specify the width of the largest zoom level image
  height: 1000, // Specify the height of the largest zoom level image
}).addTo(map);

// Set the initial view to a specific zoom level and center coordinates
map.setView([0, 0], 1);