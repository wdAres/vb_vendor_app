import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { getErrorMessage } from "../../../utils/getErrorMessage";

const ControlledInput = ({
  control,
  name,
  forInput = {},
  errors,
  rules = {},
}) => {
  const basic = {
    autoComplete: "off",
    autoCapitalize: "none",
  };
  
  const {exists:errorExist} = getErrorMessage(errors,name);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <TextInput
          {...basic}
          {...forInput}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          style={[classes.input, errorExist && classes.errorInput]}
        />
      )}
    />
  );
};

export default ControlledInput;

const classes = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "red",
  },
});
