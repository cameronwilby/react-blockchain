import {Constants} from './BlockchainActions';

const blockchainReducer = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_BLOCK:
      return state.concat([action.block]);
    default:
      return state;
  };
};

export default blockchainReducer;
