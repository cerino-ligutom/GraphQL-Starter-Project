exports.seed = (knex) => {
  const users = [
    {
      firstName: 'Superadmin',
      lastName: 'LastName',
    },
    {
      firstName: 'Admin',
      lastName: 'LastName',
    },
  ];

  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => knex('users').insert(users));
};
