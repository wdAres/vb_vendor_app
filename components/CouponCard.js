import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import moment from "moment";
import { useNavigation } from "@react-navigation/core";

const CouponCard = ({ style, data, isLoading }) => {
  // Calculate days left until expiry date
  const daysLeft = moment(data.expiryDate).fromNow(true);
  const navigation = useNavigation();


  const handlePress = () => {
    navigation.navigate("ViewCoupon", { id: data._id });
  };

  // Truncate long label
  const truncatedLabel =
    data.couponLabel.length > 5
      ? data.couponLabel.substring(0, 5) + "..."
      : data.couponLabel;

  if (isLoading) {
    // Placeholder or Skeleton while loading
    return (
      <View style={[styles.container, style]}>
        <View style={[styles.leftSection]}>
          <View style={[styles.placeholderText, { width: "80%", marginBottom: responsiveHeight(0.5) }]} />
          <View style={[styles.placeholderText, { width: "60%", marginBottom: responsiveHeight(0.5), marginTop: responsiveHeight(1.36) }]} />
          <View style={[styles.placeholderText, { width: "40%", marginTop: responsiveHeight(1.36) }]} />
        </View>
        <View style={[styles.rightSection, styles.placeholderText]} />
      </View>
    );
  }

  return (
    <Pressable style={[styles.container, style]} onPress={handlePress}>
      <View style={[styles.leftSection]}>
        <Text style={[styles.couponCode]}>{data.couponCode}</Text>
        <Text style={[styles.expiryDate]}>
          Expiry Date: {moment(data.expiryDate).format("MMM D, YYYY")}
        </Text>
        <Text style={[styles.daysLeft]}>{daysLeft} left</Text>
      </View>
      <View style={[styles.rightSection]}>
        <Text style={[styles.label]}>{truncatedLabel}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: responsiveHeight(1.36),
    paddingHorizontal: responsiveWidth(2.56),
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  leftSection: {
    flex: 1,
    paddingRight: responsiveWidth(2),
  },
  rightSection: {
    minWidth: responsiveWidth(21.02),
    height: responsiveHeight(3.1),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_8xs,
    marginLeft: responsiveWidth(2),
  },
  couponCode: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginBottom: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
  },
  expiryDate: {
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginBottom: responsiveHeight(0.5),
    marginTop: responsiveHeight(1.36),
  },
  daysLeft: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginTop: responsiveHeight(1.36),
  },
  label: {
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    paddingHorizontal: responsiveWidth(1),
  },
  placeholderText: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    marginBottom: responsiveHeight(0.5),
    height:15,
    marginTop: responsiveHeight(0.5),
  },
});

export default CouponCard;
