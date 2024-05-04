import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const AddProduct5 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
    style={styles.addProduct}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addProductScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.frameFlexBox}>
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
                <Text style={[styles.addProduct1, styles.metaTypo]}>
                  Add product
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.metaParentSpaceBlock]}>
            <View style={styles.frameLayout} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
          <Text style={[styles.seoMetaTags, styles.metaParentSpaceBlock]}>
            SEO Meta Tags
          </Text>
          <View style={styles.metaParentSpaceBlock}>
            <Text style={[styles.metaTitle, styles.metaTypo]}>Meta Title</Text>
            <TextInput
              style={[styles.rectangleTextinput, styles.frameBorder]}
            />
          </View>
          <View style={styles.metaParentSpaceBlock}>
            <Text style={[styles.metaTitle, styles.metaTypo]}>Description</Text>
            <TextInput
              style={[styles.frameChild2, styles.frameBorder]}
              multiline={true}
            />
          </View>
          <View style={styles.metaParentSpaceBlock}>
            <Text style={[styles.metaTitle, styles.metaTypo]}>SEO Image</Text>
            <Pressable onPress={()=>navigation.navigate('Products1')} style={[styles.framePressable, styles.frameBorder]}>
              <View style={[styles.browseWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.browse, styles.browseTypo]}>Browse</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={()=>navigation.navigate('Products1')} style={[styles.finishWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.finish, styles.browseTypo]}>Finish</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  metaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  metaParentSpaceBlock: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  frameLayout: {
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFirebrick_200,
    flex: 1,
  },
  frameBorder: {
    marginTop: responsiveHeight(1.49),
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  browseTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveWidth(6.15),
    height: responsiveHeight(2.98),
  },
  addProduct1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameContainer: {
    flex: 1,
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  frameItem: {
    marginLeft:responsiveWidth(1.53),
  },
  rectangleParent: {
    flexDirection: "row",
    marginTop: responsiveHeight(3.73),
    flex: 1,
  },
  seoMetaTags: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginTop:responsiveHeight(3.73),
  },
  metaTitle: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  rectangleTextinput: {
    height: responsiveHeight(6.21),
  },
  frameChild2: {
    height: responsiveHeight(29.72),
  },
  browse: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  browseWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhitesmoke_700,
    borderColor: Color.colorGainsboro_300,
    paddingVertical: responsiveHeight(1.61),
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    paddingHorizontal:responsiveWidth(5.12),
  },
  framePressable: {
    overflow: "hidden",
    borderColor: Color.colorGainsboro_200,
  },
  frameGroup: {
    height: responsiveHeight(75.99),
    alignSelf: "stretch",
  },
  finish: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
  },
  finishWrapper: {
    borderRadius: Border.br_8xs,
    // paddingHorizontal: Padding.p_131xl,
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(36.31),
    justifyContent: "center",
    backgroundColor: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  addProduct: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
  },
  addProductScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default AddProduct5;
