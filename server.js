const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const config = require('./config');
const router = require('./router');
require('./routes');

const badumServer = {};

badumServer.boot = () => {
    router.clearProgramability();
    createServer().listen(config.port, () => {
        const env = config.envName.charAt(0).toUpperCase() + config.envName.slice(1);
        console.log(`${env} server listening on port ${config.port}`);
    });
}

const createServer = () => {
    return http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const trimmedPath = path.replace(/^\/+|\.+$/g, "");
        const method = req.method.toLowerCase();
        const query = parsedUrl.query;
        const headers = req.headers;
        const decoder = new StringDecoder("utf-8");
        let buffer = "";
        req.on('data', (data) => buffer += decoder.write(data));
        req.on('end', () => {
            buffer += decoder.end();
            // choose handler with notFound handler as fallback
            const handler = router[trimmedPath];
            // construct data and send to handler
            const data = {
                'trimmedPath': trimmedPath,
                'queryStringObject': query,
                'method': method,
                'headers': headers,
                'payload': buffer,
            };
            handler(res, data);
        });
    });
};

module.exports = badumServer;