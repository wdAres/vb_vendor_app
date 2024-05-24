import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";
import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";

const P_Desc = ({ control, errors, uni_style, initial_value = 1,updateOption }) => {
  const inputFields = [
    {
      label: "Description",
      dataObj: {
        name: "description",
        rules: {
          required: "description is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
  ];

  const [currentInx, setInx] = useState(initial_value);

  let valueField = (index) => {
    return [
      {
        label: `Key ${index + 1}`,
        dataObj: {
          name: `specifications.${index}.first`,
          control: control,
          errors: errors,
          rules: {
            required: "key is required",
          },
        },
        child: (data) => <ControlledInput {...data} />,
      },
      {
        label: `Value ${index + 1}`,
        dataObj: {
          name: `specifications.${index}.last`,
          control: control,
          errors: errors,
          rules: {
            required: "value is required",
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
    <Text style={[uni_style.title]}>Description</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
      <View>
      <Text style={[uni_style.title]}>Specifications</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {Array(currentInx)
          .fill("")
          .map((element, index) => (
            <>
              <FormItem key={index} {...valueField(index)[0]} />
              <FormItem key={index+100} {...valueField(index)[1]} />
              {currentInx > 1 && (
                <SecondaryBtn title={"Remove"} onPress={removeItem} />
              )}
            </>
          ))}
        <SecondaryBtn
          onPress={() => setInx((prev) => prev + 1)}
          title={"Add More Specifications"}
        />
      </View>
      </View>
    </>
  );
};

export default P_Desc;

const styles = StyleSheet.create({});
