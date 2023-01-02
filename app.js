const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const address = process.argv[2]

if (!address) {
    console.log("Please provide address in first argument.")
} else {
    geocode(address, (err, data) => {
        if (err) {
            return console.log('err :>> ', err);
        }

        forecast(data.latitude, data.longitude, (err, forecastData) => {
            if (err) {
                return console.log('err :>> ', err);
            }
            console.log('data.location :>> ', data.location);
            console.log('forecastData :>> ', forecastData);
            // console.log(`It is currently in ${data.res.body.location.name} ${data.temperature} degrees out. \nIt is fillslike ${data.feelslike} out there.`)
        })
    })
}
