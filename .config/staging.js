module.exports = {
    httpport: parseInt(process.env.HTTPPORT) || 3000,
    httpsport: parseInt(process.env.HTTPSPORT) || 3001,
    envName: 'staging',
};