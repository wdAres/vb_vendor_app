import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";
import DateInput from "../../../components/form/Controlled/DateInput";

const P_Price = ({
  control,
  errors,
  uni_style,
  watch,
  setDiscountDateRange,
  discountDateRange,
}) => {
  const [selectDt, setSelectDt] = useState(false);
  const [dt, setDtData] = useState([
    { value: "percentage", label: "Percentage" },
    { value: "flat", label: "Flat" },
  ]);

  const discountType = watch("discountType");

  const inputFields = [
    {
      label: "Unit Price",
      dataObj: {
        name: "price",
        rules: {
          required: "unit price is required",
        },
        control: control,
        errors: errors,
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Discount Type",
      dataObj: {
        name: "discountType",
        open: selectDt,
        setOpen: setSelectDt,
        items: dt,
        setItems: setDtData,
        rules: {
          required: "unit type is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: `Discount Value (${discountType === "percentage" ? "%" : "$"})`,
      dataObj: {
        name: "discount",
        rules: {
          required: "discount is required",
        },
        control: control,
        errors: errors,
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    // {
    //   label: "Discount Range Start",
    //   dataObj: {
    //     name: "discountDateRange.start",
    //     rules: {
    //       required: "start is required",
    //     },
    //     control: control,
    //     errors: errors,
    //   },
    //   child: (data) => <ControlledInput {...data} />,
    // },
    // {
    //   label: "Discount Range End",
    //   dataObj: {
    //     name: "discountDateRange.end",
    //     rules: {
    //       required: "end is required",
    //     },
    //     control: control,
    //     errors: errors,
    //   },
    //   child: (data) => <ControlledInput {...data} />,
    // },
    {
      label: "SKU",
      dataObj: {
        name: "sku",
        rules: {
          required: "sku is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Quantity Available",
      dataObj: {
        name: "quantityAvailable",
        rules: {
          required: "quantity avaiable is required",
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

  const startFunc = (date) => {
    setDiscountDateRange((prev) => ({
      ...prev,
      start: date,
    }));
  };
  const endFunc = (date) => {
    setDiscountDateRange((prev) => ({
      ...prev,
      end: date,
    }));
  };

  return (
    <View>
      <Text style={[uni_style.title]}>Product Price & Stock</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
        <DateInput
          dateState={discountDateRange?.start}
          dateStateFunc={startFunc}
          label={"Discount Start Range"}
        />
        <DateInput
          dateState={discountDateRange?.end}
          dateStateFunc={endFunc}
          label={"Discount End Range"}
        />
      </View>
    </View>
  );
};

export default P_Price;

const styles = StyleSheet.create({});
