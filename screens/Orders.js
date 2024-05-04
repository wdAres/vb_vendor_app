import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Orders = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.ordersScrollViewContent}
      style={[styles.orders, styles.ordersSpaceBlock]}
    >
      <View style={styles.frameParent}>
        <View style={styles.arrowLeftSmParent}>
          <Pressable
            style={styles.home04IconLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowleftsm.png")}
            />
          </Pressable>
          <Text style={[styles.myOrders, styles.myOrdersTypo]}>My Orders</Text>
        </View>
        <View style={[styles.searchOrdersParent, styles.parentSpaceBlock]}>
          <Text style={styles.searchOrders}>Search Orders</Text>
          <Image
            style={styles.search01Icon}
            resizeMode="cover"
            source={require("../assets/search01.png")}
          />
        </View>
        <ScrollView
          style={[styles.frameGroup, styles.parentSpaceBlock]}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable style={styles.allOrderWrapper}>
            <Text style={[styles.allOrder, styles.myOrdersTypo]}>
              All Order
            </Text>
          </Pressable>
          <Pressable style={[styles.inTransitWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.inTransit, styles.myOrdersTypo]}>
              In transit
            </Text>
          </Pressable>
          <Pressable
            style={[styles.cancelOrdersWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.inTransit, styles.myOrdersTypo]}>
              Cancel orders
            </Text>
          </Pressable>
          <Pressable
            style={[styles.groupBuyOrdersWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.inTransit, styles.myOrdersTypo]}>
              Group Buy orders
            </Text>
          </Pressable>
          <Pressable
            style={[styles.groupBuyOrdersWrapper, styles.wrapperFlexBox]}
          >
            <Text style={[styles.inTransit, styles.myOrdersTypo]}>
              Instabuild orders
            </Text>
          </Pressable>
        </ScrollView>
        <View style={styles.parentSpaceBlock}>
          <Pressable
            style={[styles.orderCard, styles.orderCardBorder]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View style={styles.parent}>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View
                style={[styles.deliveredWrapper, styles.deliveredSpaceBlock]}
              >
                <Text style={[styles.delivered, styles.deliveredTypo]}>
                  Delivered
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.orderCard1, styles.orderCard1SpaceBlock]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View style={styles.parent}>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View
                style={[styles.deliveredContainer, styles.deliveredSpaceBlock]}
              >
                <Text style={[styles.delivered1, styles.deliveredTypo]}>
                  Shipped
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.orderCard1, styles.orderCard1SpaceBlock]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View style={[styles.deliveredFrame, styles.deliveredSpaceBlock]}>
                <Text style={[styles.delivered2, styles.deliveredTypo]}>
                  Cancelled
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.orderCard1, styles.orderCard1SpaceBlock]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View style={styles.parent}>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View
                style={[styles.deliveredWrapper, styles.deliveredSpaceBlock]}
              >
                <Text style={[styles.delivered, styles.deliveredTypo]}>
                  Delivered
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.orderCard1, styles.orderCard1SpaceBlock]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View style={styles.parent}>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View style={[styles.deliveredFrame, styles.deliveredSpaceBlock]}>
                <Text style={[styles.delivered2, styles.deliveredTypo]}>
                  Cancelled
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.orderCard1, styles.orderCard1SpaceBlock]}
            onPress={() => navigation.navigate("OrderDetails")}
          >
            <View style={styles.parent}>
              <Text style={[styles.text, styles.deliveredTypo]}>
                20220906-10155759
              </Text>
              <Text style={styles.kayraDecor3d}>
                Kayra Decor 3D PVC Wall Panels Wave Design
              </Text>
              <View
                style={[styles.deliveredWrapper, styles.deliveredSpaceBlock]}
              >
                <Text style={[styles.delivered, styles.deliveredTypo]}>
                  Delivered
                </Text>
              </View>
            </View>
            <Image
              style={styles.home04IconLayout}
              resizeMode="cover"
              source={require("../assets/arrowrightsm1.png")}
            />
          </Pressable>
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
  ordersSpaceBlock: {
    // paddingHorizontal:responsiveWidth(5.12),
    backgroundColor: Color.colorWhite,
  },
  myOrdersTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(2.48),
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    marginLeft: responsiveWidth(5.12),
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.24),
    justifyContent: "center",
    height: responsiveHeight(5.22),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
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
  orderCard1SpaceBlock: {
    marginTop: responsiveHeight(1.36),
    alignItems: "center",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  home04IconLayout: {
    height: responsiveHeight(2.98),
    width: responsiveWidth(6.15),
  },
  myOrders: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  searchOrders: {
    fontFamily: FontFamily.interRegular,
    color: "#b9b9b9",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  search01Icon: {
    width: responsiveWidth(4.61),
    height: responsiveHeight(2.23),
  },
  searchOrdersParent: {
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    marginTop: responsiveHeight(2.48),
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  allOrder: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  allOrderWrapper: {
    width: responsiveWidth(30.51),
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.24),
    height: responsiveHeight(5.22),
    justifyContent: "center",
    backgroundColor: Color.colorFirebrick_200,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  inTransit: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  inTransitWrapper: {
    width: responsiveWidth(37.17),
  },
  cancelOrdersWrapper: {
    width: responsiveWidth(38.46),
  },
  groupBuyOrdersWrapper: {
    width: responsiveWidth(32.56),
  },
  frameGroup: {
    width: "100%",
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
    color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  deliveredWrapper: {
    backgroundColor: Color.colorHoneydew,
  },
  parent: {
    flex: 1,
  },
  orderCard: {
    alignItems: "center",
  },
  delivered1: {
    color: "#f6c749",
    fontSize: FontSize.size_3xs,
  },
  deliveredContainer: {
    backgroundColor: "#fff4d8",
  },
  orderCard1: {
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
  delivered2: {
    color: Color.colorFirebrick_200,
    fontSize: FontSize.size_3xs,
  },
  deliveredFrame: {
    backgroundColor: Color.colorMistyrose_100,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  orders: {
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
  },
  ordersScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Orders;
