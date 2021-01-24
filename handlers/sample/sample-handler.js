const sample = {};

sample.handler = (res, data) => {
    const handler = handlers[data.method];
    return handler(res, data);
};

const getHandler = (res, data) => {
    return {
        statusCode: 200,
        payload: {'name': 'Get Sample Handler'}
    };
};

const postHandler = (res, data) => {
    return {
        statusCode: 201,
        payload: {'name': 'Post Sample Handler'}
    }
}

const patchHandler = (res, data) => {
    return {
        statusCode: 200,
        payload: {'name': 'Patch Sample Handler'}
    }
}

const deleteHandler = (res, data) => {
    return {
        statusCode: 402,
        payload: {'name': 'Delete Sample Handler'}
    }
}

handlers = {
    get: getHandler,
    post: postHandler,
    patch: patchHandler,
    delete: deleteHandler,
};

module.exports = sample;