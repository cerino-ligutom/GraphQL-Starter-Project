const Base = `
  type Query {
    dummy: Boolean
  }

  type Mutation {
    dummy: Boolean
  }

  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

export default () => [Base];
