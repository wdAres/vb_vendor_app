import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

const Input = ({ value, func, name ,secureTextEntry }) => {
  const handleValue = (val) => {
    func(name, val);
  };

  const basic = {
    autoComplete: "off",
    autoCapitalize: "none",
  };

  return (
    <TextInput
      {...basic}
      secureTextEntry={secureTextEntry}
      defaultValue={value}
      onChangeText={handleValue}
      style={[classes.input]}
    />
  );
};

export default Input;

const classes = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  error: {
    borderColor: "red",
  },
});
false;
