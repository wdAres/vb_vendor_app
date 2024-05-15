import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useAuth } from "../context/AuthContext";

const VendorProfile = () => {
  const navigation = useNavigation();
  const {logout} = useAuth()

  return (
    <ScrollView
      style={styles.vendorProfile}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.vendorProfileScrollViewContent}
    >
      <View style={styles.vendorProfileParent}>
        <Text style={[styles.vendorProfile1, styles.modernTimberTypo1]}>
          Vendor Profile
        </Text>
        <View style={styles.frameParent}>
          <Pressable style={[styles.frameGroup, styles.groupBorder]}>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-262.png")}
              />
              <View style={styles.modernTimberParent}>
                <Text style={[styles.modernTimber, styles.modernTimberTypo]}>
                  Modern Timber
                </Text>
                <Text style={[styles.company, styles.companyTypo]}>
                  Company
                </Text>
                <Text style={[styles.company, styles.companyTypo]}>
                  520 Products
                </Text>
              </View>
            </View>
            <Image
              style={styles.arrowRightSmIcon}
              resizeMode="cover"
              source={require("../assets/arrowrightsm2.png")}
            />
          </Pressable>
          <ImageBackground
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image1.png")}
          />
          <ScrollView
            style={styles.frameContainer}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <Pressable style={styles.frameBorder}>
              <View>
                <Text style={[styles.totalOrders, styles.inTransitTypo]}>
                  Total Orders
                </Text>
                <Text style={[styles.text, styles.textTypo]}>878</Text>
              </View>
              <Image
                style={[styles.arrowRightSmIcon1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm3.png")}
              />
            </Pressable>
            <Pressable style={[styles.frameParent1, styles.frameBorder]}>
              <View>
                <Text style={[styles.totalOrders, styles.inTransitTypo]}>
                  Total Products
                </Text>
                <Text style={[styles.text, styles.textTypo]}>032</Text>
              </View>
              <Image
                style={[styles.arrowRightSmIcon2, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm3.png")}
              />
            </Pressable>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={[styles.arrowRightSmIcon3, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm3.png")}
              />
              <Text style={[styles.inTransit, styles.text2Position]}>
                In Transit
              </Text>
              <Text style={[styles.text2, styles.text2Position]}>70</Text>
            </View>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={[styles.arrowRightSmIcon3, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/arrowrightsm3.png")}
              />
              <Text style={[styles.inTransit, styles.text2Position]}>RTO</Text>
              <Text style={[styles.text2, styles.text2Position]}>02</Text>
            </View>
          </ScrollView>
          <View style={styles.frameParent}>
            <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
              My Shop and profile
            </Text>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ShopDetails")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Shop Settings
              </Text>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("SellerDetails")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Seller Details
              </Text>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Change Password
              </Text>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.frameParent}>
            <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
              Products
            </Text>
            <Pressable
              style={[styles.allProductsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("Products1")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Products
              </Text>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.allProductsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("AddProduct1")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Add Product
              </Text>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.allProductsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("BulkUpload")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Product Bulk Upload
              </Text>
              <Image
                style={[styles.icon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent}>
            <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
              Coupons
            </Text>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("Coupons")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                All Coupons
              </Text>
              <Image
                style={[styles.icon5, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <Pressable
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("Coupons1")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Add New Coupons
              </Text>
              <Image
                style={[styles.icon6, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent}>
            <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
              Payments
            </Text>
            <TouchableOpacity
              style={[styles.allProductsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Payments" })
              }
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                My Payments
              </Text>
              <Image
                style={[styles.icon7, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.allProductsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("RefundRequest1")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Refund Request
              </Text>
              <Image
                style={[styles.icon8, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <Pressable
              style={[styles.allProductsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("Withdraw")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Withdraw
              </Text>
              <Image
                style={[styles.icon9, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent}>
            <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
              Support
            </Text>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("Support")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                All Tickets
              </Text>
              <Image
                style={[styles.icon10, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("AddSupportTicket")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Add Support Ticket
              </Text>
              <Image
                style={[styles.icon10, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={logout}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("InputChecker")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Input Checker
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("InputChecker")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Input Checker
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("Attributes")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Attributes
              </Text>
            </TouchableOpacity>
            {/* <Pressable
              style={[styles.shopSettingsParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("TicketDetails")}
            >
              <Text style={[styles.shopSettings, styles.companyTypo]}>
                Add new ticket
              </Text>
              <Image
                style={[styles.icon11, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vendorProfileScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  modernTimberTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  modernTimberTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  companyTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  inTransitTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_21xl,
  },
  iconLayout1: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  frameBorder: {
    //
    // padding: Padding.p_sm,
    paddingVertical: responsiveHeight(1.74),
    paddingHorizontal: responsiveWidth(3.58),
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  groupChildLayout: {
    height: responsiveHeight(12.93),
    width: responsiveWidth(45.64),
  },
  text2Position: {
    left: 14,
    position: "absolute",
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  parentFlexBox: {
    paddingVertical: responsiveHeight(1.86),
    paddingHorizontal: responsiveWidth(3.07),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: responsiveHeight(0.87),
    width: responsiveWidth(2.05),
  },
  frameLayout: {
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
  vendorProfile1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 54,
    height: responsiveHeight(6.71),
  },
  modernTimber: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  company: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    marginTop: responsiveHeight(0.99),
  },
  modernTimberParent: {
    marginLeft: responsiveWidth(1.53),
  },
  ellipseParent: {
    flexDirection: "row",
    flex: 1,
  },
  arrowRightSmIcon: {
    width: responsiveWidth(4.1),
    height: responsiveHeight(1.99),
    marginLeft: responsiveWidth(41.53),
  },
  frameGroup: {
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.36),
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  imageIcon: {
    height: responsiveHeight(47.38),
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
  },
  totalOrders: {
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  text: {
    marginTop: responsiveHeight(1.49),
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  arrowRightSmIcon1: {
    marginLeft: responsiveWidth(12.3),
  },
  arrowRightSmIcon2: {
    marginLeft: responsiveWidth(8.71),
  },
  frameParent1: {
    marginLeft: responsiveWidth(4.35),
  },
  groupChild: {
    top: 0,
    left: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  arrowRightSmIcon3: {
    top: 40,
    left: 140,
    position: "absolute",
  },
  inTransit: {
    top: 14,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text2: {
    top: 42,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_21xl,
  },
  rectangleParent: {
    marginLeft: responsiveWidth(4.35),
  },
  frameContainer: {
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
    width: "100%",
  },
  myShopAnd: {
    color: Color.colorFirebrick_200,
    textAlign: "left",
    alignSelf: "stretch",
  },
  shopSettings: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    flex: 1,
  },
  icon: {
    marginLeft: responsiveWidth(57.69),
  },
  shopSettingsParent: {
    marginTop: responsiveHeight(1.74),
  },
  icon1: {
    marginLeft: responsiveWidth(59.23),
  },
  frameParent: {
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
  },
  icon2: {
    marginLeft: responsiveHeight(60.51),
  },
  allProductsParent: {
    marginTop: responsiveHeight(1.61),
  },
  icon3: {
    marginLeft: responsiveWidth(60),
  },
  icon4: {
    marginLeft: responsiveWidth(48.2),
  },
  icon5: {
    marginLeft: responsiveWidth(60.76),
  },
  icon6: {
    marginLeft: responsiveWidth(50.76),
  },
  icon7: {
    marginLeft: responsiveWidth(58.46),
  },
  icon8: {
    marginLeft: responsiveWidth(54.87),
  },
  icon9: {
    marginLeft: responsiveWidth(64.1),
  },
  icon10: {
    marginLeft: responsiveWidth(63.07),
  },
  icon11: {
    marginLeft: responsiveWidth(56.41),
  },
  vendorProfileParent: {
    alignSelf: "stretch",
  },
  vendorProfile: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default VendorProfile;
