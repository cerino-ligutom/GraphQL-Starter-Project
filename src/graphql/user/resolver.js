export const Query = {
  // Note the parameters: (root, arguments, context)
  GetAllUsers: async (_, args, context) => {
    const users = await context.InMemoryConnector.User.getAll();

    return users;
  },

  // In-memory connector
  // // We can use object destructuring to access the property directly
  // User: async (_, { id }, { InMemoryConnector }) => {
  //   const user = await InMemoryConnector.User.getById(id);

  //   return user;
  // },

  // Postgre DB User connector
  User: async (_, { id }, { UserConnector }) => {
    const user = await UserConnector.getById(id);

    return user;
  },
};

export const Mutation = {
  // We can further destructure a property inside a property
  CreateUser: async (_, { input }, { InMemoryConnector: { User } }) => {
    const createdUser = await User.createUser(input);

    const response = {
      code: 200,
      success: true,
      message: 'User added',
      user: createdUser,
    };

    return response;
  },
};

export const User = {
  // eslint-disable-next-line no-unused-vars
  fullName: (user, args, context) => Promise.resolve(`${user.firstName} ${user.lastName}`.trim()),
};
