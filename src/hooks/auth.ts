import { useCallback, useEffect, useMemo } from "react";
import { setUser } from "../redux/features/authSlice";
import { asyncStorage } from "../utils/asyncStorage";
import { useAppDispatch, useAppSelector } from "./redux";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const isAuthorized = useMemo(() => !!user, [user]);

  const getUserData = useCallback(async () => {
    const userData = await asyncStorage.getItem("token");

    dispatch(setUser(userData));
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  return { isAuthorized };
};
