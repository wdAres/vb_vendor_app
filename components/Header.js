import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export default function Header({ label , handlePress }) {
  const navigation = useNavigation();

  return (
    <View style={styles.frameWrapper}>
      <View style={styles.arrowLeftSmParent}>
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
        <Text style={[styles.paymentDetails1, styles.offTypo]}>{label}</Text>
      </View>
      {handlePress && (
        <Pressable onPress={handlePress}>
          <Image
            style={styles.addProductIcon}
            resizeMode="cover"
            source={require("../assets/add-product.png")}
          />
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    paddingVertical: responsiveHeight(2.36),
    paddingHorizontal: responsiveWidth(5.12),
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
    position: "sticky",
    top: 0,
    zIndex: 1000,
    justifyContent: "space-between",
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  paymentDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
});
