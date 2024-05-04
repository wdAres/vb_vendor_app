import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame9 = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style]}>
      <View style={styles.frameChild} />
      <View style={styles.bankNote04Parent}>
        <Image
          style={styles.bankNote04Icon}
          resizeMode="cover"
          source={require("../assets/userprofile02.png")}
        />
        <Text style={styles.payments}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 53,
    height: 5,
  },
  bankNote04Icon: {
    width: 24,
    height: 24,
  },
  payments: {
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: 6,
  },
  bankNote04Parent: {
    justifyContent: "center",
    marginTop: 11,
    alignItems: "center",
  },
  rectangleParent: {
    flex: 1,
    alignItems: "center",
  },
});

export default Frame9;
