import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const ProductsDetails1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.productsDetails, styles.productsDetailsLayout]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      contentContainerStyle={styles.productsDetailsScrollViewContent}
    >
      <View>
        <View style={styles.frameGroup}>
          <Pressable style={styles.frameGroup}>
            <Pressable
              style={[styles.arrowLeftSm, styles.iconLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={styles.products}>Products</Text>
          </Pressable>
          <Image
            style={styles.addSquare03Icon}
            resizeMode="cover"
            source={require("../assets/add-product.png")}
          />
        </View>
        <View style={styles.tabsParent}>
          <ScrollView
            style={styles.tabs}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            contentContainerStyle={styles.tabsScrollViewContent}
          >
            <Pressable style={styles.basicDetailsWrapper}>
              <Text style={[styles.basicDetails, styles.detailsTypo]}>
                Basic Details
              </Text>
            </Pressable>
            <Pressable
              style={[styles.otherDetailsWrapper, styles.wrapperFlexBox]}
            >
              <Text style={[styles.otherDetails, styles.detailsTypo]}>
                Other Details
              </Text>
            </Pressable>
            <Pressable
              style={[styles.productDescriptionWrapper, styles.wrapperFlexBox]}
            >
              <Text style={[styles.otherDetails, styles.detailsTypo]}>
                Product Description
              </Text>
            </Pressable>
            <Pressable
              style={[styles.metaDescriptionWrapper, styles.wrapperFlexBox]}
            >
              <Text style={[styles.otherDetails, styles.detailsTypo]}>
                Meta Description
              </Text>
            </Pressable>
          </ScrollView>
          <View
            style={[
              styles.productInformationParent,
              styles.productParentBorder,
            ]}
          >
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Information
            </Text>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Product Name
              </Text>
              <Text style={[styles.kayraDecor3d, styles.xyzTypo]}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>Brand</Text>
              <Text style={[styles.xyz, styles.xyzTypo]}>XYZ</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>Unit</Text>
              <Text style={[styles.text, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Weight (In Kg)
              </Text>
              <Text style={[styles.text1, styles.xyzTypo]}>4</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Minimum Purchase Qty
              </Text>
              <Text style={[styles.text2, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>Barcode</Text>
              <Text style={[styles.text3, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text
                style={[styles.productName, styles.xyzTypo]}
              >{`Refundable `}</Text>
              <Text style={[styles.yes, styles.xyzTypo]}>Yes</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>Tags</Text>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={styles.tagsFlexBox}>
                    <Text style={styles.tags1}>Tags</Text>
                  </View>
                  <View style={[styles.tagsContainer, styles.tagsFlexBox]}>
                    <Text style={styles.tags1}>Tags</Text>
                  </View>
                  <View style={[styles.tagsContainer, styles.tagsFlexBox]}>
                    <Text style={styles.tags1}>Tags</Text>
                  </View>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.tagsWrapperLayout}>
                    <Text style={styles.tags1}>Tags</Text>
                  </View>
                  <View style={[styles.tagsWrapper2, styles.tagsWrapperLayout]}>
                    <Text style={styles.tags1}>Tags</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.productPriceStockParent, styles.productParentBorder]}
          >
            <Text style={[styles.productPrice, styles.detailsTypo]}>
              Product price + stock
            </Text>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Unit price
              </Text>
              <Text style={[styles.xyz1, styles.xyzTypo]}>XYZ</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Discount Date Range
              </Text>
              <Text style={[styles.text4, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>Quantity</Text>
              <Text style={[styles.text5, styles.xyzTypo]}>4</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>SKU</Text>
              <Text style={[styles.text6, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                External link
              </Text>
              <Text style={[styles.text7, styles.xyzTypo]}>1</Text>
            </View>
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                External link button text
              </Text>
              <Text style={[styles.button, styles.xyzTypo]}>Button</Text>
            </View>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Images
            </Text>
            <View style={styles.galleryImagesParent}>
              <Text style={[styles.galleryImages, styles.xyzTypo]}>
                Gallery Images
              </Text>
              <ScrollView
                style={[
                  styles.imagePlaceholderParent,
                  styles.productsDetailsLayout,
                ]}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
              >
                <ImageBackground
                  style={styles.imageIconLayout}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <ImageBackground
                  style={[styles.imagePlaceholderIcon1, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Image
                  style={[styles.imagePlaceholderIcon1, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Image
                  style={[styles.imagePlaceholderIcon1, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Image
                  style={[styles.imagePlaceholderIcon1, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
              </ScrollView>
            </View>
            <View style={styles.galleryImagesParent}>
              <Text style={[styles.galleryImages, styles.xyzTypo]}>
                Thumbnail Image
              </Text>
              <ImageBackground
                style={styles.thumbnailcomIcon}
                resizeMode="cover"
                source={require("../assets/thumbnailcom.png")}
              />
            </View>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Videos
            </Text>
            <ScrollView
              style={styles.frameScrollview}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollView1Content}
            >
              <Pressable>
                <Image
                  style={[styles.frameChild, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-15.png")}
                />
                <Image
                  style={styles.frameItem}
                  resizeMode="cover"
                  source={require("../assets/polygon-1.png")}
                />
              </Pressable>
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame-427319037.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame-427319037.png")}
              />
            </ScrollView>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Variation
            </Text>
            <ScrollView
              style={styles.frameScrollview}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollView2Content}
            >
              <View style={styles.imageLayout}>
                <Image
                  style={[
                    styles.imagePlaceholderIcon5,
                    styles.weight1kgPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Text style={[styles.greenColor, styles.weight1kgPosition]}>
                  Green Color
                </Text>
                <Text style={[styles.weight1kg, styles.weight1kgPosition]}>
                  Weight 1kg
                </Text>
              </View>
              <View
                style={[styles.imagePlaceholderContainer, styles.imageLayout]}
              >
                <Image
                  style={[
                    styles.imagePlaceholderIcon5,
                    styles.weight1kgPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Text style={[styles.greenColor, styles.weight1kgPosition]}>
                  Green Color
                </Text>
                <Text style={[styles.weight1kg, styles.weight1kgPosition]}>
                  Weight 1kg
                </Text>
              </View>
              <View
                style={[styles.imagePlaceholderContainer, styles.imageLayout]}
              >
                <Image
                  style={[
                    styles.imagePlaceholderIcon5,
                    styles.weight1kgPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Text style={[styles.greenColor, styles.weight1kgPosition]}>
                  Green Color
                </Text>
                <Text style={[styles.weight1kg, styles.weight1kgPosition]}>
                  Weight 1kg
                </Text>
              </View>
              <View
                style={[styles.imagePlaceholderContainer, styles.imageLayout]}
              >
                <Image
                  style={[
                    styles.imagePlaceholderIcon5,
                    styles.weight1kgPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Text style={[styles.greenColor, styles.weight1kgPosition]}>
                  Green Color
                </Text>
                <Text style={[styles.weight1kg, styles.weight1kgPosition]}>
                  Weight 1kg
                </Text>
              </View>
              <View
                style={[styles.imagePlaceholderContainer, styles.imageLayout]}
              >
                <Image
                  style={[
                    styles.imagePlaceholderIcon5,
                    styles.weight1kgPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder3.png")}
                />
                <Text style={[styles.greenColor, styles.weight1kgPosition]}>
                  Green Color
                </Text>
                <Text style={[styles.weight1kg, styles.weight1kgPosition]}>
                  Weight 1kg
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Category
            </Text>
            <Text style={[styles.caulkAdhesive, styles.xyzTypo]}>
              caulk-adhesive
            </Text>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productInformation, styles.detailsTypo]}>
              Product Reviews
            </Text>
            <View style={styles.seeAllViewsParent}>
              <Text style={[styles.seeAllViews, styles.weight1kgPosition]}>
                See all Views
              </Text>
              <Image
                style={[styles.arrowRightSmIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabsScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsDetailsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsDetailsLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  detailsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: 9,
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 42,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  productParentBorder: {
    paddingVertical: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: 40,
    width: 350,
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  xyzTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  tagsFlexBox: {
    height: 22,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  tagsWrapperLayout: {
    width: 52,
    height: 22,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  imageIconLayout: {
    height: 115,
    width: 115,
    borderRadius: Border.br_11xs,
  },
  frameLayout: {
    height: 184,
    width: 257,
  },
  weight1kgPosition: {
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 153,
    width: 115,
  },
  frameChild1Layout: {
    height: 5,
    width: 53,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
  },
  homeTypo: {
    marginTop: 6,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    height: 24,
  },
  products: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  addSquare03Icon: {
    width: 20,
    height: 20,
    marginLeft: 217,
  },
  basicDetails: {
    color: Color.colorWhite,
  },
  basicDetailsWrapper: {
    padding: Padding.p_3xs,
    height: 42,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    width: 119,
    backgroundColor: Color.colorFirebrick_200,
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetails: {
    color: Color.colorGray_300,
  },
  otherDetailsWrapper: {
    marginLeft: 9,
    width: 119,
    backgroundColor: Color.colorGainsboro_100,
  },
  productDescriptionWrapper: {
    width: 176,
    marginLeft: 9,
  },
  metaDescriptionWrapper: {
    width: 156,
    marginLeft: 9,
  },
  tabs: {
    width: "100%",
  },
  productInformation: {
    color: Color.colorBlack,
  },
  productName: {
    color: Color.colorGray_200,
  },
  kayraDecor3d: {
    marginLeft: 72,
    color: Color.colorBlack,
    flex: 1,
  },
  productNameParent: {
    marginTop: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  xyz: {
    marginLeft: 112,
    color: Color.colorBlack,
    flex: 1,
  },
  text: {
    marginLeft: 121,
    color: Color.colorBlack,
    flex: 1,
  },
  text1: {
    marginLeft: 73,
    color: Color.colorBlack,
    flex: 1,
  },
  text2: {
    marginLeft: 30,
    color: Color.colorBlack,
    flex: 1,
  },
  text3: {
    marginLeft: 101,
    color: Color.colorBlack,
    flex: 1,
  },
  yes: {
    marginLeft: 86,
    color: Color.colorBlack,
    flex: 1,
  },
  tags1: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  tagsContainer: {
    marginLeft: 7,
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  tagsWrapper2: {
    marginLeft: 7,
  },
  frameParent1: {
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: 118,
    flex: 1,
  },
  productInformationParent: {
    paddingHorizontal: Padding.p_2xs,
    marginTop: 40,
  },
  productPrice: {
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  xyz1: {
    marginLeft: 92,
    color: Color.colorBlack,
    flex: 1,
  },
  text4: {
    marginLeft: 40,
    color: Color.colorBlack,
    flex: 1,
  },
  text5: {
    marginLeft: 100,
    color: Color.colorBlack,
    flex: 1,
  },
  text6: {
    marginLeft: 120,
    color: Color.colorBlack,
    flex: 1,
  },
  text7: {
    marginLeft: 82,
    color: Color.colorBlack,
    flex: 1,
  },
  button: {
    marginLeft: 27,
    color: Color.colorBlack,
    flex: 1,
  },
  productPriceStockParent: {
    paddingHorizontal: Padding.p_mid,
    marginTop: 40,
  },
  galleryImages: {
    color: Color.colorGray_100,
  },
  imagePlaceholderIcon1: {
    marginLeft: 9,
  },
  imagePlaceholderParent: {
    marginTop: 15,
  },
  galleryImagesParent: {
    marginTop: 21,
  },
  thumbnailcomIcon: {
    height: 225,
    marginTop: 15,
    width: 350,
    borderRadius: Border.br_7xs,
  },
  productImagesParent: {
    marginTop: 40,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    zIndex: 0,
  },
  frameItem: {
    top: 77,
    left: 113,
    width: 30,
    height: 30,
    zIndex: 1,
    position: "absolute",
    borderRadius: Border.br_11xs,
  },
  frameInner: {
    marginLeft: 18,
  },
  frameScrollview: {
    marginTop: 18,
    width: "100%",
  },
  imagePlaceholderIcon5: {
    top: 0,
    height: 115,
    width: 115,
    borderRadius: Border.br_11xs,
  },
  greenColor: {
    top: 124,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  weight1kg: {
    top: 141,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  imagePlaceholderContainer: {
    marginLeft: 17,
  },
  caulkAdhesive: {
    color: Color.colorFirebrick_200,
    marginTop: 10,
  },
  seeAllViews: {
    top: 6,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  arrowRightSmIcon: {
    left: 67,
    top: 0,
    position: "absolute",
    height: 24,
  },
  seeAllViewsParent: {
    width: 91,
    marginTop: 4,
    height: 24,
  },
  tabsParent: {
    marginTop: 32,
  },
  productsDetails: {
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ProductsDetails1;
