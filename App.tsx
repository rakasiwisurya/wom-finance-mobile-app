import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import {
  MD3LightTheme as DefaultTheme,
  MD2Colors,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";
import Router from "./src/router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MD2Colors.blue700,
    secondaryContainer: MD2Colors.blue700,
    onSecondaryContainer: MD2Colors.white,
  },
};

function MainApp() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          >
            <View style={{ flex: 1 }}>
              <StatusBar style="auto" />
              <NavigationContainer>
                <Router />
              </NavigationContainer>
              <FlashMessage position="top" floating />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
