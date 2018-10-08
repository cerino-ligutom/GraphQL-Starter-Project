const path = require('path');
const env = require('../config');

// Set migration options. Here we have a single migration to rule them all
const migrations = {
  tableName: 'knex_migrations',
  directory: path.normalize(path.join(__dirname, '/migrations')),
};

// Set seed options. Here we have seed options for each environment
const seeds = {
  directory: path.normalize(path.join(__dirname, `/seeds/${env.NODE_ENV}`)),
};

module.exports = {
  client: 'pg',
  connection: env.DATABASE.URL,
  pool: {
    min: env.DATABASE.POOL_MIN,
    max: env.DATABASE.POOL_MAX,
  },
  acquireConnectionTimeout: env.DATABASE.TIMEOUT,
  debug: env.DATABASE.DEBUG,
  migrations,
  seeds,
};
