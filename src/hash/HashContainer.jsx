import {connect} from 'react-redux';
import {Actions} from './HashActions';
import HashComponent from './HashComponent';

const mapStateToProps = (state) => {
  return state.hash;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAlgorithmChange(algorithm) {
      dispatch(Actions.MODIFY_ALGORITHM(algorithm));
    },
    onDataChange(data) {
      dispatch(Actions.MODIFY_HASH_DATA(data));
    }
  };
}

const HashContainer = connect(mapStateToProps, mapDispatchToProps)(HashComponent);

export default HashContainer;
