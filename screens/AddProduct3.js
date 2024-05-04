import React, { useState } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Padding, Color, FontSize } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import TogglableDiv from "../components/TogglableDiv";

const AddProduct3 = () => {
  const [frameSwitchSwitchValueState, setFrameSwitchSwitchValueState] =
    useState(true);
  const [frameSwitch1SwitchValueState, setFrameSwitch1SwitchValueState] =
    useState(false);
  const [frameSwitch2SwitchValueState, setFrameSwitch2SwitchValueState] =
    useState(false);
  const [frameSwitch3SwitchValueState, setFrameSwitch3SwitchValueState] =
    useState(false);
  const [frameSwitch4SwitchValueState, setFrameSwitch4SwitchValueState] =
    useState(false);
  const [frameSwitch5SwitchValueState, setFrameSwitch5SwitchValueState] =
    useState(false);
  const [frameSwitch6SwitchValueState, setFrameSwitch6SwitchValueState] =
    useState(false);
  const [frameSwitch7SwitchValueState, setFrameSwitch7SwitchValueState] =
    useState(false);
  const navigation = useNavigation();

  const data1 = [
    {
      label: "Free Shipping",
      value: frameSwitchSwitchValueState,
      Func: setFrameSwitchSwitchValueState,
    },
    {
      label: "Flat Rate",
      value: frameSwitch1SwitchValueState,
      Func: setFrameSwitch1SwitchValueState,
      style:styles.mt_top
    },
    {
      label: "Is Product Quantity Multiply",
      value: frameSwitch2SwitchValueState,
      Func: setFrameSwitch2SwitchValueState,
      style:styles.mt_top
    },
  ];
  const data2 = [
    {
      label: "Group Buy",
      value: frameSwitch3SwitchValueState,
      Func: setFrameSwitch3SwitchValueState,
    },
    {
      label: "Instabuild",
      value: frameSwitch4SwitchValueState,
      Func: setFrameSwitch4SwitchValueState,
      style:styles.mt_top
    },
  ];
  const data3 = [
    {
      label: "Show Stock Quantity",
      value: frameSwitch5SwitchValueState,
      Func: setFrameSwitch5SwitchValueState,
    },
    {
      label: "Show Stock With Text Only",
      value: frameSwitch6SwitchValueState,
      Func: setFrameSwitch6SwitchValueState,
      style:styles.mt_top
    },
    {
      label: "Hide Stock",
      value: frameSwitch7SwitchValueState,
      Func: setFrameSwitch7SwitchValueState,
      style:styles.mt_top
    },
  ];

  const data4 = [
    {
      label: "Status",
      value: frameSwitch5SwitchValueState,
      Func: setFrameSwitch5SwitchValueState,
    },
  ];

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
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <Pressable style={styles.wrapperFlexBox}>
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
          <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameItemLayout]} />
            <View style={[styles.frameItem, styles.frameItemLayout]} />
            <View style={[styles.rectangleView, styles.frameItemLayout]} />
            <View style={[styles.rectangleView, styles.frameItemLayout]} />
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text
              style={[styles.shippingConfiguration, styles.addProduct1Typo]}
            >
              Shipping Configuration
            </Text>
            <View style={styles.frameContainer}>
              {data1.map((element) => (
                <TogglableDiv {...element} />
              ))}
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text
              style={[styles.shippingConfiguration, styles.addProduct1Typo]}
            >
              Category
            </Text>
            <View style={styles.frameContainer}>
              {data2.map((element) => (
                <TogglableDiv {...element} />
              ))}
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text
              style={[styles.shippingConfiguration, styles.addProduct1Typo]}
            >
              Stock Visibility State
            </Text>
            <View style={styles.frameContainer}>
              {data3.map((element) => (
                <TogglableDiv {...element} />
              ))}
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text
              style={[styles.shippingConfiguration, styles.addProduct1Typo]}
            >
              Cash On Delivery
            </Text>
            {data4.map((element) => (
              <TogglableDiv {...element} />
            ))}
          </View>
        </View>
        <Pressable
          style={[styles.continueWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("AddProduct4")}
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
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  addProduct1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  frameItemLayout: {
    marginLeft: responsiveWidth(1.53),
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  continueTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameChildLayout: {
    paddingHorizontal: responsiveWidth(0.51),
    paddingVertical: responsiveHeight(0.24),
    width: responsiveWidth(8.2),
    borderRadius: Border.br_2xs_5,
    flexDirection: "row",
  },
  parentBorder1: {
    paddingVertical: responsiveHeight(1.86),
    paddingHorizontal: responsiveWidth(4.1),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  parentBorder: {
    paddingHorizontal: responsiveWidth(3.58),
    paddingVertical: responsiveHeight(1.86),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameChild7Layout: {
    width: responsiveWidth(8.71),
    paddingHorizontal: responsiveWidth(0.51),
    paddingVertical: responsiveHeight(0.24),
    borderRadius: Border.br_2xs_5,
    flexDirection: "row",
    overflow: "hidden",
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
  },
  frameWrapper: {
    alignSelf: "stretch",
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
  rectangleView: {
    backgroundColor: Color.colorGainsboro_200,
  },
  rectangleParent: {
    flexDirection: "row",
    marginTop: responsiveHeight(3.73),
  },
  shippingConfiguration: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  freeShipping: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    flex: 1,
  },
  frameSwitch: {
    marginLeft: responsiveWidth(53.07),
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  frameToggle: {
    marginLeft: responsiveWidth(60.25),
    overflow: "hidden",
  },
  flatRateParent: {
    marginTop: responsiveHeight(1.11),
  },
  frameChild2: {
    marginLeft: responsiveWidth(31.79),
    overflow: "hidden",
  },
  frameContainer: {
    marginTop: responsiveHeight(1.86),
    alignSelf: "stretch",
  },
  frameChild3: {
    marginLeft: responsiveWidth(57.69),
    justifyContent: "flex-end",
  },
  frameChild4: {
    marginLeft: responsiveWidth(58.71),
    overflow: "hidden",
  },
  frameChild5: {
    marginLeft: responsiveWidth(42.3),
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  frameChild6: {
    marginLeft: responsiveWidth(33.58),
    overflow: "hidden",
  },
  frameChild7: {
    marginLeft: responsiveWidth(57.17),
  },
  hideStockParent: {
    marginTop: responsiveHeight(1.11),
  },
  ellipseIcon: {
    width: responsiveWidth(3.33),
    height: responsiveHeight(1.61),
  },
  ellipseWrapper: {
    backgroundColor: Color.colorHoneydew,
    marginLeft: responsiveWidth(63.58),
    justifyContent: "flex-end",
  },
  statusParent: {
    marginTop: responsiveHeight(1.86),
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  continue: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  continueWrapper: {
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    // paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(15.42),
    backgroundColor: Color.colorFirebrick_200,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameParent: {
    flex: 1,
  },
  addProduct: {
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  mt_top:{
    marginTop:responsiveHeight(1.11)
  }
});

export default AddProduct3;
