import { makeExecutableSchema } from 'graphql-tools';

import Base from './base';

// Schema
import User from './user/schema';

import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs: [Base, User],
  resolvers,
  logger: { log: e => console.log(e) }, // eslint-disable-line no-console
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
