import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CouponCard = ({ style }) => {
  return (
    <Pressable style={[style]}>
      <View style={[styles.frameParent2, styles.frameParentBorder]}>
        <View>
          <Text style={[styles.vb30, styles.vb30Typo]}>{`V&B30`}</Text>
          <Text style={[styles.dateTill2082023, styles.daysLeftTypo]}>
            Date Till 20/8/2023
          </Text>
          <Text style={[styles.daysLeft, styles.daysLeftTypo]}>
            60 Days Left
          </Text>
        </View>
        <View style={styles.bathWareWrapper}>
          <Text style={[styles.bathWare, styles.bathWareTypo]}>Bath ware</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParent2: {
    // marginTop: responsiveHeight(1.86),
  },
  frameParentBorder: {
    paddingVertical: responsiveHeight(1.36),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    width: responsiveWidth(89.74),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  vb30: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  vb30Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  dateTill2082023: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  daysLeftTypo: {
    marginTop: responsiveHeight(1.36),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  daysLeft: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  daysLeftTypo: {
    marginTop: responsiveHeight(1.36),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  bathWareWrapper: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: responsiveWidth(21.02),
    height: responsiveHeight(3.1),
    //
    // paddingVertical: responsiveHeight(1.24),
    // paddingHorizontal: responsiveWidth(2.56),

    marginLeft: responsiveWidth(37.69),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  bathWare: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  bathWareTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },

 
});

export default CouponCard;
