import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const OtherDetails = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.otherDetails, styles.otherDetailsBg]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.otherDetailsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <Pressable
          style={styles.arrowLeftSmParent}
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
      <View style={styles.frameGroup}>
        <ScrollView
          style={styles.frameContainer}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable onPress={()=>navigation.navigate('ProductsDetails')} style={styles.basicDetailsWrapper}>
            <Text style={[styles.basicDetails, styles.detailsTypo]}>
              Basic Details
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('OtherDetails')}  style={[styles.otherDetailsWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.otherDetails1, styles.detailsTypo]}>
              Other Details
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('ProductDescription')} 
            style={[styles.productDescriptionWrapper, styles.wrapperSpaceBlock]}
          >
            <Text style={[styles.productDescription, styles.detailsTypo]}>
              Product Description
            </Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('ProductDescription1')}  style={[styles.metaDescriptionWrapper, styles.vatParentLayout]}>
            <Text style={[styles.productDescription, styles.detailsTypo]}>
              Meta Description
            </Text>
          </Pressable>
        </ScrollView>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text
            style={[styles.basicDetails, styles.detailsTypo]}
          >{`Vat & TAX`}</Text>
          <View style={styles.taxParent}>
            <Text style={[styles.tax, styles.textTypo]}>Tax</Text>
            <Text style={[styles.text, styles.textTypo]}>10%</Text>
          </View>
          <View style={[styles.vatParent, styles.vatParentLayout]}>
            <Text style={[styles.tax, styles.textTypo]}>VAT</Text>
            <Text style={[styles.text, styles.textTypo]}>5%</Text>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Estimate Shipping Time
          </Text>
          <View style={[styles.shippingDaysParent, styles.parentSpaceBlock2]}>
            <Text style={[styles.tax, styles.textTypo]}>Shipping Days</Text>
            <Text style={[styles.text2, styles.textTypo]}>10</Text>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Cash On Delivery
          </Text>
          <View style={[styles.statusParent, styles.parentSpaceBlock1]}>
            <Text style={[styles.tax, styles.textTypo]}>Status</Text>
            <View style={[styles.onWrapper, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Stock Visibility State
          </Text>
          <View style={[styles.statusParent, styles.parentSpaceBlock1]}>
            <Text style={[styles.tax, styles.textTypo]}>
              Show Stock Quantity
            </Text>
            <View style={[styles.onContainer, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
          <View style={styles.parentSpaceBlock1}>
            <Text style={[styles.tax, styles.textTypo]}>{`Show Stock With Text 
Only`}</Text>
            <View style={[styles.onFrame, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
          <View style={[styles.statusParent, styles.parentSpaceBlock1]}>
            <Text style={[styles.tax, styles.textTypo]}>Hide Stock</Text>
            <View style={[styles.frameView, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Low Stock Quantity Warning
          </Text>
          <View style={[styles.quantityParent, styles.parentSpaceBlock2]}>
            <Text style={[styles.tax, styles.textTypo]}>Quantity</Text>
            <Text style={[styles.text3, styles.textTypo]}>10</Text>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Category
          </Text>
          <View style={styles.groupBuyParent}>
            <Text style={[styles.tax, styles.textTypo]}>Group Buy</Text>
            <View style={[styles.onWrapper1, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
          <View style={styles.groupBuyParent}>
            <Text style={[styles.tax, styles.textTypo]}>Instabuild</Text>
            <View style={[styles.offWrapper, styles.offLayout]}>
              <Text style={[styles.off, styles.textTypo]}>Off</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vatTaxParent, styles.otherDetailsBg]}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Shipping Configuration
          </Text>
          <View style={[styles.freeShippingParent, styles.parentSpaceBlock]}>
            <Text style={[styles.tax, styles.textTypo]}>Free Shipping</Text>
            <View style={[styles.onWrapper2, styles.frameWrapperLayout]}>
              <Text style={[styles.on, styles.textTypo]}>On</Text>
            </View>
          </View>
          <View style={[styles.freeShippingParent, styles.parentSpaceBlock]}>
            <Text style={[styles.tax, styles.textTypo]}>Flat Rate</Text>
            <View style={[styles.offContainer, styles.offLayout]}>
              <Text style={[styles.off, styles.textTypo]}>Off</Text>
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.tax, styles.textTypo]}>{`Is Product Quantity
Multiply`}</Text>
            <View style={[styles.offFrame, styles.offLayout]}>
              <Text style={[styles.off, styles.textTypo]}>Off</Text>
            </View>
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
  detailsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperSpaceBlock: {
    marginLeft: responsiveWidth(2.30),
    padding: responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    alignItems: "center",
  },
  vatParentLayout: {
    width: responsiveWidth(40),
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  parentSpaceBlock2: {
    marginTop: responsiveHeight(2.36),
    flexDirection: "row",
  },
  parentSpaceBlock1: {
    marginTop: responsiveHeight(1.61),
    width: responsiveWidth(40.51),
    flexDirection: "row",
  },
  frameWrapperLayout: {
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    width: responsiveWidth(9.48),
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height:responsiveHeight(2.98) ,
    alignItems: "center",
    flexDirection: "row",
  },
  offLayout: {
    backgroundColor: Color.colorLavenderblush,
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    width: responsiveWidth(9.48),
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height: responsiveHeight(2.98),
    alignItems: "center",
    flexDirection: "row",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(1.99),
    width: responsiveWidth(40.51),
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  products: {
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
    flex: 1,
  },
  addSquare03: {
    width: responsiveHeight(2.48),
    height: responsiveHeight(2.48),
    marginLeft: responsiveWidth(55.64),
  },
  frameParent: {
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
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    width: responsiveWidth(30.51),
    backgroundColor: Color.colorGainsboro_100,
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetails1: {
    color: Color.colorWhite,
  },
  otherDetailsWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    width: responsiveWidth(30.51),
    marginLeft: responsiveWidth(2.30),
    flexDirection: "row",
  },
  productDescription: {
    color: Color.colorGray_300,
  },
  productDescriptionWrapper: {
    width: responsiveWidth(45.12),
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: responsiveWidth(2.30),
    flexDirection: "row",
  },
  metaDescriptionWrapper: {
    marginLeft: responsiveWidth(2.30),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.colorGainsboro_100,
  },
  frameContainer: {
    width: "100%",
  },
  tax: {
    color: Color.colorGray_200,
    flex: 1,
  },
  text: {
    marginLeft: responsiveWidth(31.28),
    color: Color.colorBlack,
  },
  taxParent: {
    width: responsiveWidth(40.76),
    marginTop: responsiveHeight(1.86),
    flexDirection: "row",
  },
  vatParent: {
    marginTop: responsiveHeight(1.86),
  },
  vatTaxParent: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(4.35),
    paddingVertical: responsiveHeight(1.86),
    marginTop: responsiveHeight(1.86),
    alignSelf: "stretch",
  },
  text2: {
    marginLeft: responsiveWidth(17.94),
    color: Color.colorBlack,
  },
  shippingDaysParent: {
    width: responsiveWidth(38.71),
  },
  on: {
    color: Color.colorLimegreen,
  },
  onWrapper: {
    marginLeft: responsiveWidth(23.07),
  },
  statusParent: {
    alignItems: "center",
  },
  onContainer: {
    marginLeft: responsiveWidth(5.12),
  },
  onFrame: {
    marginLeft: responsiveWidth(3.33),
  },
  frameView: {
    marginLeft: responsiveWidth(17.43),
  },
  text3: {
    marginLeft: responsiveWidth(23.58),
    color: Color.colorBlack,
  },
  quantityParent: {
    width: responsiveWidth(37.17),
  },
  onWrapper1: {
    marginLeft: responsiveWidth(17.94),
  },
  groupBuyParent: {
    width: responsiveWidth(40.51),
    marginTop: responsiveHeight(1.86),
    alignItems: "center",
    flexDirection: "row",
  },
  off: {
    color: Color.colorFirebrick_200,
  },
  offWrapper: {
    marginLeft: responsiveWidth(18.97),
  },
  onWrapper2: {
    marginLeft: responsiveWidth(14.10),
  },
  freeShippingParent: {
    alignItems: "center",
  },
  offContainer: {
    marginLeft: responsiveWidth(20),
  },
  offFrame: {
    marginLeft: responsiveWidth(7.43),
  },
  frameGroup: {
    marginTop: responsiveHeight(3.85),
    alignSelf: "stretch",
  },
  otherDetails: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default OtherDetails;
