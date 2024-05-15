import React, { useState } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const Seller_Address = ({ control, errors, uni_style }) => {
  const [openCitySelect, setOpenCitySelect] = useState(false);
  const [cities, setCities] = useState([
    { value: "Calgary", label: "Calgary" },
    { value: "Edmonton", label: "Edmonton" },
    { value: "Red Deer", label: "Red Deer" },
    { value: "Vancouver", label: "Vancouver" },
    { value: "Victoria", label: "Victoria" },
    { value: "Surrey", label: "Surrey" },
    { value: "Winnipeg", label: "Winnipeg" },
    { value: "Brandon", label: "Brandon" },
    { value: "Steinbach", label: "Steinbach" },
    { value: "Fredericton", label: "Fredericton" },
    { value: "Saint John", label: "Saint John" },
    { value: "Moncton", label: "Moncton" },
    { value: "St. John's", label: "St. John's" },
    { value: "Mount Pearl", label: "Mount Pearl" },
    { value: "Corner Brook", label: "Corner Brook" },
    { value: "Halifax", label: "Halifax" },
    { value: "Dartmouth", label: "Dartmouth" },
    { value: "Sydney", label: "Sydney" },
    { value: "Yellowknife", label: "Yellowknife" },
    { value: "Inuvik", label: "Inuvik" },
    { value: "Hay River", label: "Hay River" },
    { value: "Iqaluit", label: "Iqaluit" },
    { value: "Rankin Inlet", label: "Rankin Inlet" },
    { value: "Arviat", label: "Arviat" },
    { value: "Toronto", label: "Toronto" },
    { value: "Ottawa", label: "Ottawa" },
    { value: "Mississauga", label: "Mississauga" },
    { value: "Charlottetown", label: "Charlottetown" },
    { value: "Summerside", label: "Summerside" },
    { value: "Stratford", label: "Stratford" },
    { value: "Montreal", label: "Montreal" },
    { value: "Quebec City", label: "Quebec City" },
    { value: "Laval", label: "Laval" },
    { value: "Saskatoon", label: "Saskatoon" },
    { value: "Regina", label: "Regina" },
    { value: "Prince Albert", label: "Prince Albert" },
    { value: "Whitehorse", label: "Whitehorse" },
    { value: "Dawson City", label: "Dawson City" },
    { value: "Watson Lake", label: "Watson Lake" },
  ]);

  const [openProvinceSelect, setOpenProvinceSelect] = useState(false);
  const [province, setProvince] = useState([
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NS", label: "Nova Scotia" },
    { value: "NT", label: "Northwest Territories" },
    { value: "NU", label: "Nunavut" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
    { value: "YT", label: "Yukon" },
  ]);

  const inputFields = [
    {
      label: "Shop Address",
      dataObj: {
        name: "shopAddress",
        rules: {
          required: "shop address is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Province/Territory",
      dataObj: {
        name: "province",
        control: control,
        errors: errors,
        open: openProvinceSelect,
        setOpen: setOpenProvinceSelect,
        items: province,
        setItems: setProvince,
        rules: {
          required: "Province is required",
        },
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "City",
      dataObj: {
        name: "city",
        control: control,
        errors: errors,
        open: openCitySelect,
        setOpen: setOpenCitySelect,
        items: cities,
        setItems: setCities,
        rules: {
          required: "City is required",
        },
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Postal Code",
      dataObj: {
        name: "postalCode",
        control: control,
        errors: errors,
        rules: {
          required: "Postal Code is required",
        },
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
  ];

  return (
    <View>
      <Text style={[uni_style.title]}>Shop Address</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_Address;

const styles = StyleSheet.create({});
