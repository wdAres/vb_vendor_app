import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/core";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import {useSelector } from "react-redux";
import P_Image from "../components/P_Image";
import Toast from "react-native-toast-message";

const AddProduct_6 = () => {
  const navigation = useNavigation();
  const { productData } = useSelector((state) => state.product);


  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = () => {
    
    if (!productData.image) {
      Toast.show({
        type: "error",
        text1: "please select a product image",
      });
      return;
    }
    navigation.navigate("AddProduct_2");
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
          <P_Image uni_style={uni_style} />
        </ScrollView>
        <PrimaryBtn
          title={"Create Product"}
          onPress={handleForm}
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
