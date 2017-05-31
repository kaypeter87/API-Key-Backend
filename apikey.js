// specify env file path
require('dotenv').config({path: 'keys.env'});
var fetch = require('isomorphic-fetch');
var express = require('express');
var app = express();

var weatherKey = process.env.WEATHER_KEY;
var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?units=imperial?APPID=' + weatherKey;

// console log API Key test
app.get('/weather/:lat:lon', function (req, res) {
    fetch(`${weatherURL}?lat=${req.params.lat}, &lon=${req.params.lon}`)
        .then(response => response.json())
        .then(weather => res.send(weather))
        .catch(error => res.send(error))
})

// verify server is running
app.listen(3030, function () {
    console.log("I'm alive!");
    console.log(weatherURL);
})
