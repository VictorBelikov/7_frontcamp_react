import React, { Component } from 'react';

import style from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.contentWrapper}>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;
