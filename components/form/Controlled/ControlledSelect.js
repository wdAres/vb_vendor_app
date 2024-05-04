import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import DropDownPicker from "react-native-dropdown-picker";

const ControlledSelect = ({
  control,
  name,
  forInput = {},
  errors,
  rules = {},
  items,
  setItems,
  open,
  setOpen,
}) => {
  const basic = {
    autoComplete: "off",
    autoCapitalize: "none",
  };

  const { exists: errorExist } = getErrorMessage(errors, name);

  const handleValue = (func,value) => {
    let res = func(value)
    console.log(res)
    return res
  }

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, onChange } }) => (
        <>
        {/* {console.log(onChange)} */}
        <DropDownPicker
          open={open}
          value={value}
          onChangeValue={onChange}
          setValue={onChange}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          zIndex={3000}
          zIndexInverse={1000}
          searchable
          listMode="MODAL"
        />
        </>
      )}
    />
  );
};

export default ControlledSelect;

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
