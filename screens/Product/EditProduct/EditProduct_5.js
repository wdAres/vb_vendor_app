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
  emptyProductData,
  updateDataExceptGroupBuy,
  updateProductData,
} from "../../../redux/Slices/productSlice";
import useHttpForm from "../../../hooks/useHttpForm";

const AddProduct_5 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const { sendRequest, isLoading } = useHttpForm();

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dimensions: [
        { name: "Assembled Depth (in inches)", value: "0" },
        { name: "Assembled Weight (in lbs)", value: "0" },
        { name: "Packaged Depth (in inches)", value: "0" },
        { name: "Packaged Weight (in lbs)", value: "0" },
        { name: "Assembled Height (in inches)", value: "0" },
        { name: "Assembled Width (in inches)", value: "0" },
        { name: "Packaged Height (in inches)", value: "0" },
        { name: "Packaged Width (in inches)", value: "0" },
      ],
    },
  });

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    
    if (!productData.groupBy) {
      dispatch(updateDataExceptGroupBuy(data));
    } else {
      dispatch(updateProductData(data));
    }

    let latestObj = { ...productData};

    
    const formData = new FormData();

    let res = latestObj.specifications?.map(
      (element) => `${element.first}:${element.last}`
    );
    
    formData.append("specifications", res.join(","));
    
    latestObj.dimensions.forEach((element, index) => {
      formData.append(`dimensions[${index}].name`, element.name);
      formData.append(`dimensions[${index}].value`, element.value);
    });
    
    formData.append('image',latestObj.image)

    delete latestObj.specifications;
    delete latestObj.dimensions;
    delete latestObj.image;

    Object.entries(latestObj).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          formData.append(`${key}.${subKey}`, subValue);
        });
      } else {
        formData.append(key, value);
      }
    });

    sendRequest(
      {
        url: `product`,
        method: "POST",
        body: formData,
      },
      () => {
        // dispatch(emptyProductData());
        navigation.navigate("Products1");
      },
      true
    );
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
          <P_Dimensions
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
          />
        </ScrollView>
        <PrimaryBtn
          title={"Create Product"}
          isLoading={isLoading}
          disabled={isLoading}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </>
  );
};

export default AddProduct_5;

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
