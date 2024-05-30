import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const RR_Reason = ({ control, errors, uni_style }) => {


  const inputFields = [
    {
      dataObj: {
        name: "reason",
        control: control,
        errors: errors,
        forInput:{
          multiline:true,
          numberOfLines:20,
          textAlignVertical: 'top'
        },
        rules: {
          required: "Reason is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    }
  ];

  return (
    <View>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default RR_Reason;

const styles = StyleSheet.create({});
