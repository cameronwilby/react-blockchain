import React, {PropTypes} from 'react'
import {
  Button,
  Form,
  Icon,
  TextArea,
  Input,
  Card
} from 'semantic-ui-react'

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mining: false
    };
  }

  onMine = (e) => {
    e.preventDefault();

    this.setState({mining: true});

    setTimeout(() => {
      this
        .props
        .onMine(this.props.block);

      this.setState({mining: false});
    }, 50);
  }
  onBlockNumberChange = (e) => this
    .props
    .onBlockNumberChange(e.target.value)
  onNonceChange = (e) => this
    .props
    .onNonceChange(e.target.value)
  onDataChange = (e) => this
    .props
    .onDataChange(e.target.value)

  render() {
    let {block, previous, onBlockNumberChange, onNonceChange, onDataChange} = this.props;

    let blockValid = (block.hash.substr(0, 4) === '0000');
    let blockColor = blockValid
      ? 'green'
      : 'red';
    let blockText = blockValid
      ? 'Valid '
      : 'Invalid ';
    let blockIcon = blockValid
      ? (<Icon name='checkmark'/>)
      : (<Icon name='remove'/>)

    return (
      <Card color={blockColor}>
        <Card.Content>
          <Card.Description>
            <Form>
              <Form.Field name="blockNumber" value={block.blockNumber} control={Input} label='Block Number' onChange={this.onBlockNumberChange}/>
              <Form.Field name="nonce" value={block.nonce} control={Input} label='Nonce' onChange={this.onNonceChange}/>
              <Form.Field name="data" value={block.data} control={TextArea} label='Data' onChange={this.onDataChange}/>
              <Form.Field label='Previous' value={(previous && previous.hash) || '00000000000000000000000000000000000000000000000000000000'} control={Input} readOnly disabled/>
              <Form.Field label='SHA256 Hash' value={block.hash} control={Input} readOnly disabled/>
              <Button loading={this.state.mining} onClick={this.onMine}>
                <Icon name="settings"></Icon>Validate Block
              </Button>
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {blockIcon}
          {blockValid
            ? 'Valid '
            : 'Invalid '}
          Block
        </Card.Content>
      </Card>
    );
  }
}
Block.propTypes = {
  block: PropTypes.object.isRequired,
  onBlockNumberChange: PropTypes.func.isRequired,
  onNonceChange: PropTypes.func.isRequired,
  onDataChange: PropTypes.func.isRequired,
  onMine: PropTypes.func.isRequired
}

export default Block;
