/*
 * Create and export configuration varibles
 */

let environments = {};

environments.development = {
    port: 3000,
    envName: 'development',
}

environments.staging = {
    port: parseInt(process.env.PORT) || 3000,
    envName: 'staging',
};

environments.production = {
    port: parseInt(process.env.PORT) || 5000,
    envName: 'production',
};

module.exports = environments[process.env.NODE_ENV?.toLowerCase() || 'staging'];
