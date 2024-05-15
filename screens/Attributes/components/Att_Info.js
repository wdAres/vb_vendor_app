import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";

const Att_Info = ({
  control,
  errors,
  uni_style,
  updateOption,
  initial_value,
}) => {
  const [currentInx, setInx] = useState(initial_value);

  let valueField = (index) => {
    return {
      label: `Option ${index + 1}`,
      dataObj: {
        name: `options.${index}.value`,
        control: control,
        errors: errors,
        rules: {
          required: "Value is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    };
  };

  const inputFields = [
    {
      label: "Label",
      dataObj: {
        name: "name",
        control: control,
        errors: errors,
        rules: {
          required: "Label is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
  ];

  const removeItem = (index) => {
    setInx((prev) => prev - 1);
    updateOption(index);
  };

  return (
    <View>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
        {Array(currentInx)
          .fill("")
          .map((element, index) => (
            <>
              <FormItem key={index} {...valueField(index)} />
              {currentInx > 1 && (
                <SecondaryBtn title={"Remove"} onPress={removeItem} />
              )}
            </>
          ))}
        <SecondaryBtn
          onPress={() => setInx((prev) => prev + 1)}
          title={"Add Options"}
        />
      </View>
    </View>
  );
};

export default Att_Info;
