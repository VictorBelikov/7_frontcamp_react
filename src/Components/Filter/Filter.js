import React from 'react';

import style from './Filter.module.scss';

const Filter = (props) => {
  return (
    <div className={style.filter}>
      <span>{props.title}</span>
      <button className={`${style.left} ${style.active}`}>{props.leftBtnText}</button>
      <button className={style.right}>{props.rightBtnText}</button>
    </div>
  );
};

export default Filter;
