export const Query = {
  // Note the parameters: (root, arguments, context)
  GetAllUsers: async (_, args, context) => {
    const users = await context.inMemoryContainer.User.getAll();

    return users;
  },

  // In-memory connector
  // // We can use object destructuring to access the property directly
  // User: async (_, { id }, { inMemoryContainer }) => {
  //   const user = await inMemoryContainer.User.getById(id);

  //   return user;
  // },

  // Postgre DB connector
  User: async (_, { id }, { pgConnector }) => {
    const { UserService } = pgConnector; // Get services

    const user = await UserService.getById(id);

    return user;
  },
};

export const Mutation = {
  // We can further destructure a property inside a property
  CreateUser: async (_, { input }, { inMemoryContainer: { User } }) => {
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
