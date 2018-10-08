import { gql } from 'apollo-server-express';
import Base from '../base';

const User = gql`
  extend type Query {
    GetAllUsers: [User]
    User(id: ID!): User
  }

  extend type Mutation {
    CreateUser(input: CreateUserInput!): CreateUserMutationResponse
  }

  type User {
    id: ID!
    firstName: String
    middleName: String
    lastName: String
    fullName: String
    createdAt: Date
    updatedAt: Date
  }

  type CreateUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  input CreateUserInput {
    username: String!
    hash: String!
    firstName: String
    middleName: String
    lastName: String
    fullName: String
    email: String
    image: String
  }
`;

// We make sure to include all dependencies of this schema.
// In this case, Base where it includes scalar Date type
// as well as extending the type Query.
// makeExecutableSchema from graphql-tools will deeplink this.
// We also use a function to avoid circular dependency.
export default () => [User, Base];
