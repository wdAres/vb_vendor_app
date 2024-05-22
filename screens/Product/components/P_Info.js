import React, { useState, useEffect } from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import useHttp2 from "../../../hooks/useHttp2";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";

const P_Info = ({ control, errors, uni_style, watch }) => {
  const { sendRequest: reqBrands, isLoading: brandsLoading } = useHttp2();
  const { sendRequest: reqCategories, isLoading: categoriesLoading } =
    useHttp2();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectBrand, setSelectBrand] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectRA, setSelectRA] = useState(false);
  const [ra, setRaData] = useState([
    { value: "none", label: "Not Applicable" },
    { value: "30", label: "30 Days" },
    { value: "60", label: "60 Days" },
    { value: "90", label: "90 Days" },
  ]);

  const [selectUT, setSelectUT] = useState(false);
  const [ut, setUTData] = useState( [
    { value: 'kg', label: 'kg' },
    { value: 'pc', label: 'pc' },
    { value: 'gm', label: 'grams' },
    { value: 'lb', label: 'lb' },
    { value: 'liter', label: 'liter' },
    { value: 'm', label: 'meter' },
    { value: 'ft', label: 'feet' },
    { value: 'ml', label: 'ml' },
]);

  const inputFields = [
    {
      label: "Name",
      dataObj: {
        name: "name",
        rules: {
          required: "name is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Unit Type",
      dataObj: {
        name: "uniyType",
        open: selectUT,
        setOpen: setSelectUT,
        items: ut,
        setItems: setUTData,
        rules: {
          required: "unit type is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Weight",
      dataObj: {
        name: "weight",
        rules: {
          required: "weight is required",
        },
        forInput:{
          keyboardType:'numeric'
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Brand",
      dataObj: {
        name: "brand",
        open: selectBrand,
        setOpen: setSelectBrand,
        items: brands,
        setItems: setBrands,
        rules: {
          required: "brand is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Category",
      dataObj: {
        name: "category",
        open: select,
        setOpen: setSelect,
        items: categories,
        setItems: setCategories,
        rules: {
          required: "category is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Return Applicable",
      dataObj: {
        name: "returnApplicable",
        open: selectRA,
        setOpen: setSelectRA,
        items: ra,
        setItems: setRaData,
        rules: {
          required: "return applicable is required",
        },
        control: control,
        errors: errors,
      },
      child: (data) => <ControlledSelect {...data} />,
    },
  ];

  const reStockingObj = {
    label: "Restocking Fee (%)",
    dataObj: {
      name: "restockingFee",
      rules: {
        required: "restocking fee is required",
      },
      forInput:{
        keyboardType:'numeric'
      },
      control: control,
      errors: errors,
    },
    child: (data) => <ControlledInput {...data} />,
  };

  const getBrands = () => {
    reqBrands({ url: `brand?limit=10&page=1` }, (result) => {
      let arr = result.data.docs.map((element) => ({
        value: element._id,
        label: element.name,
      }));
      setBrands(arr);
    });
  };

  const getCategories = () => {
    reqCategories({ url: `category?limit=10&page=1` }, (result) => {
      let arr = result.data.docs.map((element) => ({
        value: element._id,
        label: element.name,
      }));
      setCategories(arr);
    });
  };

  useEffect(() => {
    getBrands(), getCategories();
  }, []);

  const returnApplicable = watch('returnApplicable')

  return (
    <View>
      <Text style={[uni_style.title]}>Product Information</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        {inputFields.map((element) => (
          <FormItem key={element.dataObj.name} {...element} />
        ))}
        {returnApplicable !== "none" && <FormItem {...reStockingObj} />}
      </View>
    </View>
  );
};

export default P_Info;

const styles = StyleSheet.create({});
