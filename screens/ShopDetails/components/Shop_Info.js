import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Shop_Info = ({ control, errors , uni_style }) => {
  const inputFields = [
    {
      label: "Shop Name",
      dataObj: {
        name: "shopName",
        rules: {
          required: "shop name is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Shop Phone",
      dataObj: {
        name: "shopPhone",
        rules: {
          required: "shop phone is required",
        },
        control: control,
        errors: errors,
        forInput:{
            keyboardType:'numeric'
        }
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
        label: "Shop Email",
        dataObj: {
          name: "shopEmail",
          rules: {
            required: "shop email is required",
          },
          control: control,
          errors: errors,
        },
        child: (data) => <ControlledInput {...data} />,
      },
    {
      label: "Meta Title",
      dataObj: {
        name: "seoMetaTitle",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Meta Description",
      dataObj: {
        name: "seoMetaDescription",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    }
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Shop Info</Text>
      <View style={[uni_style.container,uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Shop_Info;

const styles = StyleSheet.create({});
