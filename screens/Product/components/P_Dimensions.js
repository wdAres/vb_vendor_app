import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const P_Dimensions = ({ control, errors, uni_style }) => {
  let valueField = (index) => {
    return [
      {
        // label: `Dimension ${index + 1}`,
        dataObj: {
          name: `dimensions.${index}.name`,
          control: control,
          errors: errors,
          rules: {
            required: "dimension name is required",
          },
          forInput: {
            editable: false,
          },
        },
        child: (data) => <ControlledInput {...data} />,
      },
      {
        // label: `Value ${index + 1}`,
        dataObj: {
          name: `dimensions.${index}.value`,
          control: control,
          errors: errors,
          rules: {
            required: "dimension value is required",
          },
          forInput: {
            keyboardType: "numeric",
          },
        },
        child: (data) => <ControlledInput {...data} />,
      },
    ];
  };

  const removeItem = (index) => {
    setInx((prev) => prev - 1);
    updateOption(index);
  };

  return (
    <>
      <View>
        <Text style={[uni_style.title]}>Dimensions</Text>
        <View style={[uni_style.container, uni_style.frameview]}>
          {Array(8)
            .fill("")
            .map((element, index) => (
              <>
                <FormItem key={index} {...valueField(index)[0]} />
                <FormItem key={index+100} {...valueField(index)[1]} />
              </>
            ))}
        </View>
      </View>
    </>
  );
};

export default P_Dimensions;

const styles = StyleSheet.create({});
