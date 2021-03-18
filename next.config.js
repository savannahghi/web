const path = require('path');
require('dotenv').config();

module.exports = {
    env: {
        apiUrl: process.env.apiUrl
    },
    webpack: (config) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');

        return config;
    }
};
