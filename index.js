var express = require("express");
var app = express();


var path = require("path");


var express = require('express');
var app = express();
/*public is folder in my project directory contains three folders
css,image,js
*/
//css  =>folder contains css file
//image=>folder contains images
////js   =>folder contains javascript files
//app.use(express.static( 'public/css'));


app.use(express.static(path.join(__dirname, 'public')));



//app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'));
//app.use('/js', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
    
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


/*


app.use('/static', express.static('public'));

app.listen(3000);

*/