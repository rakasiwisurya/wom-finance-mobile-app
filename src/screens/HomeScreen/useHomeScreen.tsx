import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { signOut } from "../../redux/features/authSlice";
import { getMovies } from "../../redux/features/movieSlice";
import { asyncStorage } from "../../utils/asyncStorage";
import { notification } from "../../utils/notification";

const useHomeScreen = () => {
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

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return { isMoviesLoading, movies, logout, onRefresh };
};

export default useHomeScreen;
