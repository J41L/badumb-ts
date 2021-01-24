// Only works for top level defined handlers currently.

const { readdirSync } = require('fs');
const { join } = require('path');
const router = require('./router');

// Setup and Read handlers
const handlers = {};
const handlersPath = join(__dirname, './handlers');

const getHandler = (handlerDir) => {
    return readdirSync(
        handlerDir,
        (file) => {
            if (file.match(/.*-handler.js/)) {
                return file;
            }
        })
};

readdirSync(handlersPath, { withFileTypes: true })
    .filter(src => src.isDirectory())
    .map((file) => join(handlersPath, file.name))
    .forEach((file) => {
        console.log(file);
        var path = file.split('/');
        path = path[path.length-1];
        handlers[path] = require(`${file}/${getHandler(file)}`);
    });

// needs to be nicer
Object.keys(handlers).forEach((path) => {
    Object.keys(handlers[path]).forEach((handler) => {
        router.addHandler({
            path: path,
            handlerFunc: handlers[path][handler]
        });
    });
});
