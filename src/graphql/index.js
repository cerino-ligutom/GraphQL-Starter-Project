import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import inMemoryContainer from '../connectors/in-memory';
import pgConnector from '../connectors/postgres';

export default (app) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      user: req.user,
      inMemoryContainer,
      pgConnector,
    }),
    playground: {
      settings: {
        'editor.theme': 'light',
      },
    },
  });

  server.applyMiddleware({ app });
};
