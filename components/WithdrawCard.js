import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

export default function WithdrawCard({ style, amount, date, status }) {
  const navigation = useNavigation();

  const dt = moment(date).format("ll");

  const colored_bg = {
    rejected: styles.rejected_bg,
    paid: styles.paid_bg,
    pending: styles.pending_bg,
  };
  const colored_cl = {
    rejected: styles.rejected_cl,
    paid: styles.paid_cl,
    pending: styles.pending_cl,
  };

  return (
    <View style={[styles.paymentCardBorder, style]}>
      <View style={styles.walletAmountParent}>
        <Text style={[styles.text1, styles.textTypo]}>${amount}</Text>
        <Text style={[styles.date2082023, styles.date2082023Typo]}>{dt}</Text>
      </View>
      <View style={[styles.status_container, colored_bg[status]]}>
        <Text style={[styles.status_text,colored_cl[status]]}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentsLayout: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: responsiveWidth(100),
  },
  myPaymentsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  home04ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageIconSpaceBlock: {
    marginTop: responsiveHeight(2.48),
    alignSelf: "stretch",
  },
  date2082023Typo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  iconLayout: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  paymentCardBorder: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(4.1),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  frameChildLayout: {
    height: responsiveHeight(0.62),
    width: responsiveWidth(13.58),
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
  },
  homeTypo: {
    marginTop: responsiveHeight(0.74),
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  myPayments: {
    marginLeft: responsiveHeight(1.24),
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  walletAmount: {
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_11xl,
    marginTop: responsiveHeight(1.11),
  },
  walletAmountParent: {
    flex: 1,
  },
  withdraw: {
    lineHeight: responsiveHeight(2.36),
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  withdrawWrapper: {
    borderRadius: Border.br_7xs,
    width: responsiveWidth(22.05),
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.11),
    marginLeft: responsiveWidth(42.05),
    backgroundColor: Color.colorFirebrick_200,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
  },
  imageIcon: {
    height: responsiveHeight(47.38),
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
  },
  paymentHistory: {
    display: "flex",
    height: responsiveHeight(1.74),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.size_lg,
  },
  date2082023: {
    marginTop: responsiveHeight(1.24),
  },
  arrowRightSmIcon: {
    marginLeft: responsiveWidth(51.02),
  },
  paymentCard1: {
    marginTop: responsiveHeight(1.86),
  },
  paymentCardParent: {
    marginTop: responsiveHeight(2.11),
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: responsiveHeight(3.1),
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  payments: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  status_container: {
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(1.28),
    paddingVertical: responsiveHeight(0.37),
    overflow:'hidden',
    minWidth:responsiveWidth(17.94),
    textAlign:'center',
    alignItems:'center'
  },
  status_text: {
    fontSize: responsiveHeight(1.49),
    fontWeight: "500",
    textTransform: "capitalize",
  },
  rejected_bg: {
    backgroundColor:'#ffc0b5'
  },
  rejected_cl: {
    color:'red'
  },
  paid_bg: {
    backgroundColor: "#DCFFE5",
  },
  paid_cl: {
    color:'#00A72D'
  },
  pending_bg: {
    backgroundColor: "#FFF9EA",
  },
  pending_cl: {
    color:'#FBBC05'
  },
});
