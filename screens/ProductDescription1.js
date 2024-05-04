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
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const ProductDescription1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.productDescription, styles.productDescriptionLayout]}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productDescriptionScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <Pressable style={styles.arrowLeftSmParent}>
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
            <Text style={styles.productsDetails}>Products Details</Text>
          </Pressable>
        </View>
        <ScrollView
          style={[styles.frameGroup, styles.frameGroupSpaceBlock]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable onPress={()=>navigation.navigate('ProductsDetails')}   style={styles.basicDetailsWrapper}>
            <Text style={[styles.basicDetails, styles.metaTypo]}>
              Basic Details
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('OtherDetails')} 
            style={[styles.otherDetailsWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.basicDetails, styles.metaTypo]}>
              Other Details
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('ProductDescription')} 
            style={[styles.productDescriptionWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.basicDetails, styles.metaTypo]}>
              Product Description
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('ProductDescription1')} 
            style={[styles.metaDescriptionWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.metaDescription, styles.metaTypo]}>
              Meta Description
            </Text>
          </Pressable>
        </ScrollView>
        <View style={styles.frameGroupSpaceBlock}>
          <Text style={[styles.seoMetaTags, styles.metaTypo]}>
            SEO Meta Tags
          </Text>
          <View style={styles.metaTitleParent}>
            <Text style={styles.metaTitle}>Meta Title</Text>
            <Text style={[styles.caulkAdhesive, styles.caulkAdhesiveTypo]}>
              caulk-adhesive
            </Text>
          </View>
          <View style={styles.metaTitleParent}>
            <Text style={styles.metaTitle}>Description</Text>
            <Text style={[styles.voremIpsumDolor, styles.caulkAdhesiveTypo]}>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus,
            </Text>
          </View>
          <View style={styles.metaTitleParent}>
            <Text style={styles.metaTitle}>Meta Image</Text>
            <Image
              style={[
                styles.imagePlaceholderIcon,
                styles.productDescriptionLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/thumbnailcom.png")}
            />
          </View>
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
  productDescriptionScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical:responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productDescriptionLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameGroupSpaceBlock: {
    marginTop: responsiveWidth(7.43),
    alignSelf: "stretch",
  },
  metaTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    marginLeft: responsiveWidth(2.30),
    paddingHorizontal:responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  caulkAdhesiveTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignSelf: "stretch",
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
    width: responsiveHeight(2.98),
  },
  productsDetails: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  basicDetails: {
    color: Color.colorBlack,
  },
  basicDetailsWrapper: {
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    width: responsiveWidth(30.51),
    backgroundColor: Color.colorGainsboro_100,
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetailsWrapper: {
    width: responsiveWidth(30.51),
    marginLeft: responsiveWidth(2.30),
    backgroundColor: Color.colorGainsboro_100,
  },
  productDescriptionWrapper: {
    width: responsiveWidth(45.12),
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: responsiveWidth(2.30),
  },
  metaDescription: {
    color: Color.colorWhite,
  },
  metaDescriptionWrapper: {
    width: responsiveWidth(40),
    backgroundColor: Color.colorFirebrick_200,
  },
  frameGroup: {
    width: "100%",
  },
  seoMetaTags: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  metaTitle: {
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignSelf: "stretch",
  },
  caulkAdhesive: {
    marginTop: responsiveHeight(0.62),
  },
  metaTitleParent: {
    marginTop: responsiveHeight(3.23),
    alignSelf: "stretch",
  },
  voremIpsumDolor: {
    marginTop: responsiveHeight(1.36),
  },
  imagePlaceholderIcon: {
    borderRadius: Border.br_7xs,
    height: responsiveHeight(27.98),
    marginTop: responsiveHeight(2.36),
    alignSelf: "stretch",
  },
  frameParent: {
    width: responsiveWidth(89.74),
  },
  productDescription: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ProductDescription1;
