const request = require("request")

const forecast = (lat, lon, callback) => {
    //safely parse string in to URI (? >> %3F)
    const codedCoordinates = encodeURIComponent(`${lat},${lon}`)
    const url = `http://api.weatherstack.com/current?access_key=886ded7a7622bf45e9faeef35df7cec3&query=${codedCoordinates}`

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback(`Unable to connect to weather service. Please check your network.`, undefined)
        } else if (res.body.error) {
            callback('Error :>> ', res.body.error.info, undefined)
        } else {
            callback(undefined, {
                temperature: res.body.current.temperature,
                feelslike: res.body.current.feelslike,
                res: res
            })
        }
    })
}

module.exports = forecast