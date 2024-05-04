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

const Frame = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style]}>
      <View style={styles.frameChild} />
      <View style={styles.home04Parent}>
        <Image
          style={styles.home04Icon}
          resizeMode="cover"
          source={require("../assets/home044.png")}
        />
        <Text style={styles.home}>Home</Text>
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
  home04Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorFirebrick_200,
    textAlign: "left",
    marginTop: 6,
  },
  home04Parent: {
    justifyContent: "center",
    marginTop: 11,
    alignItems: "center",
  },
  rectangleParent: {
    flex: 1,
    alignItems: "center",
  },
});

export default Frame;
