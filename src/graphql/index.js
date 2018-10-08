import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import InMemoryConnector from '../connectors/in-memory';
import pgConnectors from '../connectors/postgres';

export default (app) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      user: req.user,
      InMemoryConnector,
      ...pgConnectors,
    }),
    playground: {
      settings: {
        'editor.theme': 'light',
      },
    },
  });

  server.applyMiddleware({ app });
};
