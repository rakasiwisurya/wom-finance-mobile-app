import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { MD2Colors } from "react-native-paper";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <Text style={styles.errorText}>{children}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: MD2Colors.red500,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 5,
  },
});

export default ErrorMessage;
