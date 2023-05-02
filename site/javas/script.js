var map = L.map('map', {
  crs: L.CRS.Simple, // CRS.Simple, which represents a square grid:
  minZoom: -5,
  maxZoom: 6
})

var bounds = [xy(0, 0), xy(16384, 11622)]
var image = L.imageOverlay('../images/landingpage-resize-large.jpg', bounds)
image.addTo(map)

map.fitBounds(bounds);