import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const UL_Info = ({ control, errors, uni_style }) => {
  const [openProvinceSelect, setOpenProvinceSelect] = useState(false);
  const [province, setProvince] = useState([
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
  ]);

  const inputFields = [
    {
      label: "Log",
      dataObj: {
        name: "log",
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Status",
      dataObj: {
        name: "status",
        control: control,
        errors: errors,
        open: openProvinceSelect,
        setOpen: setOpenProvinceSelect,
        items: province,
        setItems: setProvince,
        rules: {
          required: "Status is required",
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

export default UL_Info;

const styles = StyleSheet.create({});
