import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppNavigation } from "../../hooks/navigation";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/features/authSlice";
import { FormDataLogin, schemaLogin } from "../../types/login";
import { asyncStorage } from "../../utils/asyncStorage";
import { AESEncrypt } from "../../utils/crypto";
import { notification } from "../../utils/notification";

const useLoginScreen = () => {
  const navigate = useAppNavigation();

  const [isSecureText, setIsSecureText] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataLogin>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onToggleSecureText = () => {
    setIsSecureText((prevState) => !prevState);
  };

  const onSubmit = async (values: FormDataLogin) => {
    const data = JSON.stringify(values);

    setIsSubmitLoading(true);

    try {
      const dbData = await asyncStorage.getItem("db");

      const newDBData = {
        email: dbData.email,
        password: dbData.password,
      };

      const isValid = data === JSON.stringify(newDBData);

      if (!isValid) return notification.error("Incorrect credentials");

      delete dbData.password;

      const encryptedData = AESEncrypt(JSON.stringify(dbData));

      await asyncStorage.setItem("token", encryptedData, false);
      notification.success("Success login");
      reset();
      dispatch(setUser(dbData));
    } catch (error) {
      const { message } = error as Error;
      notification.error(message);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const onGoToSignUp = () => {
    navigate.replace("SignUp");
  };

  return {
    control,
    errors,
    isSecureText,
    isSubmitLoading,
    handleSubmit,
    onToggleSecureText,
    onSubmit,
    onGoToSignUp,
  };
};

export default useLoginScreen;
