import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import Hash from './hash/HashContainer';
import Block from './block/BlockContainer';
import Blockchain from './blockchain/BlockchainContainer';
import DistributedBlockchain from './distributedBlockchain/DistributedBlockchainContainer';
import BlockchainData from './blockchainData/BlockchainDataContainer';
import Coinbase from './coinbase/CoinbaseContainer';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hash" component={Hash}/>
      <Route path="/block" component={Block}/>
      <Route path="/blockchain" component={Blockchain}/>
      <Route path="/distributed" component={DistributedBlockchain}/>
      <Route path="/data" component={BlockchainData}/>
      <Route path="/coinbase" component={Coinbase}/>
    </Route>
  </Router>
);
