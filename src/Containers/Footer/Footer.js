import React from 'react';

import style from './Footer.module.scss';

const Footer = (props) => {
  return <footer className={style.footer}>{props.children}</footer>;
};

export default Footer;
