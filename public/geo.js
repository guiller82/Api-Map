//geocoder = new google.maps.Geocoder();
var geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder();
}



//mapsAPI = 'AIzaSyCAxTk57QmPIM7McvXnaSYk7Oyc2R_DFQk';
address = "1101 countryside pl se, smyrna, ga, 30080";
/*
alert ('hola');
console.log ('hola');*/

//function codeAddress(givenAddress) {

function codeAddress() { 
  //var address = givenAddress;
 // alert(type(givenAddress));
   // var address = document.getElementById("address").value;
  // alert(document.getElementById("address").value);
  var address = document.getElementById("address").value;
  //console.log(address);
    geocoder.geocode( { 'address': address }, function(r, s) {
      alert(r[0].geometry.location);
      //console.log((r[0].geometry.location));
    });
  }