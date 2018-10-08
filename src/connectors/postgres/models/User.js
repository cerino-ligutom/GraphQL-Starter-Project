// @flow

import BaseModel from './Base';

class User extends BaseModel {
  // Table name is the only required property.
  static get tableName(): string {
    return 'users';
  }

  // Each model must have a column (or a set of columns) that uniquely
  // identifies the rows. The column(s) can be specified using the `idColumn`
  // property. `idColumn` returns `id` by default and doesn't need to be
  // specified unless the model's primary key is something else.
  static get idColumn(): string {
    return 'id';
  }

  // Methods can be defined for model classes just as you would for
  // any javascript class. If you want to include the result of these
  // method in the output json, see `virtualAttributes`.
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
