import EasyActions from 'redux-easy-actions';

const {Actions, Constants} = EasyActions({
  MODIFY_BLOCK_NUMBER_IN_CHAIN(type, block) {
    return {type, block};
  },
  MODIFY_NONCE_IN_CHAIN(type, block) {
    return {type, block};
  },
  MODIFY_BLOCK_DATA_IN_CHAIN(type, block) {
    return {type, block};
  },
  ADD_BLOCK(type, block) {
    return {type, block};
  }
});

export {Actions};
export {Constants};
