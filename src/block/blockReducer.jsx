import {Constants} from './BlockActions';
import sha256 from 'sha256';
import hashBlock from '../hash/hashBlock';

const blockReducer = (state = {
  blockNumber: '',
  nonce: '',
  data: '',
  hash: ''
}, action) => {
  switch (action.type) {
    case Constants.MODIFY_BLOCK_NUMBER:
      let newState = {
        ...state,
        blockNumber: action.blockNumber,
        hash: hashBlock({blockNumber: action.blockNumber, nonce: state.nonce, data: state.data})
      };

      console.log('Handling action blockReducer.onBlockNumberChanged (action, state, newState)', action, state, newState);

      return newState;
    case Constants.MODIFY_NONCE:
      return {
        ...state,
        nonce: action.nonce,
        hash: hashBlock({blockNumber: state.blockNumber, nonce: action.nonce, data: state.data})
      };
    case Constants.MODIFY_BLOCK_DATA:
      return {
        ...state,
        data: action.data,
        hash: hashBlock({blockNumber: state.blockNumber, nonce: state.nonce, data: action.data})
      };
    default:
      return state;
  };
};

export default blockReducer;
