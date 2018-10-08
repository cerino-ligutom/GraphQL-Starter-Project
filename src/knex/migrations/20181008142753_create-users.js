const addTimestamps = require('../helpers/add-timestamps');

const TABLE_NAME = 'users';

exports.up = knex => knex.schema
  .createTable(TABLE_NAME, (table) => {
    table.increments();
    table.text('firstName');
    table.text('middleName');
    table.text('lastName');
  })
  .then(() => addTimestamps(knex, TABLE_NAME));

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
