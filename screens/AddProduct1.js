import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const AddProduct1 = () => {
  const [frameTextInput, setFrameTextInput] = useState("Product Name");
  const [frameTextInput1, setFrameTextInput1] = useState("Brand");
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addProductScrollViewContent}
      style={styles.addProduct}
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
            <Text style={[styles.addProduct1, styles.addProduct1Typo]}>
              Add product
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameGroupSpaceBlock}>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
          <Text style={[styles.basicDetails, styles.parentSpaceBlock]}>
            Basic details
          </Text>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Product Name
            </Text>
            <TextInput
              style={[styles.frameTextinput, styles.frameChildBorder]}
              value={frameTextInput}
              onChangeText={setFrameTextInput}
            />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Brand
            </Text>
            <TextInput
              style={[styles.frameChild2, styles.frameChildBorder]}
              value={frameTextInput1}
              onChangeText={setFrameTextInput1}
            />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Unit
            </Text>
            <TextInput style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Weight (In Kg)
            </Text>
            <TextInput style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Minimum Purchase Qty
            </Text>
            <TextInput
              style={[styles.frameChild2, styles.frameChildBorder]}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Tags
            </Text>
            <View style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Barcode
            </Text>
            <TextInput style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Product category
            </Text>
            <View style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>
              Estimate Shipping Time
            </Text>
            <TextInput style={[styles.frameChild2, styles.frameChildBorder]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.productName, styles.refundableTypo]}>GST</Text>
            <TextInput style={[styles.frameChild9, styles.frameChildBorder]} />
          </View>
          <View style={[styles.refundableParent, styles.parentSpaceBlock]}>
            <Text
              style={[styles.refundable, styles.refundableTypo]}
            >{`Refundable `}</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/ellipse-231.png")}
              />
            </View>
          </View>
        </View>

        <Pressable onPress={() => navigation.navigate("AddProduct2")}>
          <View style={[styles.continueWrapper, styles.frameGroupSpaceBlock]}>
            <Text style={styles.continue}>Continue</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapperParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  addProduct1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameLayout: {
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(3.23),
    alignSelf: "stretch",
  },
  refundableTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameChildBorder: {
    marginTop: responsiveHeight(1.49),
    height: responsiveHeight(6.21),
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: "100%",
    paddingHorizontal:responsiveWidth(5.89)
  },
  groupLayout: {
    height: responsiveHeight(2.61),
    width: responsiveWidth(10.25),
  },
  frameGroupSpaceBlock: {
    marginTop: responsiveHeight(5.34),
    alignSelf: "stretch",
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
    alignSelf: "stretch",
    flexDirection: "row",
  },
  basicDetails: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  productName: {
    alignSelf: "stretch",
    // marginBottom:responsiveHeight(1.49)
  },
  frameTextinput: {
    alignSelf: "stretch",
  },
  frameChild2: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  frameChild9: {
    alignSelf: "flex-start",
    backgroundColor: Color.colorWhite,
  },
  refundable: {
    flex: 1,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs_5,
    backgroundColor: Color.colorHoneydew,
    borderColor: Color.colorLimegreen,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    width: responsiveWidth(10.25),
  },
  groupItem: {
    top: 2,
    left: 20,
    width: responsiveWidth(4.35),
    height: responsiveHeight(2.11),
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: responsiveWidth(62.3),
  },
  refundableParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  continue: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  continueWrapper: {
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    // paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    backgroundColor: Color.colorFirebrick_200,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
  frameParent: {
    width: responsiveWidth(89.74),
  },
  addProduct: {
    // flexDirection: "row",
    backgroundColor: Color.colorWhite,
    // flex: 1,
    width: responsiveWidth(100),
  },
  addProductScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default AddProduct1;
