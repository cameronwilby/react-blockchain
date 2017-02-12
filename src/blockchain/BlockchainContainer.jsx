import {connect} from 'react-redux';
import {Actions} from './BlockchainActions';
import BlockchainComponent from './BlockchainComponent';

const mapStateToProps = (state) => {
  return {blockchain: state.blockchain};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBlock(block) {
      dispatch(Actions.ADD_BLOCK(block))
    }
  };
};

const Blockchain = connect(mapStateToProps, mapDispatchToProps)(BlockchainComponent);

export default Blockchain;
