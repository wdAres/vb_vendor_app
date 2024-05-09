import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Shop_Social = ({ control, errors , uni_style }) => {
    const inputFields = [
                {
          label: "Instagram",
          dataObj: {
            name: "socialMediaLinks.instagram",
            control: control,
            errors: errors,
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Facebook",
          dataObj: {
            name: "socialMediaLinks.facebook",
            control: control,
            errors: errors,
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Twitter",
          dataObj: {
            name: "socialMediaLinks.twitter",
            control: control,
            errors: errors,
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "YouTube",
          dataObj: {
            name: "socialMediaLinks.youtube",
            control: control,
            errors: errors,
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Website",
          dataObj: {
            name: "socialMediaLinks.website",
            control: control,
            errors: errors,
          },
          child: (data) => <ControlledInput {...data} />,
        },
      ];
      

  return (
    <View>
      <Text style={[uni_style.title]}>Social Links</Text>
      <View style={[uni_style.container,uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Shop_Social;

const styles = StyleSheet.create({});
