


/*
const apiUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAQKddwe2ozzRNMMzND17YlSrSL7qhPNyo&callback=initMap";

fucntion initMap() {
    var options = {
        zoom:8,
        center:{lat:27.9506,lng:-82.4572}
    }

    var map = new
    google.maps.Map(document.getElementById('map'), opetions);
}
*/


document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map').length > 0)
    {
      if (document.querySelector('html').lang)
        lang = document.querySelector('html').lang;
      else
        lang = 'en';
  
        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyAQKddwe2ozzRNMMzND17YlSrSL7qhPNyo&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
    }
  });
  
  var map;
  
  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 32.7767, lng: -96.7970},
      zoom: 12
    });
  
    fetch('markers.json')
       .then(function(response){return response.json()})
       .then(plotMarkers);
  }
  
  var markers;
  var bounds;
  
  function plotMarkers(m)
  {
    markers = [];
    bounds = new google.maps.LatLngBounds();
  
    m.forEach(function (marker) {
      var position = new google.maps.LatLng(marker.lat, marker.lng);
  
      markers.push(
        new google.maps.Marker({
          position: position,
          map: map,
          animation: google.maps.Animation.DROP
        })
      );
  
      bounds.extend(position);
    });
  
    map.fitBounds(bounds);
  }

  function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'markers.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var actual_JSON = JSON.parse(response);
  });
 } 

