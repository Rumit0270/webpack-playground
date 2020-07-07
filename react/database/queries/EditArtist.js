import _ from 'lodash';
import Artist from '../seeds/artist';
import db from './db';
/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */
export default (_id, artistProps) => {
  const artist = _.find(db, (a) => a._id === _id);
  _.extend(artist, artistProps);

  return new Promise((resolve, reject) => {
    resolve();
  });
};
