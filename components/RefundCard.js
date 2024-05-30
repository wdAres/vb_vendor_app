import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RefundCard = ({ callerFunc, data }) => {
  const { orderId, productId, createdAt, status } = data;

  const openRefundRequestCard = () => {
    callerFunc(data);
  };

  const colored_bg = {
    'rejected': styles.rejected_bg,
    'approved': styles.paid_bg,
    'pending': styles.pending_bg,
  };
  const colored_cl = {
    'rejected': styles.rejected_cl,
    'approved': styles.paid_cl,
    'pending': styles.pending_cl,
  };

  return (
    <TouchableOpacity
      style={styles.refundCardBorder}
      activeOpacity={0.2}
      onPress={openRefundRequestCard}
    >
      <View style={styles.orderId2021202236Parent}>
        <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
          Order ID {orderId.orderId}
        </Text>
        <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
          {productId.name}
        </Text>
        <View style={[styles.approvedWrapper, styles.home04ParentFlexBox , colored_bg[status]]}>
          <Text style={[styles.approved, styles.approvedTypo , colored_cl[status]]}>{status}</Text>
        </View>
      </View>
      <Image
        style={[styles.arrowRightSmIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowrightsm1.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  refundCardBorder: {
    paddingVertical: responsiveHeight(1.61),
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
  orderId2021202236Parent: {
    flex: 1,
  },
  orderId2021202236: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  kayraDecor3d: {
    width: responsiveWidth(59.23),
    marginTop: responsiveHeight(1.11),
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  approvedTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    textTransform: "capitalize",
  },
  approvedWrapper: {
    borderRadius: Border.br_lgi,
    // backgroundColor: Color.colorHoneydew,
    width: responsiveWidth(20.76),
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(0.49),
    marginTop: responsiveHeight(1.11),
    height: responsiveHeight(2.98),
    flexDirection: "row",
  },
  home04ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  approved: {
    // color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  arrowRightSmIcon: {
    marginLeft: responsiveWidth(15.64),
    height: responsiveHeight(2.98),
  },
  iconLayout: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
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

export default RefundCard;
