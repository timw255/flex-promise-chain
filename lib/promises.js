var rp = require('request-promise');

const _functionOne = (context, complete, modules) => {
    const ms = random(500, 3000);

    delayProcessing(ms)
    getWeather(context.body.location)
    .then(result => {
        console.log(`Location: ${context.body.location}, Delay: ${ms}`);

        return complete().setBody(result).ok().next();
    })
    .catch(err => {
        return complete().setBody(err).runtimeError.done();
    });
};

// get weather data via GET request
function getWeather(location) {
    return rp.get('https://www.metaweather.com/api/location/search/?query=' + location)
        .then(result => {
            return result;
        });
}

// delay processing by a number of milliseconds
function delayProcessing(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// return a random int between min and max
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.functionOne = (context, complete, modules) => {
    return _functionOne(context, complete, modules);
};
