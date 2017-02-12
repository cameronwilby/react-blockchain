import EasyActions from 'redux-easy-actions';

const {Actions, Constants} = EasyActions({
  ADD_BLOCK(type, block) {
    return {type, block};
  }
});

export {Actions};
export {Constants};
