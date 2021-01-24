module.exports = {
    httpport: parseInt(process.env.HTTPPORT) || 5000,
    httpsport: parseInt(process.env.HTTPSPORT) || 5001,
    envName: 'production',
};