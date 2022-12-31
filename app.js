const request = require("request")

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/wroclaw.json?access_token=pk.eyJ1IjoiZGVuLTIxIiwiYSI6ImNrdjZvY2hsbjFlYWwybm8wNDZjMDhyamoifQ.vlC2ysnO6PU07Ln1ERWQrg&limit=1"

request({ url: geocodeURL, json: true }, (error, res) => {
    const latitude = res.body.features[0].center[0]
    const longitude = res.body.features[0].center[1]
    console.log('latitude :>> ', latitude);
    console.log('longitude :>> ', longitude);
})