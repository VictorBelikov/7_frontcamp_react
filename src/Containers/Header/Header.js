import React, { Component } from 'react';

import style from './Header.module.scss';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.contentWrapper}>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
        <SearchFilter />
      </header>
    );
  }
}

export default Header;
