import React from 'react';

import style from './SearchInput.module.scss';

const SearchInput = (props) => (
  <input className={style.searchInput} type={props.type} placeholder={props.placeholder} />
);

export default SearchInput;
