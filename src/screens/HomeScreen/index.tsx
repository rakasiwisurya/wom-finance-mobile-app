import React from "react";
import { Text, View } from "react-native";
import { Button, MD2Colors } from "react-native-paper";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const { logout } = useHomeScreen();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>

      <Button
        mode="contained-tonal"
        buttonColor={MD2Colors.red700}
        onPress={logout}
      >
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
