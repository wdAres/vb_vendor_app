import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const ProductsDetails = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.productsDetails}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productsDetailsScrollViewContent}
    >
      <View>
        <View style={styles.frameGroup}>
          <Pressable
            style={styles.frameGroup}
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
            <Text style={styles.products}>Products</Text>
          </Pressable>
        </View>
        <View style={styles.tabsParent}>
          <ScrollView
            style={styles.tabs}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsScrollViewContent}
          >
            <Pressable onPress={()=>navigation.navigate('ProductsDetails')} style={styles.basicDetailsWrapper}>
              <Text style={[styles.basicDetails, styles.detailsTypo]}>
                Basic Details
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('OtherDetails')}  style={[styles.otherDetailsWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.otherDetails, styles.detailsTypo]}>
                Other Details
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ProductDescription')} 
              style={[styles.productDescriptionWrapper, styles.wrapperFlexBox]}
            >
              <Text style={[styles.otherDetails, styles.detailsTypo]}>
                Product Description
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ProducDescription1')} 
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
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Product Name
              </Text>
              <Text style={[styles.kayraDecor3d, styles.xyzTypo]}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>Brand</Text>
              <Text style={[styles.xyz, styles.xyzTypo]}>XYZ</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>Unit</Text>
              <Text style={[styles.text, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Weight (In Kg)
              </Text>
              <Text style={[styles.text1, styles.xyzTypo]}>4</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Minimum Purchase Qty
              </Text>
              <Text style={[styles.text2, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>Barcode</Text>
              <Text style={[styles.text3, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text
                style={[styles.productName, styles.xyzTypo]}
              >{`Refundable `}</Text>
              <Text style={[styles.yes, styles.xyzTypo]}>Yes</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>Tags</Text>
              <View style={styles.frameContainer}>
                <View style={[styles.frameView, styles.frameParentFlexBox]}>
                  <View style={styles.tagsFlexBox}>
                    <Text style={[styles.tags1, styles.xyzTypo]}>Tags</Text>
                  </View>
                  <View style={[styles.tagsContainer, styles.tagsFlexBox]}>
                    <Text style={[styles.tags1, styles.xyzTypo]}>Tags</Text>
                  </View>
                  <View style={[styles.tagsContainer, styles.tagsFlexBox]}>
                    <Text style={[styles.tags1, styles.xyzTypo]}>Tags</Text>
                  </View>
                </View>
                <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
                  <View style={styles.tagsWrapperLayout}>
                    <Text style={[styles.tags1, styles.xyzTypo]}>Tags</Text>
                  </View>
                  <View style={[styles.tagsWrapper2, styles.tagsWrapperLayout]}>
                    <Text style={[styles.tags1, styles.xyzTypo]}>Tags</Text>
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
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Unit price
              </Text>
              <Text style={[styles.xyz1, styles.xyzTypo]}>XYZ</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                Discount Date Range
              </Text>
              <Text style={[styles.text4, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>Quantity</Text>
              <Text style={[styles.text5, styles.xyzTypo]}>4</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>SKU</Text>
              <Text style={[styles.text6, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
              <Text style={[styles.productName, styles.xyzTypo]}>
                External link
              </Text>
              <Text style={[styles.text7, styles.xyzTypo]}>1</Text>
            </View>
            <View style={[styles.productNameParent, styles.frameParentFlexBox]}>
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
                style={styles.imagePlaceholderParent}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
              >
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
              <Image
                style={styles.thumbnailcomIcon}
                resizeMode="cover"
                source={require("../assets/thumbnailcom.png")}
              />
            </View>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productPrice, styles.detailsTypo]}>
              Product Videos
            </Text>
            <ScrollView
              style={styles.frameScrollview}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollView1Content}
            >
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChild} />
                <Image
                  style={[styles.frameItem, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/polygon-1.png")}
                />
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChild} />
                <Image
                  style={[styles.polygonIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/polygon-1.png")}
                />
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChild} />
                <Image
                  style={[styles.frameChild1, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/polygon-1.png")}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.productImagesParent}>
            <Text style={[styles.productPrice, styles.detailsTypo]}>
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
          <View style={styles.productCategoryParent}>
            <Text style={[styles.productPrice, styles.detailsTypo]}>
              Product Category
            </Text>
            <Text style={[styles.caulkAdhesive, styles.seeAllViewsTypo]}>
              caulk-adhesive
            </Text>
          </View>
          <View style={styles.productCategoryParent}>
            <Text style={[styles.productPrice, styles.detailsTypo]}>
              Product Reviews
            </Text>
            <Pressable onPress={()=>navigation.navigate('')} style={styles.seeAllViewsParent}>
              <Text style={[styles.seeAllViews, styles.seeAllViewsTypo]}>
                See all Views
              </Text>
              <Image
                style={styles.arrowRightSmIcon}
                resizeMode="cover"
                source={require("../assets/arrowrightsm.png")}
              />
            </Pressable>
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
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: responsiveWidth(2.30),
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  productParentBorder: {
    paddingVertical: responsiveHeight(1.86),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: responsiveHeight(3.60),
    width: responsiveWidth(89.74),
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  xyzTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  tagsFlexBox: {
    height: responsiveHeight(2.73),
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    paddingHorizontal: responsiveWidth(2.56),
    // paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  tagsWrapperLayout: {
    width: responsiveWidth(13.33),
    height: responsiveHeight(2.73),
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    paddingHorizontal: responsiveWidth(2.56),
    // paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  imageIconLayout: {
    height: responsiveHeight(14.30),
    width: responsiveHeight(14.30),
    borderRadius: Border.br_11xs,
  },
  framePosition: {
    zIndex: 1,
    height: responsiveHeight(3.73),
    width: responsiveHeight(3.73),
    // width: 30,
    top: responsiveHeight(9.57),
    position: "absolute",
    borderRadius: Border.br_11xs,
  },
  weight1kgPosition: {
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: responsiveHeight(19.02),
    width: responsiveWidth(29.48),
  },
  seeAllViewsTypo: {
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    height: responsiveHeight(2.98),
    width: responsiveHeight(2.98),
  },
  products: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
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
    // width: 20,
    width :responsiveHeight(2.98),
    height: responsiveHeight(2.98),
    marginLeft: responsiveWidth(55.64),
  },
  basicDetails: {
    color: Color.colorWhite,
  },
  basicDetailsWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    width: responsiveWidth(30.51),
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetails: {
    color: Color.colorGray_300,
  },
  otherDetailsWrapper: {
    marginLeft: responsiveWidth(2.30),
    width: responsiveWidth(30.51),
    backgroundColor: Color.colorGainsboro_100,
  },
  productDescriptionWrapper: {
    width: responsiveWidth(45.12),
    marginLeft: responsiveWidth(2.30),
  },
  metaDescriptionWrapper: {
    width: responsiveWidth(40),
    marginLeft: responsiveWidth(2.30),
  },
  tabs: {
    width: responsiveWidth(100),
  },
  productInformation: {
    color: Color.colorBlack,
  },
  productName: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
  },
  kayraDecor3d: {
    marginLeft: responsiveWidth(18.46),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  productNameParent: {
    marginTop: responsiveHeight(1.49),
    alignSelf: "stretch",
  },
  xyz: {
    marginLeft: responsiveWidth(28.71),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text: {
    marginLeft: responsiveWidth(31.02),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text1: {
    marginLeft: responsiveWidth(18.71),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text2: {
    marginLeft: responsiveWidth(7.69),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text3: {
    marginLeft: responsiveWidth(25.89),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  yes: {
    marginLeft: responsiveWidth(22.05),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  tags1: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
  },
  tagsContainer: {
    marginLeft: responsiveWidth(1.79),
  },
  frameView: {
    alignSelf: "stretch",
  },
  tagsWrapper2: {
    marginLeft: 7,
  },
  frameParent1: {
    marginTop: responsiveHeight(1.24),
    alignSelf: "stretch",
  },
  frameContainer: {
    marginLeft: responsiveWidth(30.25),
    flex: 1,
  },
  productInformationParent: {
    paddingHorizontal: responsiveWidth(2.82),
    marginTop: responsiveHeight(3.60),
  },
  productPrice: {
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  xyz1: {
    marginLeft: responsiveWidth(23.58),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text4: {
    marginLeft: responsiveWidth(10.25),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text5: {
    marginLeft: responsiveWidth(25.64),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text6: {
    marginLeft: responsiveWidth(30.76),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  text7: {
    marginLeft: responsiveWidth(21.02),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  button: {
    marginLeft: responsiveWidth(6.92),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    flex: 1,
  },
  productPriceStockParent: {
    paddingHorizontal:responsiveWidth(4.35),
    marginTop: responsiveHeight(3.60),
  },
  galleryImages: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  imagePlaceholderIcon1: {
    // marginLeft: responsiveWidth(2.30),
    marginRight: responsiveWidth(2.30),
  },
  imagePlaceholderParent: {
    marginTop: responsiveHeight(1.86),
    width: responsiveWidth(100),
  },
  galleryImagesParent: {
    marginTop: responsiveHeight(2.61),
  },
  thumbnailcomIcon: {
    height: responsiveHeight(27.98),
    marginTop: responsiveHeight(1.86),
    width: responsiveWidth(89.74),
    borderRadius: Border.br_7xs,
  },
  productImagesParent: {
    marginTop: responsiveHeight(3.60),
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    width: responsiveWidth(65.89),
    height: responsiveHeight(22.88),
    zIndex: 0,
    backgroundColor:'gray'
  },
  frameItem: {
    left: responsiveWidth(28.97),
  },
  polygonIcon: {
    left: responsiveWidth(29.23),
  },
  rectangleGroup: {
    marginRight: responsiveWidth(4.61)
  },
  frameChild1: {
    left: responsiveWidth(36.92),
  },
  frameScrollview: {
    marginTop: responsiveHeight(2.23),
    width: responsiveWidth(100),
  },
  imagePlaceholderIcon5: {
    top: 0,
    height: responsiveHeight(14.30),
    width: responsiveWidth(29.48),
    borderRadius: Border.br_11xs,
  },
  greenColor: {
    top: responsiveHeight(15.42),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  weight1kg: {
    top: responsiveHeight(17.53),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  imagePlaceholderContainer: {
    marginLeft: responsiveWidth(4.35),
  },
  caulkAdhesive: {
    marginTop: responsiveHeight(1.24),
  },
  productCategoryParent: {
    alignSelf: "stretch",
    marginTop: responsiveHeight(3.60),
  },
  seeAllViews: {
    top: responsiveHeight(0.74),
    left: 0,
    position: "absolute",
  },
  arrowRightSmIcon: {
    left:responsiveWidth(17.17),
    top: 0,
    position: "absolute",
    height: responsiveHeight(2.98),
    width: responsiveHeight(2.98),
  },
  seeAllViewsParent: {
    width: responsiveWidth(23.33),
    marginTop: responsiveHeight(0.49),
    height: responsiveHeight(2.98),
  },
  tabsParent: {
    marginTop: responsiveHeight(3.98),
  },
  productsDetails: {
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: responsiveWidth(100),
    flex: 1,
  },
});

export default ProductsDetails;
