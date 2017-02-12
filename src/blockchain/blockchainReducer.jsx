import {Constants} from './BlockchainActions';

const blockchainReducer = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_BLOCK:
      return state.concat([action.block]);
    case Constants.MODIFY_BLOCK_NUMBER_IN_CHAIN:
      let blocks = [...state];

      let blockIndex = blocks.indexOf(action.block);

      return [].concat(state)
    case Constants.MODIFY_NONCE_IN_CHAIN:
      break;
    case Constants.MODIFY_BLOCK_DATA_IN_CHAIN:
      break;
    default:
      return state;
  };
};

export default blockchainReducer;
