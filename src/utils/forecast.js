const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b7b021714c539d1e94cd4cce9d60b7c8&query=${encodeURIComponent(longitude)},${encodeURIComponent(latitude)}&units=f`

    request({url, json: true}, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined);
        } else if(body.error){
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. But it feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast;