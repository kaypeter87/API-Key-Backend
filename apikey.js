// specify env file path
require('dotenv').config({path: 'keys.env'});
var fetch = require('isomorphic-fetch');
var express = require('express');
var app = express();

var weatherURL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=${process.env.WEATHER_KEY}`

// express callback function for JSON fetch
app.get('/weather/:lat/:lon', function (req, res) {
    fetch(`${weatherURL}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(weather => res.send(weather))
        .catch(error => res.send(error))
})

// verify server is running
app.listen(11646, function () {
    console.log("I'm alive!");
})
