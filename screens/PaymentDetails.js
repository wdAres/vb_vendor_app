import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const PaymentDetails = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.paymentDetails}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.paymentDetailsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={styles.arrowLeftSmParent}>
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
            <Text style={[styles.paymentDetails1, styles.offTypo]}>
              Payment Details
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.amountParent}>
            <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.offTypo]}>$200</Text>
              <Image
                style={styles.okIcon}
                resizeMode="cover"
                source={require("../assets/ok.png")}
              />
            </View>
          </View>
          <View style={styles.paymentParent}>
            <Text style={[styles.amount, styles.amountTypo]}>Payment</Text>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={styles.transactionIdParent}>
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Transaction ID
                </Text>
                <Text style={[styles.xyz, styles.textTypo]}>XYZ</Text>
              </View>
              <View style={[styles.refIdParent, styles.parentSpaceBlock]}>
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Ref ID
                </Text>
                <Text style={[styles.text1, styles.textTypo]}>1</Text>
              </View>
              <View
                style={[styles.againstOrderIdParent, styles.parentSpaceBlock]}
              >
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Against Order ID
                </Text>
                <Text style={[styles.text2, styles.textTypo]}>4</Text>
              </View>
              <View style={[styles.refIdParent, styles.parentSpaceBlock]}>
                <Text style={[styles.transactionId, styles.textTypo]}>SKU</Text>
                <Text style={[styles.text3, styles.textTypo]}>1</Text>
              </View>
              <View style={[styles.refIdParent, styles.parentSpaceBlock]}>
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Date of Payment
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>1</Text>
              </View>
              <View
                style={[styles.adminsCommissionParent, styles.parentSpaceBlock]}
              >
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Admin’s Commission
                </Text>
                <Text style={[styles.text5, styles.textTypo]}>5%</Text>
              </View>
              <View
                style={[styles.paymentMethodParent, styles.parentSpaceBlock]}
              >
                <Text style={[styles.transactionId, styles.textTypo]}>
                  Payment Method
                </Text>
                <Text style={[styles.upi, styles.textTypo]}>UPI</Text>
              </View>
            </View>
          </View>
          <View style={styles.paymentParent}>
            <Text style={[styles.productDetails, styles.amountTypo]}>
              Product details
            </Text>
            <View style={[styles.frameView, styles.frameBorder]}>
              <View style={styles.imagePlaceHolderParent}>
                <ImageBackground
                  style={styles.imagePlaceHolder}
                  resizeMode="cover"
                  source={require("../assets/imageplaceholder1.png")}
                />
                <View style={styles.pearlBeadingTexturParent}>
                  <Text style={[styles.pearlBeadingTextur, styles.offTypo]}>
                    Pearl Beading Textured Faux Fur Furnitures
                  </Text>
                  <View style={styles.starsParent}>
                    <Image
                      style={styles.starsIcon}
                      resizeMode="cover"
                      source={require("../assets/stars1.png")}
                    />
                    <Text style={[styles.reviews, styles.textTypo]}>
                      480+ Reviews
                    </Text>
                  </View>
                  <View style={[styles.starsParent,styles.setting]}>
                    <View style={[styles.offWrapper, styles.text6Layout]}>
                      <Text style={[styles.off, styles.offTypo]}>2 % off</Text>
                    </View>
                    <Text style={[styles.text6, styles.textSpaceBlock]}>
                      $1399
                    </Text>
                    <Text style={[styles.text7, styles.textSpaceBlock]}>
                      $1299
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paymentParent}>
            <Text style={[styles.productDetails, styles.amountTypo]}>
              Buyer info
            </Text>
            <View style={[styles.frameParent2, styles.frameBorder]}>
              <View style={styles.imagePlaceHolderParent}>
                <Text style={[styles.buyerName, styles.textTypo]}>
                  Buyer Name
                </Text>
                <Text style={[styles.nishant, styles.textTypo]}>Nishant</Text>
              </View>
              <View style={[styles.phoneParent, styles.parentSpaceBlock]}>
                <Text
                  style={[styles.buyerName, styles.textTypo]}
                >{`Phone `}</Text>
                <Text style={[styles.text8, styles.textTypo]}>7503063585</Text>
              </View>
              <View style={[styles.phoneParent, styles.parentSpaceBlock]}>
                <Text style={[styles.buyerName, styles.textTypo]}>
                  Email Id
                </Text>
                <Text style={[styles.nishu12364gmailcom, styles.textTypo]}>
                  Nishu12364@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paymentDetailsScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  amountTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingVertical: responsiveHeight(2.36),
    paddingHorizontal: responsiveWidth(4.35),
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(1.24),
    flexDirection: "row",
  },
  frameBorder: {
    marginTop: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text6Layout: {
    height:responsiveHeight(2.36),
    alignItems: "center",
  },
  textSpaceBlock: {
    marginLeft: 5,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height:responsiveHeight(2.98),
  },
  paymentDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    color: Color.colorBlack,
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
  amount: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
  },
  okIcon: {
    width: responsiveWidth(8.97),
    height: responsiveHeight(4.35),
    marginLeft: responsiveWidth(1.79),
  },
  parent: {
    marginTop: responsiveHeight(2.36),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  amountParent: {
    alignSelf: "stretch",
  },
  transactionId: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  xyz: {
    marginLeft: responsiveWidth(17.94),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  transactionIdParent: {
    width: responsiveWidth(40.76),
    flexDirection: "row",
  },
  text1: {
    marginLeft: responsiveWidth(28.71),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  refIdParent: {
    width: responsiveWidth(37.43),
  },
  text2: {
    marginLeft: responsiveWidth(15.89),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  againstOrderIdParent: {
    width: responsiveWidth(37.94),
  },
  text3: {
    marginLeft: responsiveWidth(30.76),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text4: {
    marginLeft: responsiveWidth(15.64),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text5: {
    marginLeft: responsiveWidth(10.76),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  adminsCommissionParent: {
    width: responsiveWidth(40),
  },
  upi: {
    marginLeft: responsiveWidth(15.12),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  paymentMethodParent: {
    width: responsiveWidth(40.51),
  },
  frameContainer: {
    marginTop: responsiveHeight(2.73),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_mid,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  paymentParent: {
    marginTop: responsiveHeight(3.23),
    alignSelf: "stretch",
  },
  productDetails: {
    height: responsiveHeight(1.74),
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imagePlaceHolder: {
    borderRadius: Border.br_5xs,
    width: responsiveWidth(20.51),
    height: responsiveHeight(10.57),
  },
  pearlBeadingTextur: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
  },
  starsIcon: {
    width: responsiveWidth(18.20),
    height: responsiveHeight(1.86),
  },
  reviews: {
    color: Color.black,
    marginLeft: responsiveWidth(2.30),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    flex: 1,
  },
  starsParent: {
    marginTop:responsiveHeight(1.11),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  setting:{
    alignItems:'center'
  },
  off: {
    fontSize: FontSize.size_5xs,
    color: Color.colorMediumseagreen_100,
  },
  offWrapper: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorPaleturquoise,
    width: responsiveWidth(11.53),
    justifyContent: "center",
    // paddingHorizontal: responsiveWidth(2.56),
    // paddingVertical:responsiveHeight(1.24),
    flexDirection: "row",
  },
  text6: {
    textDecoration: "line-through",
    fontFamily: FontFamily.interRegular,
    width: responsiveWidth(10.25),
    height: responsiveHeight(2.36),
    alignItems: "center",
    fontSize: FontSize.size_smi,
    display: "flex",
    color: Color.colorGray_200,
  },
  text7: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  pearlBeadingTexturParent: {
    marginLeft: responsiveWidth(2.56),
    flex: 1,
  },
  imagePlaceHolderParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical:responsiveHeight(1.49),
  },
  buyerName: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
  },
  nishant: {
    marginLeft: responsiveWidth(20.51),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text8: {
    marginLeft: responsiveWidth(28.20),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  phoneParent: {
    alignSelf: "stretch",
  },
  nishu12364gmailcom: {
    marginLeft: responsiveWidth(26.41),
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameParent2: {
    paddingVertical:responsiveHeight(2.36),
    paddingHorizontal: responsiveWidth(4.35),
  },
  frameGroup: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  paymentDetails: {
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
});

export default PaymentDetails;
