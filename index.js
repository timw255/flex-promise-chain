const sdk = require('kinvey-flex-sdk');

const awaitHandlers = require('./lib/await');
const promiseHandlers = require('./lib/promises');

sdk.service((err, flex) => {
    const logger = flex.logger;
    if (err) {
        logger.error('Error initializing the Flex SDK, exiting.');
        throw err;
    }

    const flexFunctions = flex.functions;

    flexFunctions.register('handlerWithAsyncAwait', awaitHandlers.functionOne);

    flexFunctions.register('handlerWithPromises', promiseHandlers.functionOne);
});
