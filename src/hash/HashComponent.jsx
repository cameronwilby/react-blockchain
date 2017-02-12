import React from 'react'
import {Form, Message, TextArea, Input, Select} from 'semantic-ui-react'

export class Hash extends React.Component {
  onAlgorithmChange = (e, element) => {
    this
      .props
      .onAlgorithmChange(element.value);
  }

  onDataChange = (e, element) => {
    this
      .props
      .onDataChange(element.value);
  }

  render() {
    let {algorithm, data, hash, algorithms} = this.props;

    return (
      <div className="hash-component">
        <Message attached header='Hash Generator' content='Play around and create some hashes of different types.'/>
        <Form className='attached fluid segment'>
          <Form.Field name='algorithm' value={algorithm} control={Select} label='Hashing Algorithm' onChange={this.onAlgorithmChange} options={algorithms}/>
          <Form.Field name="data" value={data} control={TextArea} label='Enter some data' onChange={this.onDataChange}/>
          <Form.Field name="hash" value={hash} control={Input} label={algorithm + ' hash'} disabled readOnly/>
        </Form>
      </div>
    )
  }
}

export default Hash;
