import React, { useCallback, useEffect, useState } from "react";
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
import Header from "../components/Header";
import PaymentGraph from "../components/PaymentGraph/PaymentGraph";
import useHttp2 from "../hooks/useHttp2";

const renderMenuItems = (menuItems) => {
  return menuItems.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.shopSettingsParent, styles.parentFlexBox]}
      activeOpacity={0.2}
      onPress={item.onPress}
    >
      <Text style={[styles.shopSettings, styles.companyTypo]}>
        {item.title}
      </Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
    </TouchableOpacity>
  ));
};

const VendorProfile = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const touchablesData = [
    {
      title: "Shop Settings",
      onPress: () => navigation.navigate("ShopDetails"),
    },
    {
      title: "Seller Details",
      onPress: () => navigation.navigate("SellerDetails"),
    },
    {
      title: "Change Password",
      onPress: () => navigation.navigate("ChangePassword"),
    },
    {
      title: "Products",
      onPress: () => navigation.navigate("Products1"),
    },
    {
      title: "Add Product",
      onPress: () => navigation.navigate("AddProduct1"),
    },
    {
      title: "Product Bulk Upload",
      onPress: () => navigation.navigate("BulkUpload"),
    },
    {
      title: "All Coupons",
      onPress: () => navigation.navigate("Coupons"),
    },
    {
      title: "Add Coupon",
      onPress: () => navigation.navigate("AddCoupon"),
    },
    {
      title: "My Payments",
      onPress: () =>
        navigation.navigate("BottomTabsRoot", { screen: "Payments" }),
    },
    {
      title: "Refund Request",
      onPress: () => navigation.navigate("RefundRequest1"),
    },
    {
      title: "Withdraw",
      onPress: () => navigation.navigate("Withdraw"),
    },
    {
      title: "All Tickets",
      onPress: () => navigation.navigate("Support"),
    },
    {
      title: "Add Ticket",
      onPress: () => navigation.navigate("AddSupportTicket"),
    },
    {
      title: "Logout",
      onPress: logout,
    },
    {
      title: "Attributes",
      onPress: () => navigation.navigate("Attributes"),
    },
    {
      title: "Notifications",
      onPress: () => navigation.navigate("Notifications"),
    },
  ];

  const myShopAndProfile = [
    touchablesData[0], // Shop Settings
    touchablesData[1], // Seller Details
    touchablesData[2], // Change Password
  ];
  const products = [
    touchablesData[3], // Products
    touchablesData[4], // Add Product
    touchablesData[5], // Product Bulk Upload
  ];
  const coupons = [
    touchablesData[6], // All Coupons
    touchablesData[7], // Add New Coupons
  ];

  const payments = [
    touchablesData[8], // My Payments
    touchablesData[9], // Refund Request
    touchablesData[10], // Withdraw
  ];

  const support = [
    touchablesData[11], // All Tickets
    touchablesData[12], // Add Support Ticket
  ];

  const otherLinks = [
    touchablesData[14], // Attributes
    touchablesData[15], // Attributes
  ];

  const logoutData = [
    touchablesData[13], // Logout
  ];
  const { sendRequest: tileRequest, isLoading: tileLoading } = useHttp2()
  const [tileStateData, setTileStateData] = useState(  {
      totalOrders: 0,
      todayOrders: 0,
      confirmedOrders: 0,
      shippedOrders: 0,
      recentRefundProducts: 0
    })

  const tileData = [
    {
      label: 'Total Orders',
      value: tileStateData.totalOrders,
    },
    {
      label: 'Today Orders',
      value: tileStateData.todayOrders,
    },
    {
      label: 'Confirmed Orders',
      value: tileStateData.confirmedOrders
    },
    {
      label: 'Shipped Orders',
      value: tileStateData.shippedOrders
    },
    {
      label: 'Recent Refunded Orders',
      value: tileStateData.recentRefundProducts
    },
  ]


  useEffect(() => {
    tileRequest({ url: 'order/tiles' }, result => {
      setTileStateData(result.data)
    })
  }, [])


  return (
    <>
      {/* <Text style={[styles.vendorProfile1, styles.modernTimberTypo1]}>
          Vendor Profile
        </Text> */}
      <Header label={"Vendor Profile"} hideArrow={true} />
      <ScrollView
        style={styles.vendorProfile}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.vendorProfileScrollViewContent}
      >
        <View style={styles.vendorProfileParent}>
          <View style={[styles.frameParent, styles.parent_gap]}>
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
            <PaymentGraph />
            <ScrollView
              style={styles.frameContainer}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollViewContent}
            >
              {tileData.map(element=>(
                 <Pressable onPress={()=>navigation.navigate('Orders')} style={styles.frameBorder}>
                 <View>
                   <Text style={[styles.totalOrders, styles.inTransitTypo]}>
                     {element.label}
                   </Text>
                   <Text style={[styles.text, styles.textTypo]}>{element.value}</Text>
                 </View>
                 <Image
                   style={[styles.arrowRightSmIcon1, styles.iconLayout1]}
                   resizeMode="cover"
                   source={require("../assets/arrowrightsm3.png")}
                 />
               </Pressable>
              ))}
            </ScrollView>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                My Shop and Profile
              </Text>
              {renderMenuItems(myShopAndProfile)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Products
              </Text>
              {renderMenuItems(products)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Coupons
              </Text>
              {renderMenuItems(coupons)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Payments
              </Text>
              {renderMenuItems(payments)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Other Links
              </Text>
              {renderMenuItems(otherLinks)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Support
              </Text>
              {renderMenuItems(support)}
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.myShopAnd, styles.inTransitTypo]}>
                Logout
              </Text>
              {renderMenuItems(logoutData)}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap:10,
    justifyContent: "space-between",
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
    justifyContent:'space-between',
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    minWidth:200,
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
    width: responsiveHeight(0.87),
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
    // marginLeft: responsiveWidth(57.69),
  },
  shopSettingsParent: {
    marginTop: responsiveHeight(1.74),
  },
  icon1: {
    marginLeft: responsiveWidth(59.23),
  },
  frameParent: {
    // marginTop: responsiveHeight(3.48),

    alignSelf: "stretch",
  },
  allProductsParent: {
    marginTop: responsiveHeight(1.61),
  },
  // icon2: {
  //   marginLeft: responsiveHeight(60.51),
  // },
  // icon3: {
  //   marginLeft: responsiveWidth(60),
  // },
  // icon4: {
  //   marginLeft: responsiveWidth(48.2),
  // },
  // icon5: {
  //   marginLeft: responsiveWidth(60.76),
  // },
  // icon6: {
  //   marginLeft: responsiveWidth(50.76),
  // },
  // icon7: {
  //   marginLeft: responsiveWidth(58.46),
  // },
  // icon8: {
  //   marginLeft: responsiveWidth(54.87),
  // },
  // icon9: {
  //   marginLeft: responsiveWidth(64.1),
  // },
  // icon10: {
  //   marginLeft: responsiveWidth(63.07),
  // },
  // icon11: {
  //   marginLeft: responsiveWidth(56.41),
  // },
  vendorProfileParent: {
    alignSelf: "stretch",
  },
  parent_gap: {
    gap: responsiveHeight(3.48),
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
