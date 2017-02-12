import React from 'react'
import {Button, Card} from 'semantic-ui-react';
import {Actions} from '../block/BlockActions';
import Block from '../block/BlockComponent';
import {connect} from 'react-redux';
import mineBlock from '../block/mineBlock';

class Blockchain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addBlock = (e) => {
    this
      .props
      .onAddBlock({blockNumber: '', nonce: '', data: '', hash: ''});
  }
  render() {
    const {blockchain} = this.props;

    const blocks = [];

    for (let i = 0; i < blockchain.length; i++) {
      const mapStateToProps = (state) => {
        let newState = {
          block: blockchain[i],
          previous: i > 0 && blockchain[i - 1]
        };

        return newState;
      }

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
      }

      const BlockComponent = connect(mapStateToProps, mapDispatchToProps)(Block);
      blocks.push(<BlockComponent key={i}/>);
    }

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
