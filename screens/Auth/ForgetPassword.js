import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/form/Input";
import FormItem from "../../components/form/FormItem";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import useHttp2 from "../../hooks/useHttp2";

const Signup = () => {
  const navigation = useNavigation();
  const {sendRequest,isLoading} = useHttp2()

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSignup = async () => {
    console.log(formData);
    sendRequest(
      {
        url: "auth/reset-password",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: {
          email:formData.email,
        },
      },
      (result) => {
        navigation.navigate('Login')
      },
      true
    );
  };


  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Email",
      dataObj: {
        name: "email",
        value: formData.name,
        func: handleInputChange,
      },
      child: (data) => <Input {...data} />,
    },
  ];

  return (
    <View style={styles.container}>
      {inputFields.map((element) => (
        <FormItem style={styles.input_con} key={element.label} {...element} />
      ))}
      <PrimaryBtn
      isLoading={isLoading}
        disabled={isLoading || !formData.email}
        title="Get Link"
        onPress={handleSignup}
      />
      <Text style={styles.bottomText}>
        Already have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
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
});

export default Signup;
