// Load the http module to create an http server.

var http = require('http');
var os = require('os');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<body>" +
              "Hello World this is a really cool test for Brendan." +
               "<br>Served by: \n" + os.hostname() + 
               "</body>");
  console.log("Request Handled: " + request.url);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://" + os.hostname() + ":8000/");
