import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TMovieState } from "../../types/movie";
import { api } from "../../utils/api";

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(
        "/titles?types=MOVIE&countryCodes=ID&startYear=2025&endYear=2025"
      );

      return response.data;
    } catch (error: any) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);

const initialState: TMovieState = {
  movies: {
    records: [],
    totalCount: 0,
    nextPageToken: null,
  },
  isMoviesLoading: true,
  moviesSuccess: null,
  moviesError: null,

  movie: null,
  isMovieLoading: true,
  movieSuccess: null,
  movieError: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    resetMovies: (state) => {
      state.movies = {
        records: [],
        totalCount: 0,
        nextPageToken: null,
      };

      state.isMoviesLoading = false;
      state.moviesSuccess = null;
      state.moviesError = null;
    },
    resetMovie: (state) => {
      state.movie = null;

      state.isMovieLoading = false;
      state.movieSuccess = null;
      state.movieError = null;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getMovies.pending, (state) => {
        state.moviesSuccess = null;
        state.moviesError = null;
        state.isMoviesLoading = true;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.moviesError = action.payload;
        state.isMoviesLoading = false;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        const { titles, totalCount, nextPageToken } = action.payload;

        state.movies = {
          records: titles,
          totalCount,
          nextPageToken,
        };
        state.moviesSuccess = action.payload?.message;
        state.isMoviesLoading = false;
      });
  },
});

export const { setMovie, resetMovies, resetMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
