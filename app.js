const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=886ded7a7622bf45e9faeef35df7cec3&query=51.1605,16.9033"
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/wroclaw.json?access_token=pk.eyJ1IjoiZGVuLTIxIiwiYSI6ImNrdjZvY2hsbjFlYWwybm8wNDZjMDhyamoifQ.vlC2ysnO6PU07Ln1ERWQrg&limit=1"

// request({ url: url, json: true }, (error, res) => {
//     if (error) {
//         console.log(`Unable to connect to weather service.`)
//     } else if (res.body.error) { // catch error from wether API
//         console.log('Error :>> ', res.body.error.info);
//     } else { // catch log level error (internet connectivity)
//         const dataObj = res.body.current
//         console.log(`It is currently ${dataObj.temperature} degrees out. \nIt is fillslike ${dataObj.feelslike} out there.`)
//     }
// })

request({ url: geocodeURL, json: true }, (error, res) => {
    if (error) {
        console.log(`Unable to connect to the service.`)
    } else if (res.body.features.length === 0) {
        console.log(`Theare is not mathching result found. Please specify search term.`);
    } else {
        const latitude = res.body.features[0].center[0]
        const longitude = res.body.features[0].center[1]
        console.log('latitude :>> ', latitude);
        console.log('longitude :>> ', longitude);
    }
}) 