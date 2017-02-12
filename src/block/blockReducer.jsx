import {Constants} from './BlockActions';
import sha256 from 'sha256';

const hashBlock = ({blockNumber, nonce, data}) => sha256(blockNumber + nonce + data);

const blockReducer = (state = {
  blockNumber: '',
  nonce: '',
  data: '',
  hash: ''
}, action) => {
  switch (action.type) {
    case Constants.MODIFY_BLOCK_NUMBER:
      return {
        ...state,
        blockNumber: action.blockNumber,
        hash: hashBlock({blockNumber: action.blockNumber, nonce: state.nonce, data: state.data})
      };
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
    case Constants.MINE:
      let block = {
        ...state
      };

      var found = false;
      for (let i in Array(500000).fill()) {
        if (found)
          break;
        block.nonce = i;
        block.hash = hashBlock(block);
        if (block.hash.substr(0, 4) === '0000') {
          found = true;
        }
      }

      return block;
    default:
      return state;
  };
};

export default blockReducer;
