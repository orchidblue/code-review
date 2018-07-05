<<<<<<< HEAD
import React, { Component } from 'react';
import logo from '../logo.svg';

const APP_TITLE = ['Welcome to React', 'StopReact'];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: true,
    };
  }

  imgClick = () => {
    this.setState({ action: !this.state.action });
  };

  render() {
    const title = this.state.action ? APP_TITLE[0] : APP_TITLE[1];
    const className = this.state.action ? 'App-logo App-rotate' : 'App-logo';

    return (
      <header className="App-header">
        <img
          onClick={this.imgClick}
          src={logo}
          className={className}
          alt="logo"
        />
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;
=======
//sample
>>>>>>> origin/sample
