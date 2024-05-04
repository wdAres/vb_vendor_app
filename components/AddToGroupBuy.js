import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const AddToGroupBuy = ({ onClose }) => {
  return (
    <View style={styles.addToGroupBuy}>
      <View style={styles.frameParent}>
        <View style={styles.addToGroupBuyParent}>
          <Text style={styles.addToGroup}>Add To Group Buy</Text>
          <View style={styles.frameGroup}>
            <View style={styles.addToGroupBuyParent}>
              <Text style={[styles.dateTillOffer, styles.daysTypo]}>
                Date Till Offer
              </Text>
              <TextInput style={[styles.frameChild, styles.frameBorder]} />
            </View>
            <View style={styles.frameContainer}>
              <Pressable style={styles.daysFlexBox}>
                <Text style={[styles.days, styles.daysTypo]}>30 Days</Text>
              </Pressable>
              <Pressable style={[styles.daysContainer, styles.daysFlexBox]}>
                <Text style={[styles.days, styles.daysTypo]}>60 Days</Text>
              </Pressable>
              <Pressable style={[styles.daysContainer, styles.daysFlexBox]}>
                <Text style={[styles.days, styles.daysTypo]}>90 Days</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <Text style={[styles.dateTillOffer, styles.daysTypo]}>
              Minimum Order Quantity
            </Text>
            <TextInput style={[styles.frameItem, styles.frameBorder]} />
          </View>
          <View style={styles.frameGroup}>
            <Text style={[styles.dateTillOffer, styles.daysTypo]}>
              Discount Type
            </Text>
            <TextInput style={[styles.frameItem, styles.frameBorder]} />
          </View>
          <View style={styles.frameGroup}>
            <Text style={[styles.dateTillOffer, styles.daysTypo]}>
              Discount
            </Text>
            <View
              style={[styles.frameView, styles.frameBorder]}
              placeholder="500"
            />
          </View>
        </View>
        <Pressable style={styles.addToGroupBuyWrapper}>
          <Text style={styles.addToGroup1}>Add To Group Buy</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  daysTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameBorder: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  daysFlexBox: {
    padding: 8,
    height: 48,
    backgroundColor: Color.colorWhitesmoke_400,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  addToGroup: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  dateTillOffer: {
    fontSize: FontSize.size_xs_8,
    alignSelf: "stretch",
  },
  frameChild: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  addToGroupBuyParent: {
    alignSelf: "stretch",
  },
  days: {
    fontSize: FontSize.size_xs,
  },
  daysContainer: {
    marginLeft: 14,
  },
  frameContainer: {
    width: 346,
    marginTop: 11,
    flexDirection: "row",
  },
  frameGroup: {
    marginTop: 26,
    alignSelf: "stretch",
  },
  frameItem: {
    height: 43,
  },
  frameView: {
    padding: Padding.p_sm,
    overflow: "hidden",
  },
  addToGroup1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  addToGroupBuyWrapper: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorFirebrick_200,
    paddingHorizontal: Padding.p_37xl,
    paddingVertical: Padding.p_lgi,
    marginTop: 78,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    alignItems: "center",
    flex: 1,
  },
  addToGroupBuy: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowRadius: 24.6,
    elevation: 24.6,
    shadowOpacity: 1,
    width: 390,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 26,
    maxWidth: "100%",
    maxHeight: "100%",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AddToGroupBuy;
