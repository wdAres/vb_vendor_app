import React, { useEffect, useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ImgComp from "../../../components/form/ImgComp";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";

const P_AdditionalImages = ({ uni_style, setProductAdditionalImages, productAdditionalImages }) => {
  const { productData } = useSelector((state) => state.product);

  const productImageOptions = {
    width: 400,
    height: 400,
    mediaType: "photo",
    multiple:true,
    includeBase64: true,
  };

  const props_for_productImage = {
    imgState: productAdditionalImages,
    imgStateFunc: setProductAdditionalImages,
    options: productImageOptions,
    label: "Product Image",
  };

  useEffect(() => {
    if (productData.additionalImages) {
      setProductAdditionalImages(productData.additionalImages);
    }
  }, [productData]);

  return (
    <View>
      <Text style={[uni_style.title]}>Product Additional Images</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        <ImgComp {...props_for_productImage} />
      </View>
    </View>
  );
};

export default P_AdditionalImages;

const styles = StyleSheet.create({});
