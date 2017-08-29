var currLati, currLongi;
currLati = "42.505143";
currLongi = "-71.272995";

/*
getGeoLocation(function(res) {
  console.log(res);
  var arr=res.split(",");
  currLati = arr[0];
  currLongi = arr[1];
  console.log("Current Lati is: " + currLati);
});

function getGeoLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position){
                callback(position.coords.latitude + "," + position.coords.longitude)
            }
        );
    } else {
      return "Unknown";
    }
}
*/

// create the google map
function myMap() {
      console.log("starting the myMap function");
      var myCenter = new google.maps.LatLng(currLati, currLongi);
      var mapCanvas = document.getElementById("google-map");
      var mapOptions = {center: myCenter, zoom: 10};
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);

 /*
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
          map.setCenter(pos);
          }, function() {
            handleLocationError(true, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, map.getCenter());
        }
*/

      // Zoom to 14 when clicking on marker
      google.maps.event.addListener(marker,'click',function() {
        var pos = map.getZoom();
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    //    window.setTimeout(function() {map.setZoom(pos);},3000);
        });
}
