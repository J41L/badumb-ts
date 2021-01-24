const router = require('./router');

router.addHandler({
    path: 'sample',
    handlerFunc: (res, data) => {
        return {
            statusCode: 200,
            payload: {'name': 'Sample Handler'}
        };
    },
});
