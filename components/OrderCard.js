import React from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const OrderCard = React.memo(({ data }) => {
  const navigation = useNavigation();

  const { _id, orderStatus, date, paymentRefNumber, customerId } = data;

  const colored_bg = {
    cancelled: orderCardStyles.rejected_bg,
    return: orderCardStyles.rejected_bg,
    delivered: orderCardStyles.paid_bg,
    pending: orderCardStyles.pending_bg,
    processing: orderCardStyles.processing_bg,
    shipped: orderCardStyles.shipped_bg,
  };
  const colored_cl = {
    cancelled: orderCardStyles.rejected_cl,
    return: orderCardStyles.rejected_cl,
    delivered: orderCardStyles.paid_cl,
    pending: orderCardStyles.pending_cl,
    processing: orderCardStyles.processing_cl,
    shipped: orderCardStyles.shipped_cl,
  };

  return (
    <Pressable
      style={[orderCardStyles.orderCard, orderCardStyles.orderCardBorder]}
      onPress={() => navigation.navigate("OrderDetails", { id: _id })}
    >
      <View style={orderCardStyles.parent}>
        <Text style={[orderCardStyles.text, orderCardStyles.deliveredTypo]}>
          {paymentRefNumber}
        </Text>
        <Text style={orderCardStyles.kayraDecor3d}>{customerId?.name}</Text>
        <View
          style={[
            orderCardStyles.deliveredWrapper,
            orderCardStyles.deliveredSpaceBlock,
            colored_bg[orderStatus],
          ]}
        >
          <Text
            style={[
              orderCardStyles.delivered,
              orderCardStyles.deliveredTypo,
              colored_cl[orderStatus],
            ]}
          >
            {orderStatus}
          </Text>
        </View>
      </View>
      <Image
        style={orderCardStyles.home04IconLayout}
        resizeMode="cover"
        source={require("../assets/arrowrightsm1.png")}
      />
    </Pressable>
  );
});

const orderCardStyles = StyleSheet.create({
  orderCardBorder: {
    paddingVertical: responsiveHeight(1.61),
    paddingHorizontal: responsiveWidth(4.1),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  deliveredTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  deliveredSpaceBlock: {
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    width: responsiveWidth(20.76),
    borderRadius: Border.br_lgi,
    marginTop: responsiveHeight(1.11),
    justifyContent: "center",
    height: responsiveHeight(2.98),
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
  },
  kayraDecor3d: {
    width: responsiveWidth(59.23),
    marginTop: responsiveHeight(1.11),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  delivered: {
    // color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  deliveredWrapper: {
    // backgroundColor: Color.colorHoneydew,
  },
  parent: {
    flex: 1,
  },
  home04IconLayout: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  orderCard: {
    alignItems: "center",
  },
  rejected_bg: {
    backgroundColor: "#ffc0b5",
  },
  rejected_cl: {
    color: "red",
  },
  paid_bg: {
    backgroundColor: "#DCFFE5",
  },
  paid_cl: {
    color: "#00A72D",
  },
  pending_bg: {
    backgroundColor: "#FFF9EA",
  },
  pending_cl: {
    color: "#FBBC05",
  },
  processing_bg: {
    backgroundColor: "#e6f4ff",
  },
  processing_cl: {
    color: "#0958d9",
  },
  shipped_bg: {
    backgroundColor: "#fff7e6",
  },
  shipped_cl: {
    color: "#d46b08",
  },
});

export default OrderCard;
