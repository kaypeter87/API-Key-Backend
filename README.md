# API Keys on the Backend
created by Peter Kay

##Introduction

I created this simple backend using node.js, with the express framework, to store my API Keys. You will be able to make calls to this backend to get any data without exposing your precious keys. Enjoy!

## How to Run

As an example, this backend uses the openweather API to demonstrate its function.

1. `git clone https://github.com/deuscode/API-Key-Backend.git`
2. `cd API-Key-Backend` and `npm install`
3. Go to `openweathermap.org` and create an account & API Key
4. Create a .env file and store your Open Weather API Key within it, like this:

```
WEATHER_KEY=pasteyourapikeyhere12345678thecakeisalie
```
5. Then run `node apikey.js`
6. In your browser, go to `localhost:11646/weather/insertLAT/insertLON` to get a JSON response from the openweather API!

Example:
`localhost:11646/weather/38/139` or `localhost:11646/forecast/38/139`

### Note
You can specify whatever port you require:
```
app.listen(PORT_NUMBER, function () {
    console.log("I'm alive!");
})
```


## API Calls
1. You can create more API calls by adding additional variables to store the API URLs and adding the API Key environment variable to the end:

```
var apiURL = `http://pathtoAPI.org/data/whatever/api?&APPID=${process.env.ENTRYINDOTENVFILE}`
```

2. CORS has been enabled with the following:

```
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
})
```

3. Make sure to specify the path to your .env file within your dotenv require module:

```
require('dotenv').config({path: 'your_env_file.env'});
```

## Hosting
1. You may host this with any webhost that supports node.js
2. Make sure you intall the npm modules
3. Check with your host's software documentation for more info

## Thank you!

If you have any questions, feel free to e-mail me: `contact@kaypeter.com`
