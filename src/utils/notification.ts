import { showMessage } from "react-native-flash-message";

export const notification = {
  success: (message: string) => {
    showMessage({
      message: "Success",
      description: message,
      type: "success",
    });
  },
  warning: (message: string) => {
    showMessage({
      message: "Warning",
      description: message,
      type: "warning",
    });
  },
  error: (message: string) => {
    showMessage({
      message: "Failed",
      description: message,
      type: "danger",
    });
  },
  info: (message: string) => {
    showMessage({
      message: "Info",
      description: message,
      type: "info",
    });
  },
};
