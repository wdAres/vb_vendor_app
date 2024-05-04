import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_Bank = ({ control, errors }) => {
    const inputFields = [
        {
          label: "Bank Name",
          dataObj: {
            name: 'bank.name',
            control:control,
            errors:errors,
            rules: {
              required: "Bank Name is required",
            },
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Account No.",
          dataObj: {
            name: "bank.account",
            control:control,
            errors:errors,
            rules: {
              required: "Account number is required",
            },
            forInput:{
              keyboardType:'numeric'
          }
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Transit No.",
          dataObj: {
            name: "bank.ifsc",
            control:control,
            errors:errors,
            rules: {
              required: "Transit number is required",
            },
            forInput:{
              keyboardType:'numeric'
          }
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Institution No.",
          dataObj: {
            name: "bank.branch",
            control:control,
            errors:errors,
            forInput:{
              keyboardType:'numeric'
          },
            rules: {
              required: "Institution number is required",
            },
          },
          child: (data) => <ControlledInput {...data} />,
        },
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

export default Seller_Bank;

const styles = StyleSheet.create({});
