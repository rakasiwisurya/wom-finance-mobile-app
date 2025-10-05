export type TMovie = {
  id: string;
  type: string;
  primaryTitle: string;
  originalTitle: string;
  primaryImage: {
    url: string;
    width: number;
    height: number;
  };
  startYear: number;
  runtimeSeconds: number;
  genres: string[];
  rating: {
    aggregateRating: number;
    voteCount: number;
  };
  plot: string;
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
