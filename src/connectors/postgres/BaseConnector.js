// @flow

import { ModelClass } from 'objection';

export default class BaseConnector {
  model: ModelClass;

  constructor(model: ModelClass) {
    if (!model) {
      throw Error('No derived connector provided');
    }
    this.model = model;
  }

  getById(id: number) {
    return this.model
      .query()
      .select()
      .where('id', id)
      .then(result => result[0]);
  }
}
