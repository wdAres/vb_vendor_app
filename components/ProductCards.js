import React, { useMemo, memo } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/core";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProductCards = memo(
  ({
    sku,
    productname,
    statusgroupbuy,
    price,
    stockstatus,
    image,
    productCardsMarginTop,
    frameViewBackgroundColor,
    groupBuyColor,
  }) => {
    const productCardsStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", productCardsMarginTop),
      };
    }, [productCardsMarginTop]);

    const frameViewStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", frameViewBackgroundColor),
      };
    }, [frameViewBackgroundColor]);

    const groupBuyStyle = useMemo(() => {
      return {
        ...getStyleValue("color", groupBuyColor),
      };
    }, [groupBuyColor]);

    const navigation = useNavigation()

    return (
      <Pressable
        onPress={() => navigation.navigate('ProductsDetails')}
        style={[
          styles.productCards,
          styles.skuParentFlexBox,
          productCardsStyle,
        ]}
      >
        <View style={styles.frameParent}>
          <View style={styles.skuParentFlexBox}>
            <Text style={styles.skuTypo}>{sku}</Text>
            <Text style={[styles.text, styles.skuTypo]}>11025885</Text>
          </View>
          <Text style={[styles.kayraDecor3d, styles.text1Typo]}>
            {productname}
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>{price}</Text>
          <View
            style={[
              styles.groupBuyWrapper,
              styles.wrapperFlexBox,
              frameViewStyle,
            ]}
          >
            <Text style={[styles.groupBuy, styles.inStockTypo, groupBuyStyle]}>
              {statusgroupbuy}
            </Text>
          </View>
        </View>
        <View style={styles.imagePlaceholderParent}>
          <Image
            style={styles.imagePlaceholderIcon}
            resizeMode="cover"
            source={image}
          />
          <View style={[styles.inStockWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.inStock, styles.inStockTypo]}>
              {stockstatus}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  skuParentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  skuTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  text1Typo: {
    color: Color.colorBlack,
    marginTop: responsiveHeight(1.49),
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperFlexBox: {
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(2.98),
    borderRadius: Border.br_lgi,
    flexDirection: "row",
  },
  inStockTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text: {
    marginLeft: responsiveWidth(1.53),
  },
  kayraDecor3d: {
    marginTop: responsiveHeight(1.49),
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.size_xl,
    marginTop: responsiveHeight(1.49),
  },
  groupBuy: {
    color: Color.colorCornflowerblue_100,
  },
  groupBuyWrapper: {
    backgroundColor: Color.colorLavender,
    width: responsiveWidth(22.05),
    marginTop: responsiveHeight(1.49),
  },
  frameParent: {
    flex: 1,
  },
  imagePlaceholderIcon: {
    borderRadius: Border.br_11xs,
    height: responsiveHeight(7.21),
    width: responsiveWidth(16.41),
  },
  inStock: {
    color: Color.colorLimegreen,
  },
  inStockWrapper: {
    backgroundColor: Color.colorHoneydew,
    marginTop: responsiveHeight(0.99),
    width: responsiveWidth(16.41),
  },
  imagePlaceholderParent: {
    marginLeft: responsiveWidth(6.15),
  },
  productCards: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingVertical: responsiveHeight(1.61),
    paddingHorizontal: responsiveWidth(3.33),
  },
});

export default ProductCards;
