import React from 'react'
import {Button, Card} from 'semantic-ui-react';
import {Actions} from './BlockchainActions';
import Block from '../block/BlockComponent';
import {connect} from 'react-redux';
import mineBlock from '../block/mineBlock';

class Blockchain extends React.Component {
  addBlock = (e) => {
    this
      .props
      .onAddBlock({blockNumber: '', nonce: '', data: '', hash: ''});
  }
  render() {
    const {blockchain} = this.props;

    const blocks = blockchain.map((block, i) => {
      const mapStateToProps = (state) => {
        let newState = {
          block: state.blockchain[i],
          previous: i > 0 && state.blockchain[i - 1]
        };

        console.log('BlockchainComponent.render.block-' + i + ' (state, newState)', state, newState);

        return newState;
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          onBlockNumberChange(blockNumber) {
            console.log('Dispatching action onBlockNumberChange (e.target.value -> blockNumber)', blockNumber)
            dispatch(Actions.MODIFY_BLOCK_NUMBER_IN_CHAIN({
              ...block,
              blockNumber,
              i
            }));
          },
          onNonceChange(nonce) {
            dispatch(Actions.MODIFY_NONCE_IN_CHAIN({
              ...block,
              nonce,
              i
            }));
          },
          onDataChange(data) {
            dispatch(Actions.MODIFY_BLOCK_DATA_IN_CHAIN({
              ...block,
              data,
              i
            }));
          },
          onMine(block) {
            dispatch(Actions.MODIFY_NONCE(mineBlock(block)));
          }
        }
      }

      const BlockComponent = connect(mapStateToProps, mapDispatchToProps)(Block);
      return (<BlockComponent key={i}/>);
    });

    return (
      <div className="blockchain-component">
        <Button onClick={this.addBlock}>Add Block</Button>
        <Card.Group itemsPerRow={2}>
          {blocks}
        </Card.Group>
      </div>
    )
  }
}

export default Blockchain;
