module.exports = (knex, tableName) => knex.schema
  .alterTable(tableName, (t) => {
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .then(() => knex.raw(`
        CREATE OR REPLACE FUNCTION update_modified_column()
        RETURNS TRIGGER AS $$
        BEGIN
          NEW.updated_at = now();
          RETURN NEW;
        END;
        $$ language 'plpgsql';

        CREATE TRIGGER update_${tableName}_updated_at
        BEFORE UPDATE ON ${tableName}
        FOR EACH ROW
        EXECUTE PROCEDURE update_modified_column();
      `));
