import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { responsiveHeight } from "react-native-responsive-dimensions";
import DatePicker from "react-native-date-picker";
import { styles } from "react-native-gifted-charts/src/LineChart/styles";
const Date = ({
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
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <>
          <Pressable onPress={() => setOpen(true)}>
            <Text>{value}</Text>
          </Pressable>
          <DatePicker
            modal
            open={open}
            date={value ? value : new Date()}
            onConfirm={(date) => {
              setOpen(false);
              onChange(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </>
      )}
    />
  );
};

export default Date;

const classes = StyleSheet.create({
  input: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    fontSize: responsiveHeight(1.49),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "transparent",
    color: "#8f9095",
    fontSize: responsiveHeight(1.49),
  },
  errorInput: {
    borderColor: "red",
  },
});
