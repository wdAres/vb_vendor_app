import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Support = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.support}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.supportScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.arrowLeftSmParent}>
          <Pressable
            style={styles.arrowIconLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowleftsm.png")}
            />
          </Pressable>
          <Text style={[styles.support1, styles.support1Typo]}>Support</Text>
        </View>
        <View style={styles.frameGroup}>
          <TextInput
            style={[styles.frameChild, styles.frameChildFlexBox]}
            placeholder="Search Help"
            placeholderTextColor="#d0d0d0"
          />
          <View style={styles.supportCardParent}>
            <TouchableOpacity
              style={[styles.supportCard, styles.supportCardBorder]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TicketDetails")}
            >
              <View style={styles.frameParent}>
                <Text style={styles.text}>#2147483647</Text>
                <Text style={styles.voremIpsumDolor}>
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={[styles.solvedWrapper, styles.solvedSpaceBlock]}>
                  <Text style={[styles.solved, styles.solvedTypo]}>Solved</Text>
                </View>
              </View>
              <Image
                style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm1.png")}
              />
            </TouchableOpacity>
            <Pressable
              style={[styles.supportCard1, styles.supportCard1SpaceBlock]}
              onPress={() => navigation.navigate("TicketDetails")}
            >
              <View style={styles.frameParent}>
                <Text style={styles.text}>#2147483647</Text>
                <Text style={styles.voremIpsumDolor}>
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={[styles.solvedContainer, styles.solvedSpaceBlock]}>
                  <Text style={[styles.solved1, styles.solvedTypo]}>
                    Pending
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm1.png")}
              />
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate("TicketDetails")}
              style={[styles.supportCard1, styles.supportCard1SpaceBlock]}
            >
              <View style={styles.frameParent}>
                <Text style={styles.text}>#2147483647</Text>
                <Text style={styles.voremIpsumDolor}>
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={[styles.solvedWrapper, styles.solvedSpaceBlock]}>
                  <Text style={[styles.solved, styles.solvedTypo]}>Solved</Text>
                </View>
              </View>
              <Image
                style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm1.png")}
              />
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate("TicketDetails")}
              style={[styles.supportCard1, styles.supportCard1SpaceBlock]}
            >
              <View style={styles.frameParent}>
                <Text style={styles.text}>#2147483647</Text>
                <Text style={styles.voremIpsumDolor}>
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={[styles.solvedWrapper, styles.solvedSpaceBlock]}>
                  <Text style={[styles.solved, styles.solvedTypo]}>Solved</Text>
                </View>
              </View>
              <Image
                style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm1.png")}
              />
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate("TicketDetails")}
              style={[styles.supportCard1, styles.supportCard1SpaceBlock]}
            >
              <View style={styles.frameParent}>
                <Text style={styles.text}>#2147483647</Text>
                <Text style={styles.voremIpsumDolor}>
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={[styles.solvedWrapper, styles.solvedSpaceBlock]}>
                  <Text style={[styles.solved, styles.solvedTypo]}>Solved</Text>
                </View>
              </View>
              <Image
                style={[styles.arrowRightSmIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.supportCardParent}>
            <Text style={[styles.allHelpTopic, styles.frameChildFlexBox]}>
              All help Topic
            </Text>
            <View style={styles.supportCard1SpaceBlock}>
              <TouchableOpacity
                style={styles.shippingDeliveryParent}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("TicketDetails")}
              >
                <Text
                  style={[styles.shippingDelivery, styles.solvedTypo]}
                >{`Shipping & Delivery`}</Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.managingYourAccountParent, styles.parentFlexBox]}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("TicketDetails")}
              >
                <Text style={[styles.shippingDelivery, styles.solvedTypo]}>
                  Managing Your Account
                </Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </TouchableOpacity>
              <Pressable
                style={[styles.managingYourAccountParent, styles.parentFlexBox]}
              >
                <Text
                  style={[styles.shippingDelivery, styles.solvedTypo]}
                >{`Payments & Pricing`}</Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </Pressable>
              <View
                style={[styles.managingYourAccountParent, styles.parentFlexBox]}
              >
                <Text style={[styles.shippingDelivery, styles.solvedTypo]}>
                  Ordering
                </Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </View>
              <Pressable
                style={[styles.managingYourAccountParent, styles.parentFlexBox]}
              >
                <Text style={[styles.shippingDelivery, styles.solvedTypo]}>
                  Returns, Refunds
                </Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </Pressable>
              <TouchableOpacity
                style={[styles.chatWithUsParent, styles.parentFlexBox]}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("TicketDetails")}
              >
                <Text style={[styles.shippingDelivery, styles.solvedTypo]}>
                  Chat with us
                </Text>
                <Image
                  style={styles.arrowIconLayout}
                  resizeMode="cover"
                  source={require("../assets/chevronright.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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
    marginTop: responsiveHeight(2.36),
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
    marginTop: responsiveHeight(3.35),
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
});

export default Support;
