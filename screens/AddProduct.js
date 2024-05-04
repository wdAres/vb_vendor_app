import React, { useState } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Switch as RNPSwitch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const AddProduct = () => {
  const [groupSwitchValue, setGroupSwitchValue] = useState(true);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.addProduct}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addProductScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.wrapperParentFlexBox]}>
          <Pressable style={styles.wrapperParentFlexBox}>
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
            <Text style={[styles.addProduct1, styles.continueTypo]}>
              Add product
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
          <Text style={[styles.basicDetails, styles.continueTypo]}>
            Basic details
          </Text>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Product Name
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Brand
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Brand"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Unit
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Unit"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Weight (In Kg)
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Weight (In Kg)"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Minimum Purchase Qty
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Minimum Purchase Qty"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Tags
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Tags"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Barcode
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="barcode"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Product category
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Product Category"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Estimate Shipping Time
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="Time"
            />
          </View>
          <View style={styles.productNameParent}>
            <Text style={[styles.productName, styles.refundableTypo]}>GST</Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameTextinputLayout]}
              placeholder="GST"
            />
          </View>
          <View style={[styles.refundableParent, styles.wrapperParentFlexBox]}>
            <Text
              style={[styles.refundable, styles.refundableTypo]}
            >{`Refundable `}</Text>
            <RNPSwitch
              style={styles.groupRnpswitch}
              value={groupSwitchValue}
              onValueChange={setGroupSwitchValue}
              color="#d9ffe8"
            />
          </View>
        </View>
        <Pressable
          style={[styles.continueWrapper, styles.frameTextinputLayout]}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addProductScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameLayout: {
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  refundableTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameTextinputLayout: {
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
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
  frameWrapper: {
    alignSelf: "stretch",
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick_200,
  },
  frameItem: {
    backgroundColor: Color.colorGainsboro_200,
    marginLeft: responsiveWidth(1.53),
  },
  rectangleParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  basicDetails: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    marginTop: responsiveHeight(3.23),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  productName: {
    alignSelf: "stretch",
  },
  frameTextinput: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    height:responsiveHeight(6.21),
    marginTop: responsiveHeight(1.49),
    backgroundColor: Color.colorWhite,
  },
  productNameParent: {
    marginTop: responsiveHeight(3.23),
    alignSelf: "stretch",
  },
  refundable: {
    flex: 1,
  },
  groupRnpswitch: {
    width: responsiveWidth(10.25),
    height: responsiveHeight(2.61),
    marginLeft: responsiveWidth(62.30),
  },
  refundableParent: {
    marginTop: responsiveHeight(3.23),
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop:responsiveHeight(5.34),
    alignSelf: "stretch",
  },
  continue: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  continueWrapper: {
    justifyContent: "center",
    // paddingHorizontal: Padding.p_131xl,
    paddingVertical: responsiveHeight(2.11),
    backgroundColor: Color.colorFirebrick_200,
    marginTop: responsiveHeight(5.34),
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    flex: 1,
  },
  addProduct: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default AddProduct;
