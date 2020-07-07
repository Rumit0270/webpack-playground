import _ from 'lodash';
import Artist from '../seeds/artist';
import db from './db';

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
export default () => {
  return new Promise((resolve, reject) => {
    const range = {
      max: _.maxBy(db, (a) => a.age).age,
      min: _.minBy(db, (a) => a.age).age,
    };

    resolve(range);
  });
};
