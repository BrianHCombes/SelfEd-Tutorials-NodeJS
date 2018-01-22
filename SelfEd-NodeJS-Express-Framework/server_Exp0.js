//  Hello World example using Express
//  Express is a web application framework
//  https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

var express = require('express');
var app = express();

var request;
var response;

app.get('/', function (request, response) {
   response.send('Hello World');
   
   // console.log(req);
});




var server = app.listen(8081, "127.0.0.1", function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
   console.log("The host address is: " + host);
   console.log("The port is: " + port);
   //var reqBody = JSON.parse(req);
   //var resBody = JSON.parse(res);
   //console.log("The requset metadata is: " + reqBody);
   //console.log("The response metadata is: " + resBody);
});