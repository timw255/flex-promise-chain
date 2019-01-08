# Kinvey Promise Chain Example
Sample Flex project that demonstrates how to build services with both exported and non-exported functions, along with chaining multiple, asynchronous operations together.

## Quickstart
- Download or clone this repository
- Install dependencies by running `npm install`
- Start the service by running `npm run dev`

You can test the service by sending a POST to `localhost:10001/_flexFunctions/handlerWithAsyncAwait` or `localhost:10001/_flexFunctions/handlerWithPromises` with the following JSON body:

```json
{
	"location": "<some location>"
}
```


Weather data provided by [MetaWeather](https://www.metaweather.com/api/).