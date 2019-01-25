//geocoder = new google.maps.Geocoder();
var geocoder;
var vartokens = 0;
//alert(vartokens);
var minus = 0;




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

  
vartokens = document.getElementById("token").value;
//console.log (vartokens);
  var loc=[];
  //var address = givenAddress;
 // alert(type(givenAddress));
   // var address = document.getElementById("address").value;
  // alert(document.getElementById("address").value);
  var address = document.getElementById("address").value;
  //console.log(address);
    geocoder.geocode( { 'address': address }, function(r, s) {
     // alert (r[0].geometry.location);
     //var geocode = (r[0].geometry.location);
     loc[0]=r[0].geometry.location.lat();
     loc[1]=r[0].geometry.location.lng();
    

   
     maincontent =  loc[0] + "," + loc[1] ;
     document.getElementById("geoCode").innerText = maincontent;
    // console.log = vartokens;
     document.getElementById("token").value = showTokens(vartokens);
     
    });
  };


function showTokens (tokensi){

  tokensi = tokensi - 1;
return tokensi;

}

