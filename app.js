const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=886ded7a7622bf45e9faeef35df7cec3&query=51.1605,16.9033"

request({ url: url, json: true }, (error, res) => {
    const dataObj = res.body.current

    console.log(`It is currently ${dataObj.temperature} degrees out. It is fillslike ${dataObj.feelslike} out there.`)
})