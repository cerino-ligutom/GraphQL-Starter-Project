// @flow

import { ModelClass } from 'objection';

export default class BaseService {
  model: ModelClass;

  constructor(model: ModelClass) {
    if (!model) {
      throw Error('No derived service provided');
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
