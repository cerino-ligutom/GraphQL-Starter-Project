import { Query as UserQuery, Mutation as UserMutation, User } from './user/resolver';

import Date from './scalar/date';

export default {
  Query: {
    ...UserQuery,
  },
  Mutation: {
    ...UserMutation,
  },

  Date,
  User,
};
