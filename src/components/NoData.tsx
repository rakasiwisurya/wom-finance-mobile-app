import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const NoData = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/no-data.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>No Data</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 190,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
  },
});
