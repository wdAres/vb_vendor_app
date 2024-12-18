import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";
import ControlledDate from "../../../components/form/Controlled/ControlledDate";
import DateInput from "../../../components/form/Controlled/DateInput";

const P_GroupBuy = ({
  control,
  errors,
  uni_style,
  watch,
  setDiscountDateRange,
  discountDateRange,
}) => {
  const [selectDt, setSelectDt] = useState(false);
  const [dt, setDtData] = useState([
    { value: "flat", label: "Flat" },
    { value: "percentage", label: "Percentage" },
  ]);

  const discountType = watch("groupByDiscountType");

  const inputFields = [
    {
      label: "Min Order",
      dataObj: {
        name: "groupByMinOrder",
        rules: {
          required: "min order is required",
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
      label: "Max Orders Reach",
      dataObj: {
        name: "groupByOrderReach",
        rules: {
          required: "max orders reach is required",
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
        name: "groupByDiscountType",
        open: selectDt,
        setOpen: setSelectDt,
        items: dt,
        setItems: setDtData,
        rules: {
          required: "discount type is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: `Discount (${discountType === "percentage" ? "%" : "$"})`,
      dataObj: {
        name: "groupByDiscount",
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
    //   label: "Discount Start Date",
    //   dataObj: {
    //     name: "groupByStartDate",
    //     rules: {
    //       required: "discount start date is required",
    //     },
    //     control: control,
    //     errors: errors,
    //   },
    //   child: (data) => <ControlledDate {...data} />,
    // },
    // {
    //   label: "Discount End Date",
    //   dataObj: {
    //     name: "groupByEndDate",
    //     rules: {
    //       required: "discount end date is required",
    //     },
    //     control: control,
    //     errors: errors,
    //   },
    //   child: (data) => <ControlledDate {...data} />,
    // }
  ];

  const startFunc = (date) => {
    setDiscountDateRange((prev) => ({
      ...prev,
      groupByStartDate: date,
    }));
  };
  const endFunc = (date) => {
    setDiscountDateRange((prev) => ({
      ...prev,
      groupByEndDate: date,
    }));
  };

  return (
    <View>
      <Text style={[uni_style.title]}>Product Group Buy</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
        <DateInput
          dateState={discountDateRange?.groupByStartDate}
          label={"Group Buy Start"}
          dateStateFunc={startFunc}
        />
        <DateInput
          dateState={discountDateRange?.groupByEndDate}
          label={"Group Buy End"}
          dateStateFunc={endFunc}
        />
      </View>
    </View>
  );
};

export default P_GroupBuy;

const styles = StyleSheet.create({});
