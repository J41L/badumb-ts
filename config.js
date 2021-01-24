const fs = require('fs');

const httpsServerOptions = {
    key: fs.readFileSync(`${__dirname}/https/key.pem`),
    cert: fs.readFileSync(`${__dirname}/https/cert.pem`),
};

module.exports = {
    config: require(`.config/${process.env.NODE_ENV?.toLowerCase() || 'staging'}`),
    httpsServerOptions: httpsServerOptions,
}
