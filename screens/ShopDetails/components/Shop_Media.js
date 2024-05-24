import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";
import ImgComp from "../../../components/form/ImgComp";

const Shop_Media = ({
  control,
  errors,
  uni_style,
  shopLogo,
  setShopLogo,
  shopBanner,
  setShopBanner,
  slideBanners,
  setSlideBanners
}) => {
  const shopLogoProps = {
    label: "Shop Logo",
    options: {
      width: 400,
      height: 400,
      mediaType: "photo",
      includeBase64: true,
    },
    imgState: shopLogo,
    imgStateFunc: setShopLogo,
  };
  const shopBannerProps = {
    label: "Shop Banner",
    options: {
      width: 400,
      height: 400,
      mediaType: "photo",
      includeBase64: true,
    },
    imgState: shopBanner,
    imgStateFunc: setShopBanner,
  };
  const shopSlidesProps = {
    label: "Slide Banners",
    options: {
      width: 400,
      height: 400,
      mediaType: "photo",
      multiple:true,
      includeBase64: true,
    },
    imgState: slideBanners,
    imgStateFunc: setSlideBanners,
  };

  return (
    <View>
      <Text style={[uni_style.title]}>Shop Info</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        <ImgComp {...shopLogoProps} />
        <ImgComp {...shopBannerProps} />
        <ImgComp {...shopSlidesProps} />
      </View>
    </View>
  );
};

export default Shop_Media;

const styles = StyleSheet.create({});
