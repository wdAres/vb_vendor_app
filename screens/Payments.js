import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Payments = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.payments, styles.paymentsLayout]}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.paymentsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <Pressable style={styles.arrowLeftSmParent}>
            <Pressable
              style={styles.iconLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={[styles.myPayments, styles.myPaymentsTypo]}>
              My payments
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={styles.walletAmountParent}>
              <Text style={[styles.walletAmount, styles.textTypo]}>
                Wallet Amount
              </Text>
              <Text style={[styles.text, styles.textTypo]}>₹5,345</Text>
            </View>
            <Pressable
              style={[styles.withdrawWrapper, styles.home04ParentFlexBox]}
              onPress={() => navigation.navigate("WithdrawMoney")}
            >
              <Text style={styles.withdraw}>Withdraw</Text>
            </Pressable>
          </View>
          <Image
            style={[styles.imageIcon, styles.imageIconSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/image2.png")}
          />
          <View style={styles.imageIconSpaceBlock}>
            <Text style={[styles.paymentHistory, styles.myPaymentsTypo]}>
              Payment History
            </Text>
            <View style={styles.paymentCardParent}>
              <Pressable
                style={styles.paymentCardBorder}
                onPress={() => navigation.navigate("PaymentDetails")}
              >
                <View style={styles.walletAmountParent}>
                  <Text style={styles.date2082023Typo}>Order Id 250215</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$200</Text>
                  <Text style={[styles.date2082023, styles.date2082023Typo]}>
                    Date 20/8/2023
                  </Text>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm4.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.paymentCard1, styles.paymentCardBorder]}
                onPress={() => navigation.navigate("PaymentDetails")}
              >
                <View style={styles.walletAmountParent}>
                  <Text style={styles.date2082023Typo}>Order Id 250215</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$200</Text>
                  <Text style={[styles.date2082023, styles.date2082023Typo]}>
                    Date 20/8/2023
                  </Text>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm4.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.paymentCard1, styles.paymentCardBorder]}
                onPress={() => navigation.navigate("PaymentDetails")}
              >
                <View style={styles.walletAmountParent}>
                  <Text style={styles.date2082023Typo}>Order Id 250215</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$200</Text>
                  <Text style={[styles.date2082023, styles.date2082023Typo]}>
                    Date 20/8/2023
                  </Text>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm4.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.paymentCard1, styles.paymentCardBorder]}
                onPress={() => navigation.navigate("PaymentDetails")}
              >
                <View style={styles.walletAmountParent}>
                  <Text style={styles.date2082023Typo}>Order Id 250215</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$200</Text>
                  <Text style={[styles.date2082023, styles.date2082023Typo]}>
                    Date 20/8/2023
                  </Text>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm4.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.paymentCard1, styles.paymentCardBorder]}
                onPress={() => navigation.navigate("PaymentDetails")}
              >
                <View style={styles.walletAmountParent}>
                  <Text style={styles.date2082023Typo}>Order Id 250215</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$200</Text>
                  <Text style={[styles.date2082023, styles.date2082023Typo]}>
                    Date 20/8/2023
                  </Text>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm4.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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
    paddingHorizontal:responsiveWidth(4.10),
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
    height: '100%',
    width: '100%',
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
    width: '100%',
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
    marginTop: responsiveHeight(1.24),
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
    marginTop: responsiveHeight(3.10),
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  payments: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Payments;
