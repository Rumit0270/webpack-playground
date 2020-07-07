import _ from 'lodash';
import Artist from '../seeds/artist';
import db from './db';

/**
 * Create a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
export default (artistProps) => {
  const artist = _.extend({}, artistProps, {
    _id: _.uniqueId(),
    age: parseInt(artistProps.age) || 20,
    yearsActive: parseInt(artistProps.yearsActive) || 5,
  });
  db.push(artist);

  return new Promise((resolve, reject) => {
    resolve(artist);
  });
};
