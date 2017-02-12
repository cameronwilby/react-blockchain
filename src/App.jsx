import React, {Component} from 'react';
import {withRouter, Link} from 'react-router';
import {Menu, Container} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: ''
    };
  }

  handleItemClick = (e, {name}) => {
    this
      .props
      .router
      .push(name);
    this.setState({activeItem: name})
  }

  render() {
    return (
      <div className="App">
        <Menu color='blue' className="page grid" inverted size='massive'>
          <Menu.Item as={Link} to='/hash' active={this.state.activeItem === 'hash'}>
            Hash
          </Menu.Item>
          <Menu.Item as={Link} to='/block' active={this.state.activeItem === 'block'}>
            Block
          </Menu.Item>
          <Menu.Item as={Link} to='/blockchain' active={this.state.activeItem === 'blockchain'}>
            Blockchain
          </Menu.Item>
          <Menu.Item as={Link} to='/distributed' active={this.state.activeItem === 'distributed'}>
            Distributed
          </Menu.Item>
          <Menu.Item as={Link} to='/data' active={this.state.activeItem === 'data'}>
            Data
          </Menu.Item>
          <Menu.Item as={Link} to='/coinbase' active={this.state.activeItem === 'coinbase'}>
            Coinbase
          </Menu.Item>
        </Menu>

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
