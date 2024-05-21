import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const P_ShippingConfig = ({ control, errors, uni_style, watch }) => {
  const [selectDt, setSelectDt] = useState(false);
  const [dt, setDtData] = useState([
    { value: "flat", label: "Flat" },
    { value: "free", label: "Free" },
  ]);

  const shippingType = watch("shipping").type;

  const inputFields = [
    {
      label: "Shipping Type",
      dataObj: {
        name: "shipping.type",
        open: selectDt,
        setOpen: setSelectDt,
        items: dt,
        setItems: setDtData,
        rules: {
          required: "shipping type is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: `Shipping Fee`,
      dataObj: {
        name: "shipping.fee",
        rules: {
          required: "shipping fee is required",
        },
        control: control,
        errors: errors,
        forInput: {
          editable: !!(shippingType !== "free"),
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Estimate Shipping Days",
      dataObj: {
        name: "estDeliveryDate",
        rules: {
          required: "estimate shipping days is required",
        },
        control: control,
        errors: errors,
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Shipping Configuration</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default P_ShippingConfig;

const styles = StyleSheet.create({});
