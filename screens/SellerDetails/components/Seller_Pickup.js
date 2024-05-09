import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_Pickup = ({ control, errors, uni_style }) => {

  const inputFields = [
    {
      label: "Longitude",
      dataObj: {
        name: "pickupPoint.longitude",
        control: control,
        errors: errors,
        rules: {
          required: "Longitude is required",
        },
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Latitude",
      dataObj: {
        name: "pickupPoint.latitude",
        control: control,
        errors: errors,
        rules: {
          required: "Latitude is required",
        },
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Pickup Point</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_Pickup;

const styles = StyleSheet.create({});
