import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Box = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level2 },
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontWeight: 700,
  },
});
