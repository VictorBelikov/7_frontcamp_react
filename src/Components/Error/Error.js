import React from 'react';

import style from './Error.module.scss';
import SearchButton from '../UI/SearchButton/SearchButton';

const Error = (props) => (
  <div className={style.errorPage}>
    <p>Sorry, this route is not available.</p>
    <p className={style.secondMessage}>Please, try a different search.</p>
    <SearchButton isDisable={'false'} click={() => {props.history.push('/');}}>
      go to main page
    </SearchButton>
  </div>
);

export default Error;
