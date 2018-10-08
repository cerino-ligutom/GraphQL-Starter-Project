import env from '../config';

const morgan = require('morgan');
const fs = require('fs');
const logger = require('../utils/logger');

export default (app) => {
  // Access logs
  const accessLogStream = fs.createWriteStream(`${env.LOG_DIRECTORY}/access.log`, { flags: 'a' });
  morgan.format(
    'custom',
    '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
  );
  app.use(morgan('custom', { stream: accessLogStream }));

  // Custom Logger
  app.use(
    morgan('combined', {
      skip: (req, res) => res.statusCode < 400,
      stream: logger.stream,
    }),
  );
};
