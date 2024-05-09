import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_Tax = ({ control, errors , uni_style }) => {
    const inputFields = [
        {
          label: "GST No.",
          dataObj: {
            name: 'tax.gst',
            control:control,
            errors:errors,
            rules: {
              required: "GST No. is required",
            },
            forInput:{
                keyboardType:'numeric'
            }
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "PST No.",
          dataObj: {
            name: 'tax.pst',
            control:control,
            errors:errors,
            rules: {
              required: "PST No. is required",
            },
            forInput:{
                keyboardType:'numeric'
            }
          },
          child: (data) => <ControlledInput {...data} />,
        }
      ];
      
      
  return (
    <View>
    <Text style={[uni_style.title]}>Tax</Text>
    <View style={[uni_style.container,uni_style.frameview]}>
      {inputFields.map((element) => (
        <FormItem key={element.dataObj.name} {...element} />
      ))}
    </View>
  </View>
  );
};

export default Seller_Tax;

const styles = StyleSheet.create({});
