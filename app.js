const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

forecast(51.1005, 17.0333, (err, data) => {
    if (data) {
        console.log(`It is currently in ${data.res.body.location.name} ${data.temperature} degrees out. \nIt is fillslike ${data.feelslike} out there.`)
    } else {
        console.log('err :>> ', err);
    }
})

geocode("Wroclaw", (err, data) => {
    if (data) {
        console.log('data :>> ', data);
    } else {
        console.log('err :>> ', err);
    }
})
