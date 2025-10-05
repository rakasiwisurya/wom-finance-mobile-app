import { useCallback, useEffect, useMemo } from "react";
import { setUser } from "../redux/features/authSlice";
import { asyncStorage } from "../utils/asyncStorage";
import { useAppDispatch, useAppSelector } from "./redux";
import { AESDecrypt } from "../utils/crypto";
import { notification } from "../utils/notification";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const isAuthorized = useMemo(() => !!user, [user]);

  const getUserData = useCallback(async () => {
    const token = await asyncStorage.getItem("token", false);
    const userData = token ? JSON.parse(AESDecrypt(token)) : null;

    dispatch(setUser(userData));
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  return { isAuthorized };
};
