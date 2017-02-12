import EasyActions from 'redux-easy-actions';

const {Actions, Constants} = EasyActions({
  MODIFY_BLOCK_NUMBER(type, blockNumber) {
    return {type, blockNumber};
  },
  MODIFY_NONCE(type, nonce) {
    return {type, nonce};
  },
  MODIFY_BLOCK_DATA(type, data) {
    return {type, data};
  },
  MINE(type) {
    return {type};
  }
});

export {Actions};
export {Constants};
