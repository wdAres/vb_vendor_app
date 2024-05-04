import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const TicketDetails = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.ticketDetails}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.ticketDetailsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <Pressable style={styles.arrowLeftSmParent}>
            <Pressable
              style={styles.arrowLeftSm}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={styles.ticketDetails1}>Ticket Details</Text>
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.ticketIdParent}>
              <Text style={styles.ticketId}>Ticket ID</Text>
              <Text style={[styles.text, styles.textTypo1]}>#25212563858</Text>
            </View>
            <View style={styles.dateParent}>
              <Text style={styles.ticketId}>Date</Text>
              <Text style={[styles.text1, styles.textTypo1]}>20/8/2023</Text>
            </View>
          </View>
          <SafeAreaView style={styles.frameGroup}>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.frameParent1}>
                <View
                  style={[
                    styles.goremIpsumDolorSitAmetCoWrapper,
                    styles.goremFlexBox,
                  ]}
                >
                  <Text style={styles.goremIpsumDolor}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>20/8/2023</Text>
              </View>
              <View style={[styles.frameParent2, styles.frameFlexBox]}>
                <View
                  style={[
                    styles.goremIpsumDolorSitAmetCoContainer,
                    styles.goremFlexBox,
                  ]}
                >
                  <Text style={styles.goremIpsumDolor}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </Text>
                </View>
                <Text style={[styles.text3, styles.textTypo]}>30/8/2023</Text>
              </View>
            </View>
            <View style={styles.frameParent3}>
              <TextInput
                style={[styles.frameChild, styles.frameChildLayout]}
                placeholder="Message ..."
                placeholderTextColor="#7d7d7d"
              />
              <Pressable
                style={[styles.send01Wrapper, styles.frameChildLayout]}
              >
                <Image
                  style={styles.send01Icon}
                  resizeMode="cover"
                  source={require("../assets/send01.png")}
                />
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ticketDetailsScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textTypo1: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  goremFlexBox: {
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textTypo: {
    height: responsiveHeight(1.86),
    color: Color.colorDarkgray_500,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    alignSelf: "stretch",
  },
  frameChildLayout: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  ticketDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
  ticketId: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
  },
  text: {
    marginLeft: responsiveWidth(5.89),
  },
  ticketIdParent: {
    width: responsiveWidth(42.30),
    flexDirection: "row",
  },
  text1: {
    marginLeft: responsiveWidth(12.05),
  },
  dateParent: {
    width: responsiveWidth(35.64),
    marginTop: responsiveHeight(3.60),
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  goremIpsumDolor: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    flex: 1,
  },
  goremIpsumDolorSitAmetCoWrapper: {
    backgroundColor: "#faf9f9",
    paddingHorizontal:responsiveWidth(2.30),
    paddingVertical:responsiveHeight(1.11)
  },
  text2: {
    marginTop: responsiveHeight(1.24),
    textAlign: "left",
  },
  frameParent1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  goremIpsumDolorSitAmetCoContainer: {
    paddingHorizontal: responsiveWidth(2.30),
    paddingVertical: responsiveHeight(1.49),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text3: {
    textAlign: "right",
    marginTop: responsiveHeight(0.87),
  },
  frameParent2: {
    marginTop: responsiveHeight(12.06),
  },
  frameView: {
    borderRadius: Border.br_3xs,
    height: responsiveHeight(74.50),
    paddingHorizontal: responsiveWidth(5.64),
    paddingVertical: responsiveHeight(3.73),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  frameChild: {
    paddingHorizontal: responsiveWidth(3.58),
    paddingVertical:responsiveHeight(1.74),
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_sm,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    flex: 1,
  },
  send01Icon: {
    width: responsiveWidth(8.46),
    height:responsiveHeight(4.22),
  },
  send01Wrapper: {
    backgroundColor: Color.colorFirebrick_200,
    width: responsiveWidth(12.56),
    alignItems:'center',
    // justifyContent:'center',
    paddingVertical:responsiveHeight(0.62),
    paddingHorizontal:responsiveWidth(1.28),
    marginLeft: responsiveWidth(3.07),
  },
  frameParent3: {
    marginTop: responsiveHeight(3.23),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: responsiveHeight(3.60),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  ticketDetails: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default TicketDetails;
