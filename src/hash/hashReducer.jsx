import {Constants} from './HashActions';
import sha1 from 'sha1';
import sha256 from 'sha256';
import md5 from 'md5';

let algorithmMap = {
  sha1: sha1,
  sha256: sha256,
  md5: md5
};

const initialState = {
  algorithm: 'sha1',
  data: '',
  hash: '',
  algorithms: [
    {
      key: 'sha1',
      text: 'SHA1',
      value: 'sha1'
    }, {
      key: 'sha256',
      text: 'SHA256',
      value: 'sha256'
    }, {
      key: 'md5',
      text: 'MD5',
      value: 'md5'
    }
  ]
};

function hashReducer(state = initialState, action) {

  switch (action.type) {
    case Constants.MODIFY_ALGORITHM:
      return {
        ...state,
        algorithm: action.algorithm,
        hash: algorithmMap[action.algorithm](state.data)
      };
    case Constants.MODIFY_HASH_DATA:
      return {
        ...state,
        data: action.data,
        hash: algorithmMap[state.algorithm](action.data)
      };
    default:
      return state;
  }
}

export default hashReducer;
