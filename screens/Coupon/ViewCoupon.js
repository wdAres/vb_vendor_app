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
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useHttp2 from "../../hooks/useHttp2";
import moment from "moment";
import Header from "../../components/Header";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import { Colors } from "react-native-paper";

const ViewCoupon = () => {
  const navigation = useNavigation();

  const [data, setData] = React.useState({});
  const { sendRequest, isLoading } = useHttp2();
  const route = useRoute();
  const { id } = route.params;
  const [activeStatus, setActiveStatus] = React.useState(false);

  React.useEffect(() => {
    sendRequest(
      {
        url: `coupon/${id}/show`,
      },
      (result) => {
        setData(result.data);
        setActiveStatus(result.data.active);
      }
    );

    return () => {
      setData({});
    };
  }, [id]);

  const deleteCoupon = () => {
    sendRequest({ url: `coupon/${id}/remove`, method: "DELETE" }, (_) =>
      navigation.goBack()
    );
  };

  const toggleCoupon = () => {
    sendRequest(
      {
        url: `coupon/${id}/edit`,
        method: "PUT",
        body: { active: !activeStatus },
      },
      (_) => {
        navigation.goBack();
      }
    );
  };

  const myData1 = [
    { title: "Coupon Label", value: data?.couponLabel ?? "--" },
    { title: "Coupon Type", value: data?.couponType ?? "--" },
    { title: "Discount Type", value: data?.discountType ?? "--" },
    {
      title: `Discount Value (${
        data?.discountType === "percentage" ? "%" : "$"
      })`,
      value: data?.discountValue ?? "--",
    },
    { title: "Max Discount", value: "$" + data?.maxDiscount ?? "--" },
    { title: "Minimum Order Amount", value: "$" + data?.minimumAmount ?? "--" },
    { title: "Created At", value: moment(data?.createdAt).format("ll") },
    { title: "Expiry Date", value: moment(data?.expiryDate).format("ll") },
  ];
  return (
    <View style={styles.container}>
      <Header label={"Coupon Details"}>
        <Pressable disabled={isLoading} onPress={deleteCoupon}>
          <Text style={styles.del_coupon}>
            {isLoading ? "Loading" : "Delete"}
          </Text>
        </Pressable>
      </Header>
      <View style={styles.major_parent}>
        <ScrollView
          style={[styles.payments, styles.paymentsLayout]}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.paymentsScrollViewContent}
        >
          <View style={styles.frameParent2}>
            <View style={styles.amountParent}>
              <Text style={[styles.amount, styles.amountTypo]}>
                Coupon Code
              </Text>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.offTypo]}>
                  {data?.couponCode ?? "--"}
                </Text>
              </View>
            </View>
            <View style={styles.paymentParent}>
              <Text style={[styles.amount, styles.amountTypo]}>
                Other Details
              </Text>
              <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
                {myData1.map((element) => (
                  <View style={styles.transactionIdParent}>
                    <Text style={[styles.transactionId, styles.textTypo]}>
                      {element.title}
                    </Text>
                    <Text style={[styles.xyz, styles.textTypo]}>
                      {element.value}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        {activeStatus ? (
          <SecondaryBtn onPress={toggleCoupon} title={"Deactivate Coupon"} />
        ) : (
          <PrimaryBtn onPress={toggleCoupon} title={"Activate Coupon"} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  major_parent: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    maxWidth: responsiveWidth(100),
    backgroundColor: Color.colorWhite,
  },
  paymentsLayout: {
    overflow: "hidden",
  },
  paymentsScrollViewContent: {
    flexDirection: "column",
    // paddingHorizontal: responsiveWidth(5.12),
    // paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  payments: {
    flex: 1,
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
    gap: responsiveHeight(1.24),
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
    height: responsiveHeight(2.36),
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
    height: responsiveHeight(2.98),
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
    backgroundColor: Color.colorWhite,
    paddingVertical: responsiveHeight(2.36),
    paddingHorizontal: responsiveWidth(5.12),
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
    position: "sticky",
    top: 0,
    zIndex: 1000,
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
    // width: responsiveWidth(40.76),
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
    width: responsiveWidth(18.2),
    height: responsiveHeight(1.86),
  },
  reviews: {
    color: Color.black,
    marginLeft: responsiveWidth(2.3),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    flex: 1,
  },
  starsParent: {
    marginTop: responsiveHeight(1.11),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  setting: {
    alignItems: "center",
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
    paddingVertical: responsiveHeight(1.49),
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
    marginLeft: responsiveWidth(28.2),
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
    paddingVertical: responsiveHeight(2.36),
    paddingHorizontal: responsiveWidth(4.35),
  },
  frameGroup: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  frameParent2: {
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
  del_coupon: {
    fontWeight: "500",
    color: "#AE0000",
  },
});

export default ViewCoupon;
