var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pushserver'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/pushserver-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'pushserver'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/pushserver-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'pushserver'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/pushserver-production'
  }
};

module.exports = config[env];
