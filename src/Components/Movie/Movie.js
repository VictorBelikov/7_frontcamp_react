import React from 'react';

import style from './Movie.module.scss';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <Link className={style.movie} to={`/movie/${props.id}`}>
      <img src={props.imgUrl} alt="Cover" />
      <div className={style.metricsWrapper}>
        <span className={style.itemTitle}>{props.title}</span>
        <span className={style.itemRelease}>{props.releaseYear}</span>
      </div>
      <span className={style.itemGenre}>{props.genre}</span>
    </Link>
  );
};

export default Movie;
