import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const AddProduct2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addProductScrollViewContent}
      style={[styles.addProduct, styles.addProductBg]}
    >
      <View>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <Pressable style={styles.arrowLeftSmParent}>
              <Pressable
                style={styles.arrowLeftSmLayout}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrowleftsm.png")}
                />
              </Pressable>
              <Text style={[styles.addProduct1, styles.addProduct1Clr]}>
                Add product
              </Text>
            </Pressable>
          </View>
          <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productImages, styles.imagesClr]}>
              Product images
            </Text>
            <View style={styles.imageParentSpaceBlock}>
              <Text style={[styles.thumbnailImage, styles.imagesTypo]}>
                Thumbnail Image
              </Text>
              <View style={[styles.frameContainer, styles.browseWrapperBorder]}>
                <View style={[styles.browseWrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.browse}>Browse</Text>
                </View>
              </View>
            </View>
            <View style={styles.imageParentSpaceBlock}>
              <Image
                style={styles.imagePlaceholderIcon}
                resizeMode="cover"
                source={require("../assets/image-placeholder4.png")}
              />
              <Image
                style={[styles.xCircleContainedIcon, styles.circleIconPosition]}
                resizeMode="cover"
                source={require("../assets/xcirclecontained.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.continueWrapperSpaceBlock}>
          <Text style={[styles.galleryImages, styles.imagesTypo]}>
            Gallery Images
          </Text>
          <View style={styles.frameView}>
            <View style={styles.frameParent1}>
              <View style={styles.imagePlaceholderGroup}>
                <ImageBackground
                  style={[
                    styles.imagePlaceholderIcon1,
                    styles.frameChild2Layout,
                  ]}
                  resizeMode="contain"
                  source={require("../assets/imageplaceholder.png")}
                />
                <Image
                  style={[
                    styles.xCircleContainedIcon1,
                    styles.circleIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/xcirclecontained1.png")}
                />
              </View>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame-427319235.png")}
              />
              <View style={styles.imagePlaceholderContainer}>
                <Image
                  style={[
                    styles.imagePlaceholderIcon1,
                    styles.frameChild2Layout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder5.png")}
                />
                <Image
                  style={[
                    styles.xCircleContainedIcon1,
                    styles.circleIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/xcirclecontained2.png")}
                />
              </View>
              <Image
                style={[styles.frameChild2, styles.frameChild2Layout]}
                resizeMode="cover"
                source={require("../assets/frame-427319245.png")}
              />
            </View>

            <Text style={[styles.uploadMoreImages, styles.imagesTypo]}>
              Upload More Images
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.continueWrapper, styles.continueWrapperSpaceBlock]}
          onPress={() => navigation.navigate("AddProduct3")}
        >
          <Text style={[styles.continue, styles.productTypo]}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addProductBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  addProduct1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  frameLayout: {
    marginLeft: responsiveWidth(1.53),
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  imagesClr: {
    color: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  imagesTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  browseWrapperBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  circleIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  frameChild2Layout: {
    width: responsiveWidth(24.87),
    height: responsiveHeight(12.06),
  },
  continueWrapperSpaceBlock: {
    marginTop: responsiveHeight(6.21),
    alignSelf: "stretch",
  },
  productTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSmLayout: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  addProduct1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild: {
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFirebrick_200,
    flex: 1,
  },
  frameItem: {
    backgroundColor: Color.colorFirebrick_200,
  },
  frameInner: {
    backgroundColor: Color.colorGainsboro_200,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  productImages: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  thumbnailImage: {
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  browse: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  browseWrapper: {
    backgroundColor: Color.colorWhitesmoke_700,
    borderColor: Color.colorGainsboro_300,
    paddingHorizontal: responsiveWidth(4.61),
    paddingVertical: responsiveHeight(1.86),
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  frameContainer: {
    borderColor: Color.colorGainsboro_200,
    marginTop: responsiveHeight(1.49),
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  imageParentSpaceBlock: {
    marginTop: responsiveHeight(3.6),
    alignSelf: "stretch",
  },
  imagePlaceholderIcon: {
    width: responsiveWidth(34.87),
    height: responsiveHeight(16.91),
    zIndex: 0,
    borderRadius: Border.br_7xs,
  },
  xCircleContainedIcon: {
    top: responsiveHeight(-1.49),
    left: responsiveWidth(31.79),
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  galleryImages: {
    width: responsiveWidth(89.74),
    textAlign: "left",
    color: Color.colorBlack,
  },
  imagePlaceholderIcon1: {
    borderRadius: 4,
    height: responsiveHeight(12.06),
    zIndex: 0,
  },
  xCircleContainedIcon1: {
    top: responsiveHeight(-1.11),
    left: responsiveWidth(22.56),
    width: responsiveWidth(4.35),
    height: responsiveHeight(2.11),
  },
  imagePlaceholderGroup: {
    width: responsiveWidth(25.38),
  },
  frameIcon: {
    marginLeft: responsiveWidth(6.41),
    height: responsiveHeight(12.06),
    width: responsiveWidth(25.38),
  },
  imagePlaceholderContainer: {
    marginLeft: responsiveWidth(6.41),
    width: responsiveWidth(25.38),
  },
  frameChild2: {
    // marginLeft: responsiveWidth(6.41),
    // height: responsiveHeight(12.06),
  },
  frameParent1: {
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  uploadMoreImages: {
    textDecoration: "underline",
    textAlign: "center",
    marginTop: responsiveHeight(4.6),
    color: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  frameView: {
    marginTop: responsiveHeight(4.47),
    alignItems: "center",
    alignSelf: "stretch",
  },
  continue: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
  },
  continueWrapper: {
    borderRadius: Border.br_8xs,
    // paddingHorizontal:responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorFirebrick_200,
  },
  addProduct: {
    backgroundColor: Color.colorWhite,
    width: responsiveWidth(100),
  },
  addProductScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default AddProduct2;
