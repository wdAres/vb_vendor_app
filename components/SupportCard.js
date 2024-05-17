import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/core";

export default function SupportCard({subject,status,ticketId,_id}) {

  const colored_bg = {
    'closed': styles.rejected_bg,
    'open': styles.paid_bg,
    'pending': styles.pending_bg,
  };
  const colored_cl = {
    'closed': styles.rejected_cl,
    'open': styles.paid_cl,
    pending: styles.pending_cl,
  };

  const navigation = useNavigation()

  return (
    <Pressable
      style={[styles.supportCard1, styles.supportCard1SpaceBlock]}
      onPress={() => navigation.navigate("TicketDetails",{id:_id})}
    >
      <View style={styles.frameParent}>
        <Text style={styles.text}>#{ticketId}</Text>
        <Text style={styles.voremIpsumDolor}>
          {subject}
        </Text>
        <View style={[styles.solvedContainer, styles.solvedSpaceBlock , colored_bg[status]]}>
          <Text style={[styles.solved1, styles.solvedTypo,colored_cl[status]]}>{status}</Text>
        </View>
      </View>
      <Image
        style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowrightsm1.png")}
      />
    </Pressable>
  );
}


const styles = StyleSheet.create({
  supportScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  support1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameChildFlexBox: {
    fontSize: FontSize.size_smi,
    alignItems: "center",
    alignSelf: "stretch",
  },
  supportCardBorder: {
    paddingHorizontal: responsiveWidth(4.10),
    borderRadius: Border.br_8xs,
    paddingVertical: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  solvedSpaceBlock: {
    paddingVertical: responsiveHeight(0.49),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    width: responsiveWidth(20.76),
    borderRadius: Border.br_lgi,
    marginTop: responsiveHeight(1.11),
    height: responsiveHeight(2.98),
    alignItems: "center",
    flexDirection: "row",
  },
  solvedTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  arrowIconLayout: {
    height: responsiveHeight(2.98),
    width: responsiveHeight(2.98),
  },
  supportCard1SpaceBlock: {
    // marginTop: responsiveHeight(2.36),
    alignSelf: "stretch",
  },
  parentFlexBox: {
    marginTop: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.58),
    justifyContent: "space-between",
    borderRadius: Border.br_3xs,
    paddingVertical: responsiveHeight(1.61),
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  support1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: Border.br_6xs,
    paddingHorizontal: responsiveWidth(2.82),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    paddingVertical:responsiveHeight(1.61),
    fontSize: FontSize.size_smi,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  voremIpsumDolor: {
    width: responsiveWidth(64.10),
    marginTop: responsiveHeight(1.11),
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  solved: {
    color: Color.colorLimegreen,
  },
  solvedWrapper: {
    backgroundColor: Color.colorHoneydew,
  },
  frameParent: {
    flex: 1,
  },
  arrowRightSmIcon: {
    marginLeft: responsiveWidth(10.76),
  },
  supportCard: {
    alignSelf: "stretch",
  },
  solved1: {
    color: Color.colorFirebrick_200,
  },
  solvedContainer: {
    backgroundColor: "#ffeaea",
  },
  supportCard1: {
    paddingHorizontal: responsiveWidth(4.10),
    borderRadius: Border.br_8xs,
    paddingVertical:responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  supportCardParent: {
    // marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  allHelpTopic: {
    display: "flex",
    height: responsiveHeight(1.74),
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  shippingDelivery: {
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  shippingDeliveryParent: {
    paddingHorizontal: responsiveWidth(3.58),
    justifyContent: "space-between",
    borderRadius: Border.br_3xs,
    paddingVertical: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  managingYourAccountParent: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: responsiveHeight(1.49),
    backgroundColor: Color.colorWhite,
  },
  chatWithUsParent: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  frameGroup: {
    marginTop: responsiveHeight(2.98),
    alignSelf: "stretch",
  },
  support: {
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
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