import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const CP_Info = ({ control, errors , uni_style }) => {
    const inputFields = [
        {
          label: "Current Password",
          dataObj: {
            name: 'currentPassword',
            control:control,
            errors:errors,
            rules: {
              required: "Current password is required",
            },
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "New Password",
          dataObj: {
            name: "password",
            control:control,
            errors:errors,
            rules: {
              required: "New password is required",
            },
          },
          child: (data) => <ControlledInput {...data} />,
        }
      ];
      
      
  return (
    <View>
      <View style={[uni_style.container,uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default CP_Info;

const styles = StyleSheet.create({});
