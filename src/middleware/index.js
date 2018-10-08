/* eslint-disable no-console */

import cors from 'cors';
import express from 'express';
import loggerMiddleware from './logger.middleware';

const compression = require('compression');

export default (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(compression());

  loggerMiddleware(app);
};
