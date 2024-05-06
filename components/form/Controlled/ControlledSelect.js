import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { responsiveHeight } from "react-native-responsive-dimensions";

const ControlledSelect = memo(
  ({
    control,
    name,
    forInput = {},
    errors,
    rules = {},
    items,
    setItems,
    mode,
    multiple,
    max,
  }) => {
    const [open, setOpen] = useState(false);

    const basic = {
      autoComplete: "off",
      autoCapitalize: "none",
    };

    const { exists: errorExist } = getErrorMessage(errors, name);

    const handleValue = (func, value) => {
      let res = func(value);
      console.log(res);
      return res;
    };

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            <DropDownPicker
              mode={mode}
              max={max}
              multiple={multiple}
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
              style={[classes.input, errorExist && classes.errorInput]}
            />
          </>
        )}
      />
    );
  }
);

export default ControlledSelect;

const classes = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
    padding:10,
    fontFamily: "Inter-Medium",
    color: "#8f9095",
    fontSize:responsiveHeight(1.49),
    fontWeight: "500",
  },
  errorInput: {
    borderColor: "red",
  },
});
