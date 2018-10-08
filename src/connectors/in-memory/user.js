import _ from 'lodash';
import shortid from 'shortid';
import moment from 'moment';

class User {
  constructor() {
    this.users = [];
  }

  async getById(id) {
    return _.find(this.users, x => x.id === id);
  }

  async getAll() {
    return this.users;
  }

  async createUser(user) {
    const now = moment();

    const newUser = {
      id: shortid.generate(), // Add id to user
      createdAt: now,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}

const userRepository = new User();

module.exports = userRepository;
