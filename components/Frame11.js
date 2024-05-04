import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame11 = ({ style }) => {
  return (
    <View style={[styles.videosParent, style]}>
      <Text style={styles.videos}>Videos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  videos: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  videosParent: {
    flex: 1,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_smi,
  },
});

export default Frame11;
