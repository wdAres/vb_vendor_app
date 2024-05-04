import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const TogglableDiv = ({ style, label, Func, value }) => {
  return (
    <View style={[styles.parentBorder1, style]}>
      <Text style={[styles.freeShipping, styles.continueTypo]}>{label}</Text>
      <Switch
        style={[styles.frameSwitch, styles.frameChildLayout]}
        value={value}
        onValueChange={() => Func(!value)}
        thumbColor="#55b87b"
        trackColor={{ false: "#939393", true: "#d9ffe8" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: Color.colorWhite,
  },
  freeShipping: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    flex: 1,
  },
  continueTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
//   frameChildLayout: {
//     paddingHorizontal: responsiveWidth(0.51),
//     paddingVertical: responsiveHeight(0.24),
//     width: responsiveWidth(8.2),
//     borderRadius: Border.br_2xs_5,
//     flexDirection: "row",
//   },
});

export default TogglableDiv;
