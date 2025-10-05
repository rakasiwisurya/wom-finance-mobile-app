import React from "react";
import { Controller } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, MD2Colors, Text, TextInput } from "react-native-paper";
import ErrorMessage from "../../components/ErrorMessage";
import useSignUpScreen from "./useSignUpScreen";

const SignUpScreen = () => {
  const {
    control,
    errors,
    isSecureText,
    isSubmitLoading,
    handleSubmit,
    onToggleSecureText,
    onSubmit,
    onGoToLogin,
  } = useSignUpScreen();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/wom-finance.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>SignUp</Text>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Name"
                mode="outlined"
                value={value}
                error={!!errors.name}
                onChangeText={onChange}
                left={<TextInput.Icon icon="account" disabled />}
                autoCapitalize="words"
                returnKeyType="next"
              />
            )}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Email"
                mode="outlined"
                value={value}
                error={!!errors.email}
                onChangeText={onChange}
                left={<TextInput.Icon icon="email" disabled />}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
              />
            )}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Password"
                mode="outlined"
                value={value}
                error={!!errors.password}
                onChangeText={onChange}
                left={<TextInput.Icon icon="lock" disabled />}
                right={
                  <TextInput.Icon icon="eye" onPress={onToggleSecureText} />
                }
                secureTextEntry={isSecureText}
                autoCapitalize="none"
                returnKeyType="done"
              />
            )}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <Button
            mode="contained-tonal"
            loading={isSubmitLoading}
            disabled={isSubmitLoading}
            onPress={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
        </View>
        <View>
          <TouchableOpacity onPress={onGoToLogin}>
            <Text style={styles.goToLoginText}>Go To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  formContainer: {
    gap: 20,
    marginBottom: 25,
  },
  goToLoginText: {
    color: MD2Colors.blue700,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default SignUpScreen;
