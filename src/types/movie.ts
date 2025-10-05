export type TMovie = {
  id: string;
  type: string;
  isAdult: true;
  primaryTitle: string;
  originalTitle: string;
  primaryImage: {
    url: string;
    width: string;
    height: string;
    type: string;
  };
  startYear: string;
  endYear: string;
  runtimeSeconds: string;
  genres: string[];
  rating: {
    aggregateRating: string;
    voteCount: string;
  };
  metacritic: {
    url: string;
    score: string;
    reviewCount: string;
  };
  plot: string;
  directors: {
    id: string;
    displayName: string;
    alternativeNames: string[];
    primaryImage: {
      url: string;
      width: string;
      height: string;
      type: string;
    };
    primaryProfessions: string[];
    biography: string;
    heightCm: string;
    birthName: string;
    birthDate: {
      year: string;
      month: string;
      day: string;
    };
    birthLocation: string;
    deathDate: {
      year: string;
      month: string;
      day: string;
    };
    deathLocation: string;
    deathReason: string;
    meterRanking: {
      currentRank: string;
      changeDirection: string;
      difference: string;
    };
  }[];
  writers: {
    id: string;
    displayName: string;
    alternativeNames: string[];
    primaryImage: {
      url: string;
      width: string;
      height: string;
      type: string;
    };
    primaryProfessions: string[];
    biography: string;
    heightCm: string;
    birthName: string;
    birthDate: {
      year: string;
      month: string;
      day: string;
    };
    birthLocation: string;
    deathDate: {
      year: string;
      month: string;
      day: string;
    };
    deathLocation: string;
    deathReason: string;
    meterRanking: {
      currentRank: string;
      changeDirection: string;
      difference: string;
    };
  }[];
  stars: {
    id: string;
    displayName: string;
    alternativeNames: string[];
    primaryImage: {
      url: string;
      width: string;
      height: string;
      type: string;
    };
    primaryProfessions: string[];
    biography: string;
    heightCm: string;
    birthName: string;
    birthDate: {
      year: string;
      month: string;
      day: string;
    };
    birthLocation: string;
    deathDate: {
      year: string;
      month: string;
      day: string;
    };
    deathLocation: string;
    deathReason: string;
    meterRanking: {
      currentRank: string;
      changeDirection: string;
      difference: string;
    };
  }[];
  originCountries: {
    code: string;
    name: string;
  }[];
  spokenLanguages: {
    code: string;
    name: string;
  }[];
  interests: {
    id: string;
    name: string;
    primaryImage: {
      url: string;
      width: string;
      height: string;
      type: string;
    };
    description: string;
    isSubgenre: true;
    similarInterests: any[];
  }[];
};

export type TMovies = TMovie[];

export type TMovieState = {
  movies: {
    records: TMovies;
    totalCount: number;
    nextPageToken: string | null;
  };
  isMoviesLoading: boolean;
  moviesSuccess: any;
  moviesError: any;

  movie: TMovie | null;
  isMovieLoading: boolean;
  movieSuccess: any;
  movieError: any;
};
