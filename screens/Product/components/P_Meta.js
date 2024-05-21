import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const P_Meta = ({ control, errors, uni_style }) => {

  const inputFields = [
    {
      label: "Meta Title",
      dataObj: {
        name: "seo.metaTitle",
        rules: {
          required: "meta title is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Meta Description",
      dataObj: {
        name: "seo.metaDescription",
        rules: {
          required: "description is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Meta Keywords",
      dataObj: {
        name: "seo.metaKeywords",
        rules: {
          required: "meta keywords is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    }
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Meta Description</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default P_Meta;

const styles = StyleSheet.create({});
