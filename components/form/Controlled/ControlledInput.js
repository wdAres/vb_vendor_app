import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { responsiveHeight } from "react-native-responsive-dimensions";

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
    borderColor: "#D9D9D9",
    borderRadius: 5,
    padding:10,
    color:'#8F9095',
    fontSize:responsiveHeight(1.49),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  errorInput: {
    borderColor: "red",
  },
});
