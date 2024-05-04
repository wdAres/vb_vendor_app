import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/form/Input"; // Assuming you have an Input component
import FormItem from "../../components/form/FormItem";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const Login = () => {
  const navigation = useNavigation();
  const { login, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    login(formData.username, formData.password);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Username",
      dataObj: {
        name: "username",
        value: formData.username,
        func: handleInputChange,
      },
      child: (data) => <Input {...data} />,
    },
    {
      label: "Password",
      dataObj: {
        name: "password",
        value: formData.password,
        func: handleInputChange,
      },
      child: (data) => <Input {...data} secureTextEntry={true} />,
    },
  ];

  return (
    <View style={styles.container}>
      {inputFields.map((element) => (
        <FormItem style={styles.input_con} key={element.name} {...element} />
      ))}
      <PrimaryBtn isLoading={isLoading} disabled={isLoading || !formData.password || !formData.username} title="Login" onPress={handleLogin} />
      <Text style={styles.bottomText}>
        Don't have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Signup")}
        >
          Register
        </Text>
      </Text>
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgetPassword")}
      >
        Forgot password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input_con: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  bottomText: {
    marginTop: 20,
    fontSize: 16,
  },
  linkText: {
    color: "#AE0000",
    textDecorationLine: "underline",
  },
  forgotPassword: {
    marginTop: 10,
    color: "#AE0000",
    textDecorationLine: "underline",
  },
});

export default Login;
