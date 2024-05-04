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

const OtherDetails1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.otherDetails, styles.otherDetailsSpaceBlock]}>
      <View style={styles.frameParent}>
        <Pressable style={styles.frameParent}>
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
          <Text style={styles.products}>Products</Text>
        </Pressable>
        <Image
          style={styles.addSquare03Icon}
          resizeMode="cover"
          source={require("../assets/add-product.png")}
        />
      </View>
      <View style={styles.frameGroup}>
        <ScrollView
          style={styles.frameContainer}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.basicDetailsWrapper}>
            <Text style={[styles.basicDetails, styles.detailsTypo]}>
              Basic Details
            </Text>
          </View>
          <View style={[styles.otherDetailsWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.otherDetails1, styles.detailsTypo]}>
              Other Details
            </Text>
          </View>
          <View
            style={[styles.productDescriptionWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.productDescription, styles.detailsTypo]}>
              Product Description
            </Text>
          </View>
          <View style={[styles.metaDescriptionWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.productDescription, styles.detailsTypo]}>
              Meta Description
            </Text>
          </View>
        </ScrollView>
        <View style={styles.vatTaxParent}>
          <Text
            style={[styles.basicDetails, styles.detailsTypo]}
          >{`Vat & TAX`}</Text>
          <View style={styles.taxParent}>
            <Text style={[styles.tax, styles.textTypo]}>Tax</Text>
            <Text style={[styles.text, styles.textTypo]}>10%</Text>
          </View>
          <View style={styles.taxParent}>
            <Text style={[styles.tax, styles.textTypo]}>VAT</Text>
            <Text style={[styles.text, styles.textTypo]}>5%</Text>
          </View>
        </View>
        <View style={styles.vatTaxParent}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Estimate Shipping Time
          </Text>
          <View style={styles.shippingDaysParent}>
            <Text style={[styles.tax, styles.textTypo]}>Shipping Days</Text>
            <Text style={[styles.text2, styles.textTypo]}>10</Text>
          </View>
        </View>
        <View style={styles.vatTaxParent}>
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
        <View style={styles.vatTaxParent}>
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
        <View style={styles.vatTaxParent}>
          <Text style={[styles.basicDetails, styles.detailsTypo]}>
            Low Stock Quantity Warning
          </Text>
          <View style={styles.shippingDaysParent}>
            <Text style={[styles.tax, styles.textTypo]}>Quantity</Text>
            <Text style={[styles.text3, styles.textTypo]}>10</Text>
          </View>
        </View>
        <View style={styles.vatTaxParent}>
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
        <View style={styles.vatTaxParent}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  otherDetailsSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorWhite,
  },
  detailsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    marginLeft: 9,
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 42,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  parentSpaceBlock1: {
    marginTop: 13,
    flexDirection: "row",
  },
  frameWrapperLayout: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    width: 37,
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  offLayout: {
    backgroundColor: Color.colorLavenderblush,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    width: 37,
    borderRadius: Border.br_lgi,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  parentSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameLayout: {
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
  home04IconLayout: {
    height: 24,
    width: 24,
  },
  products: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  addSquare03Icon: {
    width: 20,
    height: 20,
    marginLeft: 217,
  },
  basicDetails: {
    color: Color.colorBlack,
  },
  basicDetailsWrapper: {
    padding: Padding.p_3xs,
    height: 42,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    width: 119,
    backgroundColor: Color.colorGainsboro_100,
    alignItems: "center",
    flexDirection: "row",
  },
  otherDetails1: {
    color: Color.colorWhite,
  },
  otherDetailsWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    width: 119,
    marginLeft: 9,
  },
  productDescription: {
    color: Color.colorGray_300,
  },
  productDescriptionWrapper: {
    width: 176,
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: 9,
  },
  metaDescriptionWrapper: {
    width: 156,
    backgroundColor: Color.colorGainsboro_100,
    marginLeft: 9,
  },
  frameContainer: {
    width: "100%",
  },
  tax: {
    color: Color.colorGray_200,
  },
  text: {
    marginLeft: 122,
    color: Color.colorBlack,
  },
  taxParent: {
    marginTop: 15,
    flexDirection: "row",
  },
  vatTaxParent: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 350,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_mini,
    marginTop: 15,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text2: {
    marginLeft: 70,
    color: Color.colorBlack,
  },
  shippingDaysParent: {
    marginTop: 19,
    flexDirection: "row",
  },
  on: {
    color: Color.colorLimegreen,
  },
  onWrapper: {
    marginLeft: 90,
  },
  statusParent: {
    alignItems: "center",
  },
  onContainer: {
    marginLeft: 20,
  },
  onFrame: {
    marginLeft: 13,
  },
  frameView: {
    marginLeft: 68,
  },
  text3: {
    marginLeft: 92,
    color: Color.colorBlack,
  },
  onWrapper1: {
    marginLeft: 70,
  },
  groupBuyParent: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  off: {
    color: Color.colorFirebrick_200,
  },
  offWrapper: {
    marginLeft: 74,
  },
  onWrapper2: {
    marginLeft: 55,
  },
  freeShippingParent: {
    alignItems: "center",
  },
  offContainer: {
    marginLeft: 78,
  },
  offFrame: {
    marginLeft: 29,
  },
  frameGroup: {
    marginTop: 31,
  },
  otherDetails: {
    height: 1145,
    paddingVertical: Padding.p_40xl,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default OtherDetails1;
