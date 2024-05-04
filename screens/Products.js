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
import ProductCards from "../components/ProductCards";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Products = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.products}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productsScrollViewContent}
    >
      <View>
        <View style={styles.backButtonParent}>
          <Pressable
            style={styles.backButtonParent}
            onPress={() => navigation.goBack()}
          >
            <Pressable
              style={styles.arrowLeftSm}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={styles.products1}>Products</Text>
          </Pressable>
          <Image
            style={styles.addProductIcon}
            resizeMode="cover"
            source={require("../assets/add-product.png")}
          />
        </View>
        <View style={[styles.searchBarParent, styles.parentFlexBox]}>
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
          style={styles.frameGroup}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
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
          <Pressable
            style={[styles.instabuildProductsWrapper, styles.wrapperFlexBox1]}
          >
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Instabuild products
            </Text>
          </Pressable>
          <View style={[styles.outOfStockWrapper, styles.wrapperFlexBox1]}>
            <Text style={[styles.groupBuyProducts, styles.productsTypo]}>
              Out of Stock
            </Text>
          </View>
        </ScrollView>
        <Text style={[styles.productsFound, styles.searchBarTypo]}>
          684 Products found
        </Text>
        <View style={styles.productCardsParent}>
          <ProductCards
            sku="1000"
            productname="Kayra Decor 3D PVC Wall Panels Wave Design"
            statusgroupbuy="Group Buy"
            price="$400"
            stockstatus="In stock"
            image={require("../assets/image-placeholder21.png")}
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
          <Pressable style={styles.productCards}>
            <View style={styles.frameContainer}>
              <View style={[styles.skuParent, styles.parentFlexBox]}>
                <Text style={[styles.sku, styles.skuTypo]}>SKU</Text>
                <Text style={[styles.text, styles.skuTypo]}>110255</Text>
              </View>
              <Text style={[styles.kayraDecor3d, styles.text1Typo]}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>$400</Text>
            </View>
            <View style={styles.imagePlaceholderParent}>
              <Image
                style={styles.imagePlaceholderIcon}
                resizeMode="cover"
                source={require("../assets/image-placeholder21.png")}
              />
              <View style={[styles.inStockWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.inStock, styles.skuTypo]}>In stock</Text>
              </View>
            </View>
            <View style={[styles.groupBuyWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.groupBuy, styles.skuTypo]}>Instabuild</Text>
            </View>
          </Pressable>
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
          <Pressable style={styles.productCards}>
            <View style={styles.frameContainer}>
              <View style={[styles.skuParent, styles.parentFlexBox]}>
                <Text style={[styles.sku, styles.skuTypo]}>SKU</Text>
                <Text style={[styles.text, styles.skuTypo]}>110255</Text>
              </View>
              <Text style={[styles.kayraDecor3d, styles.text1Typo]}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>$400</Text>
            </View>
            <View style={styles.imagePlaceholderParent}>
              <Image
                style={styles.imagePlaceholderIcon}
                resizeMode="cover"
                source={require("../assets/image-placeholder21.png")}
              />
              <View style={[styles.inStockWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.inStock, styles.skuTypo]}>In stock</Text>
              </View>
            </View>
            <View style={[styles.groupBuyWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.groupBuy, styles.skuTypo]}>Instabuild</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(
  {
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  searchBarTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  productsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  wrapperFlexBox1: {
    marginLeft: 15,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 42,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  skuTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text1Typo: {
    marginTop: 11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: 24,
    height: 24,
  },
  products1: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  backButtonParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  addProductIcon: {
    width: 20,
    height: 20,
    marginLeft: 217,
  },
  searchBar: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_3xs,
    fontSize: FontSize.size_3xs,
    height: 39,
    fontFamily: FontFamily.interRegular,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  filterIcon: {
    width: 18,
    height: 18,
  },
  filterWrapper: {
    width: 39,
    marginLeft: 16,
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 39,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  searchBarParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  allProducts: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  allProductsWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    width: 119,
    height: 42,
    padding: Padding.p_3xs,
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
    width: 145,
  },
  instabuildProductsWrapper: {
    width: 150,
  },
  outOfStockWrapper: {
    width: 127,
    display: "none",
  },
  frameGroup: {
    marginTop: 20,
    width: "100%",
  },
  productsFound: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    marginTop: 20,
    alignSelf: "stretch",
    textAlign: "left",
  },
  sku: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  text: {
    marginLeft: 6,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  skuParent: {
    alignSelf: "stretch",
  },
  kayraDecor3d: {
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  frameContainer: {
    zIndex: 0,
    flex: 1,
  },
  imagePlaceholderIcon: {
    borderRadius: Border.br_11xs,
    height: 58,
    width: 64,
  },
  inStock: {
    color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  inStockWrapper: {
    backgroundColor: Color.colorHoneydew,
    marginTop: 8,
    width: 64,
  },
  imagePlaceholderParent: {
    zIndex: 1,
    marginLeft: 24,
  },
  groupBuy: {
    color: Color.colorBlueviolet,
    fontSize: FontSize.size_3xs,
  },
  groupBuyWrapper: {
    position: "absolute",
    top: 117,
    left: 18,
    backgroundColor: Color.colorThistle,
    width: 86,
    zIndex: 2,
    display: "none",
  },
  productCards: {
    padding: Padding.p_smi,
    marginTop: 14,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  productCardsParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  products: {
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
}
);

export default Products;
