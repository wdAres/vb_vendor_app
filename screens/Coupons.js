import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CouponCard from "../components/CouponCard";

const Coupons = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.coupons}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.shopSettingScrollViewContent}
    >
      {/* <View style={styles.coupons}> */}
      <View>
        <View style={styles.frameGroup}>
          <Pressable style={styles.frameGroup}>
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
            <Text style={styles.coupons1}>Coupons</Text>
          </Pressable>
          <TouchableOpacity
            style={styles.addSquare03}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Coupons1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/add-product.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.frameContainer}>
          <TextInput
            style={styles.frameChild}
            placeholder="Search Coupons"
            placeholderTextColor="#b9b9b9"
          />
          <View style={styles.frameView}>
            <CouponCard style={styles.couponCard} />
            <CouponCard style={styles.couponCard} />
            <CouponCard style={styles.couponCard} />
            <CouponCard style={styles.couponCard} />
            <CouponCard style={styles.couponCard} />
          </View>
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  vb30Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  daysLeftTypo: {
    marginTop: responsiveHeight(1.36),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  bathWareTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  frameParentBorder: {
    paddingVertical: responsiveHeight(1.36),
    paddingHorizontal: responsiveWidth(2.56),
    justifyContent: "center",
    width: responsiveWidth(89.74),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveWidth(6.15),
    height: responsiveHeight(2.98),
  },
  coupons1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  addSquare03: {
    width: responsiveWidth(5.12),
    height: responsiveHeight(2.48),
    marginLeft: responsiveWidth(55.64),
  },
  frameChild: {
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    width: responsiveWidth(89.74),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  vb30: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  dateTill2082023: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  daysLeft: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  bathWare: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  bathWareWrapper: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: responsiveWidth(21.02),
    height: responsiveHeight(3.1),
    //
    paddingVertical: responsiveHeight(1.24),
    paddingHorizontal: responsiveWidth(2.56),

    marginLeft: responsiveWidth(37.69),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent2: {
    marginTop: responsiveHeight(1.86),
  },
  frameView: {
    marginTop: responsiveHeight(3.35),
  },
  frameContainer: {
    marginTop: responsiveHeight(1.74),
  },
  coupons: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: responsiveWidth(100),
  },
  couponCard:{
    marginBottom:responsiveHeight(1.99)
  }
});

export default Coupons;
