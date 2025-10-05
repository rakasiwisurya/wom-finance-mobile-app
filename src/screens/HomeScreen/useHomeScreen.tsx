import { useEffect } from "react";
import { useAppNavigation } from "../../hooks/navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { signOut } from "../../redux/features/authSlice";
import { getMovies, resetMovies } from "../../redux/features/movieSlice";
import { TMovie } from "../../types/movie";
import { asyncStorage } from "../../utils/asyncStorage";
import { notification } from "../../utils/notification";

const useHomeScreen = () => {
  const navigate = useAppNavigation();

  const dispatch = useAppDispatch();
  const {
    isMoviesLoading,
    movies: { records: movies },
  } = useAppSelector((state) => state.movie);

  const logout = async () => {
    try {
      await asyncStorage.removeItem("token");
      dispatch(signOut());
    } catch (err) {
      const error = err as Error;
      notification.error(error.message);
    }
  };

  const onRefresh = () => dispatch(getMovies());

  const onGoToDetail = (data: TMovie) => navigate.push("Detail", data);

  useEffect(() => {
    dispatch(getMovies());

    return () => {
      dispatch(resetMovies());
    };
  }, [dispatch]);

  return { isMoviesLoading, movies, logout, onRefresh, onGoToDetail };
};

export default useHomeScreen;
