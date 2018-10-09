// @flow

import User from './models/User';
import BaseService from './BaseService';

class UserConnector extends BaseService {
  static instance: UserConnector;

  constructor() {
    super(User);

    // Singleton
    if (!UserConnector.instance) {
      UserConnector.instance = this;
    }
    return UserConnector.instance;
  }
}

const instance = new UserConnector();
Object.freeze(instance);

export default instance;
