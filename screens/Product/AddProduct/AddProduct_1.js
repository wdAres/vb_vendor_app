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
import P_Info from "../components/P_Info";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import P_Price from "../components/P_Price";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";
import Toast from "react-native-toast-message";
import moment from "moment";

const AddProduct_1 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const [discountDateRange, setDiscountDateRange] = useState({
    start: "",
    end: "",
  });

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      returnApplicable: "none",
      restockingFee: 0,
    },
  });

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    if (!discountDateRange.start || !discountDateRange.end) {
      Toast.show({
        type: "error",
        text1: "Both Discount Date Start and End is required",
      });
      return;
    }

    dispatch(
      updateProductData({
        ...data,
        discountDateRange: {
          start: new Date(discountDateRange.start).toISOString(),
          end: new Date(discountDateRange.end).toISOString(),
        },
      })
    );
    navigation.navigate("AddProduct_6");
  };

  useEffect(() => {
    if (productData?.discountDateRange) {
      setDiscountDateRange((prev) => ({
        start: moment(productData?.discountDateRange?.start).toDate(),
        end: moment(productData?.discountDateRange?.end).toDate(),
      }));
    }
    reset({
      price: productData?.price,
      discountType: productData?.discountType,
      discount: productData?.discount,
      sku: productData?.sku,
      quantityAvailable: productData?.quantityAvailable,
      name: productData?.name,
      unitType: productData?.unitType,
      weight: productData?.weight,
      brand: productData?.brand,
      categories: productData?.categories,
      returnApplicable: productData?.returnApplicable ?? "none",
      restockingFee: productData?.restockingFee ?? "0",
    });
  }, [productData]);

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
          <P_Info
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
          />
          <P_Price
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
            discountDateRange={discountDateRange}
            setDiscountDateRange={setDiscountDateRange}
          />
          {/* <View style={{gap: responsiveHeight(4.1)}}>
            <DateInput
              label={"Discount Range Start"}
              dateState={startDate}
              dateStateFunc={setStartDate}
            />
            <DateInput
              label={"Discount Range End"}
              dateState={endDate}
              dateStateFunc={setEndDate}
            />
          </View> */}
        </ScrollView>
        <PrimaryBtn title={"Next Page"} onPress={handleSubmit(handleForm)} />
      </View>
    </>
  );
};

export default AddProduct_1;

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
