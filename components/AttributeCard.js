import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default function AttributeCard({_id,name}) {
  return (
    <Pressable style={styles.refundCardBorder}>
      <View style={[styles.colorsParent, styles.parentFlexBox]}>
        <Text style={styles.colors}>{name}</Text>
        <Image
          style={styles.arrowRightSmIcon}
          resizeMode="cover"
          source={require("../assets/arrowrightsm.png")}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    parentFlexBox: {
      alignItems: "center",
      flexDirection: "row",
    },
    refundCardBorder: {
      paddingVertical: Padding.p_mini,
      paddingHorizontal: Padding.p_xs,
      borderWidth: 1,
      borderColor: Color.colorGainsboro_100,
      borderStyle: "solid",
      borderRadius: Border.br_8xs,
      alignSelf: "stretch",
      backgroundColor: Color.colorWhite,
    },
    colors: {
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.size_xs,
      textAlign: "left",
      color: Color.colorBlack,
      flex: 1,
      textTransform:'capitalize'
    },
    arrowRightSmIcon: {
      width: responsiveHeight(2.36),
      height: responsiveHeight(2.36),
    },
    colorsParent: {
      justifyContent: "space-between",
      alignSelf: "stretch",
    },
  });
  