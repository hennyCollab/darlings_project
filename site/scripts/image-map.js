$(window).on('resize', function() {
  scaleImageMap();
});

$(document).ready(function() {
  scaleImageMap();
});

function scaleImageMap() {
  var image = $('#darlings-study');
  var map = $('map[name="study-imagemap"]');
  var imageWidth = image.width();
  var imageHeight = image.height();
  var originalWidth = 10320; // The original width of your image
  var originalHeight = 7320; // The original height of your image
  
  map.find('area').each(function() {
    var area = $(this);
    var coords = area.attr('coords').split(',');
    var scaledCoords = [];
    
    for (var i = 0; i < coords.length; i++) {
      if (i % 2 === 0) {
        scaledCoords.push((coords[i] / originalWidth) * imageWidth);
      } else {
        scaledCoords.push((coords[i] / originalHeight) * imageHeight);
      }
    }
    
    area.attr('coords', scaledCoords.join(','));
  });
}