import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import ProductCards from "../components/ProductCards";

const Products1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.products}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.backButtonParent}>
          <Pressable style={styles.backButtonParent}>
            <Pressable
              style={styles.home04IconLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={[styles.products1, styles.productsTypo]}>
              Products
            </Text>
          </Pressable>
          <Image
            style={styles.addProductIcon}
            resizeMode="cover"
            source={require("../assets/add-product.png")}
          />
        </View>
        <View style={[styles.searchBarParent, styles.parentSpaceBlock]}>
          <TextInput
            style={[styles.searchBar, styles.searchBarTypo]}
            placeholder="Search products"
            placeholderTextColor="#b9b9b9"
          />
          <View style={styles.filterWrapper}>
            <Image
              style={styles.filterIcon}
              resizeMode="cover"
              source={require("../assets/filter.png")}
            />
          </View>
        </View>
        <ScrollView
          style={[styles.frameGroup, styles.parentSpaceBlock]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable style={styles.allProductsWrapper}>
            <Text style={[styles.allProducts, styles.productsTypo]}>
              All Products
            </Text>
          </Pressable>
          <Pressable
            style={[styles.groupBuyProductsWrapper, styles.wrapperFlexBox1]}
          >
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Group buy Products
            </Text>
          </Pressable>
          <View
            style={[styles.instabuildProductsWrapper, styles.wrapperFlexBox1]}
          >
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Instabuild products
            </Text>
          </View>
          <View
            style={[styles.instabuildProductsWrapper, styles.wrapperFlexBox1]}
          >
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Instabuild products
            </Text>
          </View>
          <View style={[styles.outOfStockWrapper, styles.wrapperFlexBox1]}>
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Out of Stock
            </Text>
          </View>
          <Pressable
            style={[styles.instabuildProductsWrapper, styles.wrapperFlexBox1]}
          >
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Instabuild products
            </Text>
          </Pressable>
        </ScrollView>
        <Text style={[styles.productsFound, styles.searchBarTypo]}>
          684 Products found
        </Text>
        <View style={styles.parentSpaceBlock}>
        <ProductCards
            sku="SKU"
            productname="Kayra Decor 3D PVC Wall Panels Wave Design"
            statusgroupbuy="Group Buy"
            price="$400"
            stockstatus="In stock"
            image={require("../assets/image-placeholder21.png")}
            productCardsMarginTop={14}
            frameViewBackgroundColor="#d0e2ff"
            groupBuyColor="#4e80d4"
          />
          <ProductCards
            sku="SKU"
            productname="Kayra Decor 3D PVC Wall Panels Wave Design"
            statusgroupbuy="Instabuild"
            price="$400"
            stockstatus="In stock"
            image={require("../assets/image-placeholder21.png")}
            productCardsMarginTop={14}
            frameViewBackgroundColor="#e9d8ff"
            groupBuyColor="#9747ff"
          />
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsScrollViewContent: {
    flexDirection: "column",
    // paddingHorizontal: 20,
    // paddingVertical: 59,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(2.48),
    alignSelf: "stretch",
  },
  searchBarTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  wrapperFlexBox1: {
    marginLeft: responsiveWidth(3.84),
    backgroundColor: Color.colorWhitesmoke_100,
    height: responsiveHeight(5.22),
    // 
    // padding: Padding.p_3xs,
    paddingVertical:responsiveHeight(1.24),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  groupTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text1Typo: {
    marginTop: responsiveHeight(1.49),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height: responsiveHeight(2.98),
    alignItems: "center",
    flexDirection: "row",
  },
  productBorder: {
    // 
    paddingVertical:responsiveHeight(1.61),
    paddingHorizontal:responsiveHeight(3.33),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  groupSpaceBlock: {
    backgroundColor: Color.colorThistle,
    paddingVertical: responsiveHeight(1.24),
    paddingHorizontal: responsiveWidth(2.56),
    width: responsiveWidth(22.05),
    borderRadius: Border.br_lgi,
    marginTop: responsiveHeight(1.49),
    justifyContent: "center",
    height: responsiveHeight(2.98),
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: responsiveHeight(0.62),
    width: responsiveWidth(13.58),
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
  },
  homeTypo: {
    marginTop: responsiveHeight(0.74),
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home04IconLayout: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  products1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
  },
  backButtonParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  addProductIcon: {
    width: responsiveWidth(5.12),
    height: responsiveHeight(2.48),
    marginLeft: responsiveWidth(55.64),
  },
  searchBar: {
    justifyContent: "space-between",
    paddingHorizontal:responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    fontSize: FontSize.size_3xs,
    height: responsiveHeight(4.85),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  filterIcon: {
    width: responsiveWidth(4.61),
    height: responsiveHeight(2.23),
  },
  filterWrapper: {
    width: responsiveWidth(10),
    marginLeft: responsiveWidth(4.10),
    paddingVertical:responsiveHeight(1.24),
    paddingHorizontal:responsiveWidth(2.56),
    justifyContent: "center",
    height: responsiveHeight(4.85),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  searchBarParent: {
    flexDirection: "row",
  },
  allProducts: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  allProductsWrapper: {
    width: responsiveWidth(30.51),
    height: responsiveHeight(5.22),
    backgroundColor: Color.colorFirebrick_200,
    // 
    // padding: Padding.p_3xs,
    paddingVertical:responsiveHeight(1.24),
    paddingHorizontal:responsiveWidth(2.56),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  groupBuyProducts: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  groupBuyProductsWrapper: {
    width: responsiveWidth(37.17),
  },
  instabuildProductsWrapper: {
    width: responsiveWidth(38.46),
  },
  outOfStockWrapper: {
    width: responsiveWidth(32.56),
    display: "none",
  },
  frameGroup: {
    width: "100%",
  },
  productsFound: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    marginTop: responsiveHeight(2.48),
    alignSelf: "stretch",
    textAlign: "left",
  },
  sku: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  text: {
    marginLeft: responsiveWidth(1.53),
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  skuParent: {
    flexDirection: "row",
  },
  kayraDecor3d: {
    fontSize: FontSize.size_xs,
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  groupBuy: {
    color: Color.colorCornflowerblue_100,
    fontSize: FontSize.size_3xs,
  },
  groupBuyWrapper: {
    backgroundColor: Color.colorLavender,
    width: responsiveWidth(22.05),
    paddingHorizontal: responsiveWidth(10),
    borderRadius: Border.br_lgi,
    marginTop: responsiveHeight(1.49),
  },
  frameContainer: {
    flex: 1,
  },
  imagePlaceholderIcon: {
    borderRadius: Border.br_11xs,
    height: responsiveHeight(7.21),
    width: responsiveWidth(16.41),
  },
  inStock: {
    color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  inStockWrapper: {
    backgroundColor: Color.colorHoneydew,
    marginTop: responsiveHeight(0.99),
    width: responsiveWidth(16.41),
    paddingHorizontal:responsiveWidth(2.56),
    borderRadius: Border.br_lgi,
  },
  imagePlaceholderParent: {
    marginLeft: responsiveWidth(6.15),
  },
  groupBuy1: {
    color: Color.colorBlueviolet,
    fontSize: FontSize.size_3xs,
  },
  productCards1: {
    marginTop: responsiveHeight(1.74),
  },
  groupBuyFrame: {
    display: "none",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  products: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Products1;
