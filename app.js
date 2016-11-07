var http = require('http');
var os = require('os');

var srv = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<body>" +
              "Hello World this is a really cool test for Brendan." +
               "<br>Served by: \n" + os.hostname() + 
               "</body>");
  console.log("Request Handled: " + request.url);
});

srv.listen(8000);
console.log("Server running at http://" + os.hostname() + ":8000/");
