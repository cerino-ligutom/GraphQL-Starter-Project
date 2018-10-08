import { GraphQLScalarType, GraphQLError } from 'graphql';
import moment from 'moment';

function isValidDate(date) {
  return moment(date).isValid();
}

function validateDateString(date) {
  if (isValidDate()) {
    return moment(date);
  }
  throw new GraphQLError(`${date} is not a valid date`);
}

function formatDates(date) {
  const someDate = moment(date);

  return {
    formatted_complete: someDate.format('dddd, MMMM Do YYYY, h:mm:ss a'),
    unix: someDate.unix(),
    raw: someDate,
  };
}

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date type',
  // value comes from resolvers
  serialize: value => formatDates(value), // sent to the client

  // value comes from the client
  parseValue: value => validateDateString(value), // sent to resolvers

  parseLiteral: value => validateDateString(value), // parsed from the query string of client
});
