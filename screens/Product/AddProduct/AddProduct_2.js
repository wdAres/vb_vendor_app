import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/core";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import useHttp2 from "../../../hooks/useHttp2";
import P_Price from "../components/P_Price";
import P_Desc from "../components/P_Desc";
import P_Meta from "../components/P_Meta";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";

const AddProduct_2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productData} = useSelector(state=>state.product)

  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    console.log(data);
    dispatch(updateProductData(data));
    navigation.navigate("AddProduct_3");
  };

  useEffect(()=>{
    reset(productData)
  },[])

  const updateOption = (index) => {
    let options = getValues("specifications");
    options.splice(index, 1);
    setValue("options", options);
  };

  return (
    <>
      <Header label={"Add Product"} />
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
          contentContainerStyle={styles.inner_container}
        >
          <P_Desc
            control={control}
            errors={errors}
            uni_style={uni_style}
            updateOption={updateOption}
          />
          <P_Meta
            control={control}
            errors={errors}
            uni_style={uni_style}
          />
        </ScrollView>
        <PrimaryBtn title={"Next Page"} onPress={handleSubmit(handleForm)} />
      </View>
    </>
  );
};

export default AddProduct_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    backgroundColor: "white",
    gap: responsiveHeight(4.1),
    width: "100%",
  },
  inner_container: {
    gap: responsiveHeight(5.34),
    width: "100%",
  },
  scrollview: {
    flex: 1,
    width: "100%",
  },
  overall_heading: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
  },
  overall_container: {
    gap: responsiveHeight(2.98),
  },
  overall_frameView: {
    marginTop: responsiveHeight(4.1),
    alignSelf: "stretch",
  },
});
