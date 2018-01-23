var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   //left off here 09/20/2017
   response.end('Hello World\nHello World Again\n\n' + response.writeHead);
   // response.end('Hello World\nHello World Again\n\n' + response.write);
}).listen(8081);




// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');