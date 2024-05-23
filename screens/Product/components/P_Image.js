import React, { useEffect, useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ImgComp from "../../../components/form/ImgComp";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";

const P_Image = ({ uni_style }) => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const [productImage, setProductImage] = useState("");
  const productImageOptions = {
    width: 400,
    height: 400,
    mediaType: "photo",
    // includeBase64: true,
  };

  const props_for_productImage = {
    imgState: productImage,
    imgStateFunc: setProductImage,
    options: productImageOptions,
    label: "Product Image",
  };

  useEffect(() => {

    console.log(productImage)

  

    if (productImage) {

      console.log(productImage.mime.split('/'));

      let [_,ext] = productImage.mime.split('/')

      dispatch(
        updateProductData({
          image: {...productImage,filename:`${Date.now()}.${ext}`},
        })
      );
    }
    else if (productData.image) {
      setProductImage(productData.image)
    }
  }, [productImage]);

  return (
    <View>
      <Text style={[uni_style.title]}>Product Images</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        <ImgComp {...props_for_productImage} />
      </View>
    </View>
  );
};

export default P_Image;

const styles = StyleSheet.create({});
