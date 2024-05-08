import React from "react";
import { View, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Color, Border } from "../../GlobalStyles";

const PaymentCards = () => {
  return (
    <View style={styles.container}>
      {/* Render 4-5 preloader cards */}
      {[...Array(5)].map((_, index) => (
        <View key={index} style={[styles.paymentCardBorder, styles.paymentCard]}>
          <View style={styles.leftSection}>
            <View style={[styles.placeholderText, styles.placeholderTextWidth1]} />
            <View style={[styles.placeholderText, styles.placeholderTextWidth2]} />
            <View style={[styles.placeholderText, styles.placeholderTextWidth3]} />
          </View>
          <View style={[styles.rightSection, styles.placeholderText]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column'
  },
  paymentCardBorder: {
    paddingVertical: responsiveHeight(1.36),
    paddingHorizontal: responsiveWidth(2.56),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    // overflow: "hidden",
  },
  paymentCard: {
    marginBottom: 10,
    width: "90%", // Adjust the width of the preloader cards
  },
  leftSection: {
    flex: 1,
    paddingRight: responsiveWidth(2),
    flexDirection:'column',
    gap:10
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
  placeholderText: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    marginBottom: responsiveHeight(0.5),
    height: 15,
    marginTop: responsiveHeight(0.5),
  },
  placeholderTextWidth1: {
    width: "80%",
  },
  placeholderTextWidth2: {
    width: "60%",
    marginBottom: responsiveHeight(0.5),
    marginTop: responsiveHeight(1.36),
  },
  placeholderTextWidth3: {
    width: "40%",
    marginTop: responsiveHeight(1.36),
  },
});

export default PaymentCards;
