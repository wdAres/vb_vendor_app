import * as React from "react";
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
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const AddProduct4 = () => {
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
            <Text style={[styles.addProduct1, styles.unitPriceTypo]}>
              Add product
            </Text>
          </Pressable>
        </View>
        <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
          <View style={styles.frameChild} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameChild1, styles.frameLayout]} />
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={[styles.productPrice, styles.productTypo]}>
            Product price + stock
          </Text>
          <View style={styles.unitPriceParent}>
            <Text style={[styles.unitPrice, styles.unitPriceTypo]}>
              Unit price
            </Text>
            <TextInput
              style={[styles.rectangleTextinput, styles.frameChild4Border]}
            />
          </View>
          <View style={styles.unitPriceParent}>
            <Text style={[styles.unitPrice, styles.unitPriceTypo]}>
              Discount Date Range
            </Text>
            <TextInput
              style={[styles.rectangleTextinput, styles.frameChild4Border]}
            />
          </View>
          <View style={styles.unitPriceParent}>
            <Text
              style={[styles.unitPrice, styles.unitPriceTypo]}
            >{`Discount `}</Text>
            <TextInput
              style={[styles.rectangleTextinput, styles.frameChild4Border]}
            />
          </View>
          <View style={styles.unitPriceParent}>
            <Text style={[styles.unitPrice, styles.unitPriceTypo]}>
              Quantity
            </Text>
            <TextInput
              style={[styles.rectangleTextinput, styles.frameChild4Border]}
            />
          </View>
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={styles.productTypo}>Product Description</Text>
          <View style={styles.descriptionParent}>
            <Text style={[styles.unitPrice, styles.unitPriceTypo]}>
              Description
            </Text>
            <TextInput
              style={[styles.frameChild4, styles.frameChild4Border]}
              multiline={true}
            />
          </View>
        </View>
        <Pressable
          style={[styles.continueWrapper, styles.parentSpaceBlock]}
          onPress={() => navigation.navigate("AddProduct5")}
        >
          <Text style={styles.continue}>Continue</Text>
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
  unitPriceTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(3.98),
    alignSelf: "stretch",
  },
  frameLayout: {
    marginLeft: responsiveWidth(1.53),
    height: responsiveHeight(0.62),
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  productTypo: {
    color: Color.colorFirebrick_200,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameChild4Border: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: responsiveHeight(1.49),
    paddingHorizontal:responsiveWidth(5.89),
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    // height: responsiveHeight(2.98),
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveWidth(6.12),
    height: responsiveHeight(2.98),
  },
  addProduct1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
  },
  frameWrapper: {
    flex:1,
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
  frameChild1: {
    backgroundColor: Color.colorGainsboro_200,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  productPrice: {
    alignSelf: "stretch",
  },
  unitPrice: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignSelf: "stretch",
  },
  rectangleIcon: {
    maxWidth: responsiveWidth(100),
    marginTop: responsiveHeight(1.49),
    height: responsiveHeight(6.21),
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  unitPriceParent: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  rectangleTextinput: {
    height: responsiveHeight(6.21),
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  frameChild4: {
    height: responsiveHeight(29.72),
  },
  descriptionParent: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  continue: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  continueWrapper: {
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    // paddingHorizontal: Padding.p_131xl,
    paddingVertical: responsiveHeight(2.11),
    backgroundColor: Color.colorFirebrick_200,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    alignSelf:'stretch'
    // flex: 1,
  },
  // addProduct: {
  //   paddingHorizontal: Padding.p_xl,
  //   paddingVertical: Padding.p_40xl,
  //   flexDirection: "column",
  //   overflow: "hidden",
  //   width: "100%",
  //   flex: 1,
  //   backgroundColor: Color.colorWhite,
  // },
  addProduct: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default AddProduct4;
