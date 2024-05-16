import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ControlledSelect from "../../../components/form/Controlled/ControlledSelect";
import FormItem from "../../../components/form/FormItem";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import useHttp2 from "../../../hooks/useHttp2";
import ControlledDate from "../../../components/form/Controlled/ControlledDate";

export default function Coupon_Info({ control, errors }) {
  const [openProductSelect, setOpenProductSelect] = useState(false);
  const [products, setProducts] = useState([]);

  const [openCTSelect, setOpenCTSelect] = useState(false);
  const [ct, setCT] = useState([{ label: "Product", value: "product" }]);
  const [openDTSelect, setOpenDTSelect] = useState(false);
  const [dt, setDT] = useState([
    { label: "Fixed", value: "fixed" },
    { label: "Percentage", value: "percentage" },
  ]);

  const { sendRequest: productDataFunc, isLoading: productDataLoading } =
    useHttp2();
  const handleSearchProducts = (key) => {
    productDataFunc(
      {
        url: `product?limit=10&page=1&search=${key ? key : ""}`,
      },
      (result) => {
        let arr = result.data.docs.map((element) => ({
          label: element.name,
          value: element._id,
        }));
        setProducts(arr);
      }
    );
  };

  useEffect(() => {
    handleSearchProducts();
  }, []);

  const formData = [
    {
      label: "Coupon Type",
      dataObj: {
        name: "couponType",
        control: control,
        errors: errors,
        open: openCTSelect,
        setOpen: setOpenCTSelect,
        items: ct,
        setItems: setCT,
        rules: {
          required: "Coupon Type is required",
        },
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Coupon Code",
      dataObj: {
        name: "couponCode",
        control: control,
        errors: errors,
        rules: {
          required: "Coupon Code is required",
          validate: (value) => {
            console.log(value)
            return (
              [/^[^\s]+$/].every((pattern) =>
                pattern.test(value)
              ) ||"Your input cannot contain any spaces"
            );
          },
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Coupon Label",
      dataObj: {
        name: "couponLabel",
        control: control,
        errors: errors,
        rules: {
          required: "Coupon Label is required",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Expiry Date",
      dataObj: {
        name: "expiryDate",
        control: control,
        errors: errors,
        rules: {
          required: "Expiry Date is required",
        },
        placeholder:'Select Expiry Date'
      },
      child: (data) => <ControlledDate {...data} />,
    },
    {
      label: "Discount Type",
      dataObj: {
        name: "discountType",
        control: control,
        errors: errors,
        open: openDTSelect,
        setOpen: setOpenDTSelect,
        items: dt,
        setItems: setDT,
        rules: {
          required: "Discount Type is required",
        },
      },
      child: (data) => <ControlledSelect {...data} />,
    },
    {
      label: "Discount Value",
      dataObj: {
        name: "discountValue",
        control: control,
        errors: errors,
        rules: {
          required: "Discount Value is required",
        },
        forInput: {
            keyboardType: "numeric",
          }
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Minimum Order Amount",
      dataObj: {
        name: "minimumAmount",
        control: control,
        errors: errors,
        rules: {
          required: "Minimum Order Amount is required",
        },
        forInput: {
          keyboardType: "numeric",
        }
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Max Discount",
      dataObj: {
        name: "maxDiscount",
        control: control,
        errors: errors,
        rules: {
          required: "Max Discount is required",
        },
        forInput: {
          keyboardType: "numeric",
        },
      },
      child: (data) => <ControlledInput {...data} />,
    },
    {
      label: "Products",
      dataObj: {
        name: "applicableProduct",
        control: control,
        errors: errors,
        open: openProductSelect,
        setOpen: setOpenProductSelect,
        items: products,
        setItems: setProducts,
        rules: {
          required: "Products is required",
        }
        // multiple:true,
        // max:3,
        // mode:'BADGE'
      },
      child: (data) => <ControlledSelect {...data} />,
    },
  ];


  return formData.map((element) => (
    <FormItem key={element.dataObj.name} {...element} />
  ));
}
