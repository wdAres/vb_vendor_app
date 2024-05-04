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

const Frame1 = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style]}>
      <View style={styles.frameChild} />
      <View style={styles.addSquare03Parent}>
        <Image
          style={styles.addSquare03Icon}
          resizeMode="cover"
          source={require("../assets/addsquare03.png")}
        />
        <Text style={styles.products}>Products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick_200,
    width: 53,
    height: 5,
  },
  addSquare03Icon: {
    width: 24,
    height: 24,
  },
  products: {
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorFirebrick_200,
    textAlign: "left",
    marginTop: 6,
  },
  addSquare03Parent: {
    justifyContent: "center",
    marginTop: 11,
    alignItems: "center",
  },
  rectangleParent: {
    flex: 1,
    alignItems: "center",
  },
});

export default Frame1;
