import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSwitch from "../../../components/form/Controlled/ControlledSwitch";
import FormItem2 from "../../../components/form/FormItem2";

const P_Category = ({ control, errors, uni_style, watch }) => {
  const inputFields = [
    {
      label: "Group Buy",
      dataObj: {
        name: "groupBy",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSwitch {...data} />,
    },
    {
      label: "Instabuild",
      dataObj: {
        name: "instabuild",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSwitch {...data} />,
    }
  ];


  const tagsInp = {
    label: "Tags",
    dataObj: {
      name: "tags",
      control: control,
      errors: errors,
      rules: {
        required: "tags is required",
      },
      forInput:{
        placeholder:'tag1 , tag2 , tag3'
      }
    },
    child: (data) => <ControlledInput {...data} />,
  }

  return (
    <>
      <View>
        <Text style={[uni_style.title]}>Category</Text>
        <View style={[uni_style.container, uni_style.frameview]}>
          {inputFields.map((element) => (
            <FormItem2 key={element.dataObj.name} {...element} />
        ))}
        <FormItem {...tagsInp} />
        </View>
      </View>
    </>
  );
};

export default P_Category;

const styles = StyleSheet.create({});
