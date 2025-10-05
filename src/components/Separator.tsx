import React from "react";
import { View } from "react-native";
import { TSeparator } from "../types/separator";

const Separator = ({ y, x }: TSeparator) => {
  return <View style={{ height: y, width: x }} />;
};

export default Separator;
