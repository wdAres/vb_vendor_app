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

const Frame7 = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style]}>
      <View style={styles.frameChild} />
      <View style={styles.bag02Parent}>
        <Image
          style={styles.bag02Icon}
          resizeMode="cover"
          source={require("../assets/bag02.png")}
        />
        <Text style={styles.orders}>Orders</Text>
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
  bag02Icon: {
    width: 24,
    height: 24,
  },
  orders: {
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: 6,
  },
  bag02Parent: {
    justifyContent: "center",
    marginTop: 11,
    alignItems: "center",
  },
  rectangleParent: {
    flex: 1,
    alignItems: "center",
  },
});

export default Frame7;
