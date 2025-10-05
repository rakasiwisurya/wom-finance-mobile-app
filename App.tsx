import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import {
  MD2Colors,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { useAppSelector } from "./src/hooks/redux";
import store from "./src/redux/app/store";
import Router from "./src/router";

function MainApp() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const { darkMode } = useAppSelector((state) => state.auth);
  const theme = useMemo(
    () =>
      darkMode
        ? {
            ...MD3DarkTheme,
            colors: {
              ...MD3DarkTheme.colors,
              primary: MD2Colors.blue700,
              secondaryContainer: MD2Colors.blue700,
              onSecondaryContainer: MD2Colors.white,
            },
          }
        : {
            ...MD3LightTheme,
            colors: {
              ...MD3LightTheme.colors,
              primary: MD2Colors.blue700,
              secondaryContainer: MD2Colors.blue700,
              onSecondaryContainer: MD2Colors.white,
            },
          },
    [darkMode]
  );

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.colors.elevation.level5 }}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={
              keyboardVisible
                ? Platform.OS === "ios"
                  ? "padding"
                  : "height"
                : undefined
            }
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          >
            <View style={{ flex: 1 }}>
              <StatusBar
                style={darkMode ? "light" : "dark"}
                backgroundColor={theme.colors.elevation.level5}
              />
              <NavigationContainer>
                <Router />
              </NavigationContainer>
              <FlashMessage position="bottom" floating />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
