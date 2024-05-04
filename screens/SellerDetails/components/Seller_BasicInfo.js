import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_BasicInfo = ({ control, errors }) => {
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
      label: "Shop Address",
      dataObj: {
        name: "shopAddress",
        rules: {
          required: "shop address is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    }
  ];

  return (
    <View style={styles.frameParent}>
      <Text style={[styles.basicInfo, styles.saveTypo]}>Basic Info</Text>
      <View style={styles.frameView}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_BasicInfo;

const styles = StyleSheet.create({});
