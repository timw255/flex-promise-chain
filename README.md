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

### Async/Await
Async/Await can be used in Flex however, you need to update the runtime of the service to Node 8 or above. Using the [Kinvey CLI](https://github.com/Kinvey/kinvey-cli#flex-runtime-version-selection) command `flex update --runtime node8` will do the trick.

Weather data provided by [MetaWeather](https://www.metaweather.com/api/).