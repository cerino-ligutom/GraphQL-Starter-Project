require('dotenv').config();

const appRoot = require('app-root-path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const environment = {
  development: {
    NODE_ENV: 'development',
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'localhost',
    LOG_DIRECTORY: `${appRoot}/logs`,
    DATABASE: {
      URL: 'postgres://user:password@localhost:5432/db',
      POOL_MIN: 2,
      POOL_MAX: 10,
      TIMEOUT: 60000, // in ms
      DEBUG: true,
    },
  },

  staging: {
    NODE_ENV: 'staging',
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'localhost',
    LOG_DIRECTORY: `${appRoot}/logs`,
    DATABASE: {
      URL: '',
      POOL_MIN: 2,
      POOL_MAX: 10,
      TIMEOUT: 60000, // in ms
      DEBUG: true,
    },
  },

  production: {
    NODE_ENV: 'production',
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'localhost',
    LOG_DIRECTORY: `${appRoot}/logs`,
    DATABASE: {
      URL: '',
      POOL_MIN: 2,
      POOL_MAX: 10,
      TIMEOUT: 60000, // in ms
      DEBUG: false,
    },
  },
};

module.exports = environment[NODE_ENV];
