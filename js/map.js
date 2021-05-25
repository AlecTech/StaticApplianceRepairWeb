// ============1st attempt worked======
// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: 51.120751, lng: -114.010572 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 8,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }



//===2nd attempt======//
// var locations = [
//     ['Bondi Beach', -33.890542, 151.274856, 4],
//     ['Coogee Beach', -33.923036, 151.259052, 5],
//     ['Cronulla Beach', -34.028249, 151.157507, 3],
//     ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//     ['Maroubra Beach', -33.950198, 151.259302, 1]
//   ];

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: new google.maps.LatLng(-33.92, 151.25),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   for (i = 0; i < locations.length; i++) {  
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//       map: map
//     });

//     google.maps.event.addListener(marker, 'click', (function(marker, i) {
//       return function() {
//         infowindow.setContent(locations[i][0]);
//         infowindow.open(map, marker);
//       }
//     })(marker, i));
//   }



//=========3rd attempt========
var locations = [
    ['Calgary Office (403)973-8894', 51.120751, -114.010572, 4],
    ['Edmonton Office (403)973-8894', 53.535411, -113.507996, 5],
    ['RedDeer Office (403)973-8894', 52.269838, -113.818359, 3],
    ['Banff Office (403)973-8894', 51.1777781, -115.5682504, 2]
   
  ];
  var map;
  var markers = [];
  
  function init(){
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 8,
      center: new google.maps.LatLng(51.120751, -114.010572),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var num_markers = locations.length;
    for (var i = 0; i < num_markers; i++) {  
      markers[i] = new google.maps.Marker({
        position: {lat:locations[i][1], lng:locations[i][2]},
        map: map,
        html: locations[i][0],
        id: i,
      });
        
      google.maps.event.addListener(markers[i], 'click', function(){
        var infowindow = new google.maps.InfoWindow({
          id: this.id,
          content:this.html,
          position:this.getPosition()
        });
        google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
          markers[this.id].setVisible(true);
        });
        this.setVisible(false);
        infowindow.open(map);
      });
    }
  }
  
  init();