import { useCallback, useEffect, useMemo } from "react";
import { setUser } from "../redux/features/authSlice";
import { asyncStorage } from "../utils/asyncStorage";
import { useAppDispatch, useAppSelector } from "./redux";
import { AESDecrypt } from "../utils/crypto";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const isAuthorized = useMemo(() => !!user, [user]);

  const getUserData = useCallback(async () => {
    const token = await asyncStorage.getItem("token", false);
    const userData = JSON.parse(AESDecrypt(token));

    dispatch(setUser(userData));
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  return { isAuthorized };
};
