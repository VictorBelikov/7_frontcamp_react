import React from 'react';

import style from './SearchButton.module.scss';

const SearchButton = (props) => (
  <button disabled={!props.isDisable.trim()} onClick={props.click} className={style.button}>
    {props.children}
  </button>
);

export default SearchButton;
