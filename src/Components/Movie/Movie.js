import React from 'react';

import movieImg from '../../assets/images/dummyImage.png';
import style from './Movie.module.scss';
import { Link } from 'react-router-dom';

const Movie = () => {
  return (
    <Link className={style.movie} to={'/movie'}>
      <img src={movieImg} alt="Cover" />
      <div className={style.metricsWrapper}>
        <span className={style.itemTitle}>Kill Bill: Vol 2</span>
        <span className={style.itemRelease}>2003</span>
      </div>
      <span className={style.itemGenre}>Action & Adventure</span>
    </Link>
  );
};

export default Movie;
