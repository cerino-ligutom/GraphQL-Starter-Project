// @flow

import User from './models/User';
import BaseConnector from './BaseConnector';

class UserConnector extends BaseConnector {
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
