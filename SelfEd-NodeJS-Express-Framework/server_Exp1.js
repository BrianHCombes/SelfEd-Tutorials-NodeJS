//  Basic Routing
//  https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm


var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello Delete');
});
 //   '<div style="font-size:30px; color:red">Hello DELETE</div>'

app.get('/my_get', function (req, res) {
   console.log("Got a GET request for /my_get");
   res.send('<div style="font-size:80px; color:red">Hello MY GET</div>');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
});

var server = app.listen(8081, "127.0.0.1", function () {

   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});