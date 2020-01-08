export const searchMoviesData = {
  data: [
    {
      budget: 13200000,
      genres: ['Comedy', 'Drama', 'Romance'],
      id: 19404,
      overview:
        'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
      poster_path: 'https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg',
      release_date: '1995-10-20',
      revenue: 100000000,
      runtime: 190,
      tagline: 'Come... Fall in Love',
      title: 'Dilwale Dulhania Le Jayenge',
      vote_average: 9.2,
      vote_count: 1297,
    },
    {
      budget: 0,
      genres: ['Drama', 'Romance'],
      id: 425895,
      overview:
        'In the world of semi-pro basketball, a beautiful bookie recruits a naïve but promising player to the underworld of game-fixing.',
      poster_path: 'https://image.tmdb.org/t/p/w500/lt03HzS8tfDg5ipUQcLqIRNs0sC.jpg',
      release_date: '2016-11-14',
      revenue: 0,
      runtime: 100,
      tagline: '',
      title: 'Tisay',
      vote_average: 9,
      vote_count: 1,
    },
  ],
  total: 2,
  offset: 0,
  limit: 2,
};

export const searchMovieByIdData = {
  id: 299534,
  title: 'Untitled Avengers',
  tagline: '',
  vote_average: 0,
  vote_count: 9,
  release_date: '2019-04-24',
  poster_path: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
  overview: 'The culmination of the Marvel Cinematic Universe.',
  budget: 0,
  revenue: 0,
  genres: ['Action', 'Adventure', 'Science Fiction'],
  runtime: null,
};

export const constants = {
  EMPTY_MOVIE: {
    id: 0,
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: [''],
  },
};
