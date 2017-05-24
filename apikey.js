// specify env file path
require('dotenv').config({path: 'keys.env'});
var http = require('http');

// console log API Key test
function onRequest(request, response) {
    var key = process.env.WEATHER_KEY;
    console.log("You asked for pie!" + request.url);
    console.log(key);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Now here's your pie!");
    response.end();
}

// verify server is running
http.createServer(onRequest).listen(8888);
console.log("I'm alive!");