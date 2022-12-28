const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=886ded7a7622bf45e9faeef35df7cec3&query=51.1605,16.9033"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})