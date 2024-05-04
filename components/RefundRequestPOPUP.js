import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const RefundRequestPOPUP = ({ onClose }) => {
  return (
    <View style={styles.refundRequestPopup}>
      <View style={styles.refundRequestDetailsParent}>
        <Text style={styles.refundRequestDetails}>Refund Request Details</Text>
        <View style={[styles.dateParent, styles.parentSpaceBlock]}>
          <Text style={styles.date}>Date</Text>
          <Text style={[styles.text, styles.textTypo]}>20/8/2023</Text>
        </View>
        <View style={[styles.dateParent, styles.parentSpaceBlock]}>
          <Text style={styles.date}>Order ID</Text>
          <Text style={[styles.text1, styles.textTypo]}>12521256</Text>
        </View>
        <View style={[styles.dateParent, styles.parentSpaceBlock]}>
          <Text style={styles.date}>Product</Text>
          <Text style={[styles.view, styles.textTypo]}>View</Text>
        </View>
        <View style={styles.parentSpaceBlock}>
          <Text style={styles.refundRequestDetails}>Reason</Text>
          <Text style={styles.goremIpsumDolor}>
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
        </View>
        <View style={styles.amountParent}>
          <Text style={styles.date}>Amount</Text>
          <Text style={[styles.text2, styles.textTypo]}>$500</Text>
        </View>
        <View style={[styles.dateParent, styles.parentSpaceBlock]}>
          <View style={[styles.rejectWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.reject, styles.rejectTypo]}>Reject</Text>
          </View>
          <TouchableOpacity
            style={[styles.approveWrapper, styles.wrapperFlexBox]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.approve, styles.rejectTypo]}>Approve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginTop: 23,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_lgi,
    justifyContent: "center",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  rejectTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  refundRequestDetails: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    alignSelf: "stretch",
  },
  date: {
    flex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  text: {
    marginLeft: 228,
    color: Color.colorGray_100,
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  dateParent: {
    flexDirection: "row",
    marginTop: 23,
  },
  text1: {
    marginLeft: 210,
    color: Color.colorGray_100,
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  view: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue_200,
    marginLeft: 247,
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  goremIpsumDolor: {
    height: 60,
    marginTop: 15,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.size_xl,
    marginLeft: 231,
    color: Color.colorBlack,
    textAlign: "right",
  },
  amountParent: {
    alignItems: "center",
    marginTop: 23,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  reject: {
    color: Color.colorDimgray_200,
  },
  rejectWrapper: {
    backgroundColor: Color.colorGainsboro_400,
    paddingHorizontal: Padding.p_38xl,
  },
  approve: {
    color: Color.colorWhite,
  },
  approveWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    paddingHorizontal: Padding.p_37xl,
    marginLeft: 27,
  },
  refundRequestDetailsParent: {
    alignSelf: "stretch",
  },
  refundRequestPopup: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowRadius: 24.6,
    elevation: 24.6,
    shadowOpacity: 1,
    width: 390,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_14xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default RefundRequestPOPUP;
