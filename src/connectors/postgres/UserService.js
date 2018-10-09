// @flow

import User from './models/User';
import BaseService from './BaseService';

class UserService extends BaseService {
  static instance: UserService;

  constructor() {
    super(User);

    // Singleton
    if (!UserService.instance) {
      UserService.instance = this;
    }
    return UserService.instance;
  }
}

const instance = new UserService();
Object.freeze(instance);

export default instance;
