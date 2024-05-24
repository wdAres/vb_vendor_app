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
import P_GroupBuy from "../components/P_GroupBuy";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";
import moment from "moment";

const AddProduct_4 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const [discountDateRange, setDiscountDateRange] = useState({
    groupByStartDate: "",
    groupByEndDate: "",
  });

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    if (
      !discountDateRange.groupByStartDate ||
      !discountDateRange.groupByEndDate
    ) {
      Toast.show({
        type: "error",
        text1: "Both Group Buy Start and End  Date is required",
      });
      return;
    }

    dispatch(
      updateProductData({
        ...data,
        groupByStartDate: new Date(
          discountDateRange.groupByStartDate
        ).toISOString(),
        groupByEndDate: new Date(
          discountDateRange.groupByEndDate
        ).toISOString(),
      })
    );
    navigation.navigate("AddProduct_5");
  };

  useEffect(() => {
    if (productData?.groupByStartDate && productData?.groupByEndDate) {
      setDiscountDateRange((prev) => ({
        groupByStartDate: moment(productData?.groupByStartDate).toDate(),
        groupByEndDate: moment(productData?.groupByEndDate).toDate(),
      }));
    }
    reset({
      groupByMinOrder: productData?.groupByMinOrder,
      groupByOrderReach: productData?.groupByOrderReach,
      groupByDiscountType: productData?.groupByDiscountType,
      groupByDiscount: productData?.groupByDiscount,
    });
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
          <P_GroupBuy
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
            discountDateRange={discountDateRange}
            setDiscountDateRange={setDiscountDateRange}
          />
        </ScrollView>
        <PrimaryBtn title={"Next Page"} onPress={handleSubmit(handleForm)} />
      </View>
    </>
  );
};

export default AddProduct_4;

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
