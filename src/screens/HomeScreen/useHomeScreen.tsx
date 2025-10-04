import { useAppDispatch } from "../../hooks/redux";
import { signOut } from "../../redux/features/authSlice";
import { asyncStorage } from "../../utils/asyncStorage";

const useHomeScreen = () => {
  const dispatch = useAppDispatch();

  const logout = async () => {
    await asyncStorage.removeItem("token");
    dispatch(signOut());
  };

  return { logout };
};

export default useHomeScreen;
