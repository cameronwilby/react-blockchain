import EasyActions from 'redux-easy-actions';

const {Actions, Constants} = EasyActions({
  MODIFY_ALGORITHM(type, algorithm) {
    return {type, algorithm};
  },
  MODIFY_HASH_DATA(type, data) {
    return {type, data};
  }
});

export {Actions};
export {Constants};
