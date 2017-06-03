// specify env file path within the dotenv require module
require('dotenv').config({path: 'your_env_file.env'});
var fetch = require('isomorphic-fetch');
var express = require('express');
var app = express();

// set variables with API call URL
var weatherURL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=${process.env.WEATHER_KEY}`;
var forecastURL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=${process.env.WEATHER_KEY}`;
var twitchURL = `https://api.twitch.tv/kraken/streams/`;

// enable CORS for cross-browser support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

// populate express get methods for JSON fetch
app.get('/weather/:lat/:lon', function (req, res) {
    fetch(`${weatherURL}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(weather => res.send(weather))
        .catch(error => res.send(error))
});
app.get('/forecast/:lat/:lon', function (req, res) {
    fetch(`${forecastURL}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(forecast => res.send(forecast))
        .catch(error => res.send(error))
});
app.get('/streams/:channel', function (req, res) {
    fetch(`${twitchURL}${req.params.channel}?client_id=${process.env.TWITCH_KEY}`)
        .then(response => response.json())
        .then(stream => res.send(stream))
        .catch(error => res.send(error))
});

// verify server is running
app.listen(11646, function () {
    console.log("I'm alive! Call me at 11646!");
});
