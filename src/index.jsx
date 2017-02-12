import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import routes from './routes';

import blockReducer from './block/blockReducer';
import hashReducer from './hash/hashReducer';
import blockchainReducer from './blockchain/blockchainReducer';
import {combineReducers} from 'redux';

const blockchainApp = combineReducers({singleBlock: blockReducer, hash: hashReducer, blockchain: blockchainReducer});

let store = createStore(blockchainApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
  {routes}
</Provider>, document.getElementById('root'));
