import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/splash-icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator animating={true} color={MD2Colors.blue700} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MD2Colors.white,
    width: "100%",
    height: "100%",
    gap: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
});
