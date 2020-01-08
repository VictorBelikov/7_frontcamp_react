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
  id: 278,
  title: "The Shawshank Redemption",
  tagline: "Fear can hold you prisoner. Hope can set you free.",
  vote_average: 8.6,
  vote_count: 9868,
  release_date: "1994-09-23",
  poster_path: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
  overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  budget: 25000000,
  revenue: 28341469,
  genres: ["Drama", "Crime"],
  runtime: 142,
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
