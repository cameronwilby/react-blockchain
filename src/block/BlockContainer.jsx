import {connect} from 'react-redux';
import {Actions} from './BlockActions';
import BlockComponent from './BlockComponent';
import hashBlock from '../hash/hashBlock';
import mineBlock from '../block/mineBlock';

const mapStateToProps = (state) => {
  return {block: state.singleBlock, previous: null}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBlockNumberChange(blockNumber) {
      dispatch(Actions.MODIFY_BLOCK_NUMBER(blockNumber));
    },
    onNonceChange(nonce) {
      dispatch(Actions.MODIFY_NONCE(nonce));
    },
    onDataChange(data) {
      dispatch(Actions.MODIFY_BLOCK_DATA(data));
    },
    onMine(block) {
      dispatch(Actions.MODIFY_NONCE(mineBlock(block)));
    }
  }
};

const Block = connect(mapStateToProps, mapDispatchToProps)(BlockComponent);

export default Block;
