import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame10 = ({ style }) => {
  return (
    <View style={[styles.photosParent, style]}>
      <Text style={styles.photos}>Photos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photos: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
  photosParent: {
    flex: 1,
    borderTopLeftRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_49xl,
    paddingVertical: Padding.p_smi,
  },
});

export default Frame10;
