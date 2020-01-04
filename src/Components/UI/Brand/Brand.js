import React from 'react';

import style from './Brand.module.scss';

const Brand = (props) => (
  <div className={style.brand}>
    <strong>{props.fWord}</strong>
    <span>{props.sWord}</span>
  </div>
);

export default Brand;
