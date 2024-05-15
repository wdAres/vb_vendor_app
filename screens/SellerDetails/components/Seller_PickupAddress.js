import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_PickupAddress = ({ control, errors, uni_style }) => {


  const inputFields = [
    {
      label: "Pickup Address",
      dataObj: {
        name: "pickupAddress.address",
        control: control,
        errors: errors,
        rules: {
          required: "Pickup Address is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Available Hours",
      dataObj: {
        name: "pickupAddress.availableHours",
        control: control,
        errors: errors,
        rules: {
          required: "Available hours is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    }
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Pickup Address</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_PickupAddress;

const styles = StyleSheet.create({});
