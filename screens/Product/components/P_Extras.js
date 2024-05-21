import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSwitch from "../../../components/form/Controlled/ControlledSwitch";
import FormItem2 from "../../../components/form/FormItem2";

const P_Extras = ({ control, errors, uni_style, watch }) => {
  const inputFields = [
    {
      label: "COD",
      dataObj: {
        name: "cod",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSwitch {...data} />,
    },
    {
      label: "Stock Visibility State",
      dataObj: {
        name: "stockVisibility",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSwitch {...data} />,
    }
  ];

  return (
    <>
      <View>
        <Text style={[uni_style.title]}>Some Checks</Text>
        <View style={[uni_style.container, uni_style.frameview]}>
          {inputFields.map((element) => (
            <FormItem2 key={element.dataObj.name} {...element} />
          ))}
        </View>
      </View>
    </>
  );
};

export default P_Extras;

const styles = StyleSheet.create({});
