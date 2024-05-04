import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_Tax = ({ control, errors }) => {
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
    <View style={styles.frameParent}>
      <Text style={[styles.basicInfo, styles.saveTypo]}>Account</Text>
      <View style={styles.frameView}>
        {inputFields.map((element) => (
          <FormItem  key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_Tax;

const styles = StyleSheet.create({});
