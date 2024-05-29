import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../../components/Header";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useForm } from "react-hook-form";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/core";
import P_Info from "../components/P_Info";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import P_Price from "../components/P_Price";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductData,
  emptyProductData,
} from "../../../redux/Slices/productSlice";
import Toast from "react-native-toast-message";
import moment from "moment";
import useHttp2 from "../../../hooks/useHttp2";

const EditProduct_1 = () => {
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
    navigation.navigate("EditProduct_6");
  };

  const { sendRequest, isLoading } = useHttp2();
  const { id } = useRoute().params;

  const myData = () => {
    sendRequest(
      {
        url: `product/${id}/show`,
      },
      (result) => {
        dispatch(
          updateProductData({
            ...result.data,
            brand: result?.data?.brand?._id,
            categories: result.data.categories[0]._id,
          })
        );
      },
      true
    );
  };

  useEffect(() => {
    myData();
  }, [id]);

  useEffect(() => {
    if (productData) {
      setDiscountDateRange({
        start: productData.discountDateRange?.start
          ? moment(productData.discountDateRange.start).toDate()
          : "",
        end: productData.discountDateRange?.end
          ? moment(productData.discountDateRange.end).toDate()
          : "",
      });
      reset({
        price: String(productData.price),
        discountType: productData.discountType,
        discount: String(productData.discount),
        sku: productData.sku,
        quantityAvailable: String(productData.quantityAvailable),
        name: productData.name,
        unitType: productData.unitType,
        weight: String(productData.weight),
        brand: productData.brand,
        categories: productData.categories,
        returnApplicable: productData.returnApplicable ?? "none",
        restockingFee: String(productData.restockingFee),
      });
    }
  }, [productData]); // Update form only when productData changes

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       dispatch(emptyProductData());
  //     };
  //   }, [dispatch])
  // );

  return (
    <>
      <Header label={"Edit Product"} />
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
        </ScrollView>
        <PrimaryBtn title={"Next Page"} onPress={handleSubmit(handleForm)} />
      </View>
    </>
  );
};

export default EditProduct_1;

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
