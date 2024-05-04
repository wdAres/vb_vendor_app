import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const ProductDescription = () => {
  const navigation = useNavigation();

  return (
    // <Sci style={[styles.productDescription, styles.frameViewSpaceBlock]}>
    <ScrollView
      style={[styles.otherDetails, styles.otherDetailsBg]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.otherDetailsScrollViewContent}
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
        {/* <View style={[styles.frameContainer, styles.frameContainerSpaceBlock]}> */}
          <View style={styles.frameGroup}>
           <ScrollView
     style={styles.frameContainer2}
     horizontal={true}
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.frameScrollViewContent}
           >
           <Pressable onPress={()=>navigation.navigate('ProductsDetails')}  style={styles.basicDetailsWrapper}>
              <Text style={[styles.basicDetails, styles.descriptionTypo]}>
                Basic Details
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('OtherDetails')}  style={[styles.otherDetailsWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.basicDetails, styles.descriptionTypo]}>
                Other Details
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ProductDescription')} 
              style={[styles.productDescriptionWrapper, styles.wrapperFlexBox]}
            >
              <Text
                style={[styles.productDescription1, styles.descriptionTypo]}
              >
                Product Description
              </Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ProductDescription1')} 
              style={[styles.metaDescriptionWrapper, styles.wrapperFlexBox]}
            >
              <Text style={[styles.metaDescription, styles.descriptionTypo]}>
                Meta Description
              </Text>
            </Pressable>
           </ScrollView>
          </View>
        {/* </View> */}
        <View
          style={[
            styles.productShortDescriptionParent,
            styles.imagePlaceholderIconLayout,
          ]}
        >
          <Text
            style={[styles.productShortDescription, styles.descriptionTypo]}
          >
            Product Short Description
          </Text>
          <Text style={[styles.voremIpsumDolor, styles.voremSpaceBlock]}>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </Text>
        </View>
        <View
          style={[
            styles.productShortDescriptionParent,
            styles.imagePlaceholderIconLayout,
          ]}
        >
          <Text
            style={[styles.productShortDescription, styles.descriptionTypo]}
          >
            Product Description
          </Text>
          <Text
            style={[styles.voremIpsumDolor1, styles.voremSpaceBlock]}
          >{`Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
`}</Text>
          <Text
            style={[styles.voremIpsumDolor1, styles.voremSpaceBlock]}
          >{`Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
`}</Text>
          <Image
            style={[styles.imagePlaceholderIcon, styles.voremSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/image-placeholder2.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameViewSpaceBlock: {
    paddingHorizontal: responsiveWidth(5.12),
    backgroundColor: Color.colorWhite,
  },
  frameContainerSpaceBlock: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  descriptionTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    marginLeft: responsiveWidth(2.3),
    padding: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.24),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    height: responsiveHeight(5.22),
    alignItems: "center",
    flexDirection: "row",
  },
  imagePlaceholderIconLayout: {
    borderRadius: Border.br_7xs,
    overflow: "hidden",
  },
  voremSpaceBlock: {
    marginTop: responsiveHeight(1.49),
    alignSelf: "stretch",
  },
  rectangleFlexBox: {
    flex: 1,
    alignItems: "center",
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
    paddingVertical: responsiveHeight(1.24),
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    width: responsiveWidth(30.51),
    backgroundColor: Color.colorGainsboro_100,
    height: responsiveHeight(5.22),
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetailsWrapper: {
    width: responsiveWidth(30.51),
    marginLeft: responsiveWidth(2.3),
    backgroundColor: Color.colorGainsboro_100,
  },
  productDescription1: {
    color: Color.colorWhite,
  },
  productDescriptionWrapper: {
    width: responsiveWidth(45.12),
    backgroundColor: Color.colorFirebrick_200,
  },
  metaDescription: {
    color: Color.colorGray_300,
  },
  metaDescriptionWrapper: {
    width: responsiveWidth(40),
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: responsiveWidth(2.3),
  },
  frameGroup: {
    marginTop: responsiveHeight(3.85),
    alignSelf: "stretch",
  },
  frameContainer2: {
    width: "100%",
  },
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameContainer: {
    height: responsiveHeight(5.22),
    marginTop: responsiveHeight(3.73),
  },
  productShortDescription: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  voremIpsumDolor: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    marginTop: responsiveHeight(1.49),
    textAlign: "left",
  },
  productShortDescriptionParent: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(3.84),
    paddingVertical: responsiveHeight(1.86),
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  voremIpsumDolor1: {
    height: responsiveHeight(16.54),
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    marginTop: responsiveHeight(1.49),
    textAlign: "left",
  },
  imagePlaceholderIcon: {
    maxWidth: responsiveWidth(100),
    height: responsiveHeight(20.14),
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    width: "100%",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  productDescription: {
    height: "auto",
    paddingVertical: responsiveHeight(2.36),
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    width: "100%",
    flex: 1,
  },

  otherDetailsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal:responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  otherDetailsBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  otherDetails: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default ProductDescription;
