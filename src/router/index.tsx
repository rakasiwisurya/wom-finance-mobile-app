import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MD2Colors } from "react-native-paper";
import { useAuth } from "../hooks/auth";
import { useAppSelector } from "../hooks/redux";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const Router = () => {
  const { isAppLoading } = useAppSelector((state) => state.auth);
  const { isAuthorized } = useAuth();

  if (isAppLoading) return <SplashScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: MD2Colors.white, padding: 5 },
      }}
    >
      {isAuthorized ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
