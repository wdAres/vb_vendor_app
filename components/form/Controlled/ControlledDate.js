import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text } from "react-native";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { responsiveHeight } from "react-native-responsive-dimensions";
const ControlledDate = ({
  control,
  name,
  forInput = {},
  errors,
  placeholder,
  rules = {},
}) => {
  const basic = {
    autoComplete: "off",
    autoCapitalize: "none",
  };

  const { exists: errorExist } = getErrorMessage(errors, name);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <RNKDatepicker
          {...basic}
          {...forInput}
          placeholder={() => <Text>{placeholder}</Text>}
          value={value}
          date={value}
          onSelect={onChange}
          onChangeValue={onChange}
          style={[classes.input, errorExist && classes.errorInput]}
        />
      )}
    />
  );
};

export default ControlledDate;

const classes = StyleSheet.create({
  input: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    fontSize: responsiveHeight(1.49),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor:'transparent',
    color: "#8f9095",
    fontSize:responsiveHeight(1.49)
  },
  errorInput: {
    borderColor: "red",
  },
});
