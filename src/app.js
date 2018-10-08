import express from 'express';
import knex from 'knex';
import { Model } from 'objection';
import env from './config';
import initMiddleware from './middleware';
import initApolloGraphQL from './graphql';

import connection from './knex/knexfile';

// Initialize knex.
const knexConnection = knex(connection);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knexConnection);

const app = express();

const startApp = async () => {
  initMiddleware(app);
  initApolloGraphQL(app);

  // Endpoint to check if the API is running
  app.get('/api/status', (req, res) => {
    res.send({ status: 'ok' });
  });

  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is now up @ ${env.HOST}:${env.PORT}`);
  });
};
startApp();
