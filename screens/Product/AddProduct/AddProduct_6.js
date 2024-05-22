import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/core";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import P_Dimensions from "../components/P_Dimensions";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataExceptGroupBuy,
  updateProductData,
} from "../../../redux/Slices/productSlice";
import P_Image from "../components/P_Image";

const AddProduct_6 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    console.log(productData);
  };

  useEffect(() => {
    reset(productData);
  }, []);

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
         <P_Image
         uni_style={uni_style}
         /> 
        </ScrollView>
        <PrimaryBtn
          title={"Create Product"}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </>
  );
};

export default AddProduct_6;

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
