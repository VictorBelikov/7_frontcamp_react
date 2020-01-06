import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import style from './ParticularMovie.module.scss';
import movieImg from '../../assets/images/dummyImage.png';
import styleHeader from '../Search/Search.module.scss';
import Brand from '../../Components/UI/Brand/Brand';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';

class ParticularMovie extends Component {
  searchIconClickHandler = () => {
    this.props.history.push({ pathname: '/' });
  };

  render() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;

    return (
      <header className={styleHeader.header}>
        <div className={style.contentWrapper}>
          <div onClick={this.searchIconClickHandler} className={style.searchIconWrapper}>
            {searchIcon}
          </div>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <div className={style.mainWrapper}>
            <div className={style.imgWrapper}>
              <img src={movieImg} alt="Cover" />
            </div>
            <div className={style.wrapper}>
              <div className={style.ratingWrapper}>
                <h1 className={style.title}>Pulp Fiction</h1>
                <span className={style.rating}>5.0</span>
              </div>
              <p className={style.award}>Oscar winning Movie</p>
              <div className={style.movieDate}>
                <p>
                  1994 <span>year</span>
                </p>
                <p>
                  150 <span>min</span>
                </p>
              </div>
              <p className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis doloremque id ipsa
                quibusdam voluptates! Aliquam delectus, deleniti dolore ducimus id, laboriosam maxime minus nam quasi,
                rem rerum sapiente! Provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestias
                natus odio repudiandae sed? Accusantium ad adipisci alias cupiditate distinctio eius eum id impedit
                laudantium magnam, quo saepe sit, soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aliquid aspernatur atque, commodi consequuntur eos eum impedit in, ipsum laborum magnam nemo
                neque nisi qui reiciendis sed sunt ullam velit?
              </p>
            </div>
          </div>
        </div>
        <SearchFilter />
      </header>
    );
  }
}

export default ParticularMovie;
