// specify env file path
require('dotenv').config({path: 'your_env_file.env'});
var fetch = require('isomorphic-fetch');
var express = require('express');
var app = express();

var weatherURL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=${process.env.WEATHER_KEY}`
var forecastURL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=${process.env.WEATHER_KEY}`

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
})

// express callback function for JSON fetch
app.get('/weather/:lat/:lon', function (req, res) {
    fetch(`${weatherURL}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(weather => res.send(weather))
        .catch(error => res.send(error))
})

app.get('/forecast/:lat/:lon', function (req, res) {
    fetch(`${forecastURL}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(forecast => res.send(forecast))
        .catch(error => res.send(error))
})

// verify server is running
app.listen(11646, function () {
    console.log("I'm alive!");
})
