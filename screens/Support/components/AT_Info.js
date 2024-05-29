import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const AT_Info = ({ control, errors, uni_style }) => {


  const [openProvinceSelect, setOpenProvinceSelect] = useState(false);
  const [province, setProvince] = useState([
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ]);

  const inputFields = [
    {
      label: "Subject",
      dataObj: {
        name: "subject",
        control: control,
        errors: errors,
        rules: {
          required: "Subject is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Message",
      dataObj: {
        name: "message",
        control: control,
        errors: errors,
        forInput:{
          multiline:true,
          numberOfLines:6,
          textAlignVertical: 'top'
        },
        rules: {
          required: "Message is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Priority",
      dataObj: {
        name: "priority",
        control: control,
        errors: errors,
        open: openProvinceSelect,
        setOpen: setOpenProvinceSelect,
        items: province,
        setItems: setProvince,
        rules: {
          required: "priority is required",
        },
      },
      child: (data) => <ControlledSelect {...data} />,
    },
  ];

  return (
    <View>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default AT_Info;

const styles = StyleSheet.create({});
