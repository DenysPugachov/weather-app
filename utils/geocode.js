const request = require("request")

const geocode = (address, callback) => {
    //safely parse string in to URI (? >> %3F)
    const codedAddress = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${codedAddress}.json?access_token=pk.eyJ1IjoiZGVuLTIxIiwiYSI6ImNrdjZvY2hsbjFlYWwybm8wNDZjMDhyamoifQ.vlC2ysnO6PU07Ln1ERWQrg&limit=1`

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback(`Unable to connect to the service. Please check your network.`, undefined)
        } else if (res.body.features.length === 0) {
            callback(`Theare is not mathching result found. Please specify search term.`, undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode