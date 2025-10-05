import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { toggleDarkMode } from "../redux/features/authSlice";
import { THeaderProps } from "../types/header";

const Header = ({ title, onBack, onLogout }: THeaderProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.auth);

  const toggleTheme = () => dispatch(toggleDarkMode());

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level2 },
      ]}
    >
      {onBack ? (
        <View style={styles.leftBox}>
          <IconButton
            icon="arrow-left"
            onPress={onBack}
            iconColor={theme.colors.onSurface}
          />
        </View>
      ) : (
        <View style={styles.leftBox} />
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightBox}>
        <IconButton
          icon={darkMode ? "weather-night" : "white-balance-sunny"}
          size={22}
          onPress={toggleTheme}
          iconColor={theme.colors.onSurface}
        />

        {onLogout && (
          <IconButton
            icon="logout"
            onPress={onLogout}
            iconColor={theme.colors.onSurface}
          />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    padding: 5,
  },
  leftBox: {
    width: 52,
    height: "100%",
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
  },
  rightBox: {
    flexDirection: "row",
    gap: 5,
  },
});
