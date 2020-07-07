import _ from 'lodash';
import Artist from '../seeds/artist';

const artists = _.times(20, () => Artist());

export default artists;
