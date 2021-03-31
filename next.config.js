const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');

        return config;
    },
    images: {
        domains: [
            'static.ghost.org',
            'ghost-cms-testing-ym4odmjn3a-ew.a.run.app',
            'mdbootstrap.com'
        ]
    }
};
