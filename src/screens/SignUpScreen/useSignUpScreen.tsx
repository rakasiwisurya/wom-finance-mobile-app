import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDataSignUp, schemaSignUp } from "../../types/signUp";
import { asyncStorage } from "../../utils/asyncStorage";
import { notification } from "../../utils/notification";

const useSignUp = () => {
  const navigate = useNavigation<NativeStackNavigationProp<any>>();

  const [isSecureText, setIsSecureText] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataSignUp>({
    resolver: zodResolver(schemaSignUp),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onToggleSecureText = () => {
    setIsSecureText((prevState) => !prevState);
  };

  const onSubmit = async (values: FormDataSignUp) => {
    const data = JSON.stringify(values);

    setIsSubmitLoading(true);

    try {
      await asyncStorage.setItem("db", data);
      notification.success("Success save data");
      reset();
    } catch (error) {
      const { message } = error as Error;
      notification.error(message);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const onGoToLogin = () => {
    navigate.replace("Login");
  };

  return {
    control,
    errors,
    isSecureText,
    isSubmitLoading,
    handleSubmit,
    onToggleSecureText,
    onSubmit,
    onGoToLogin,
  };
};

export default useSignUp;
