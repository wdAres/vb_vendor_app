import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RefundRequest2 from "../components/RefundRequest2";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const RefundRequest1 = () => {
  const navigation = useNavigation();
  const [refundRequestCardVisible, setRefundRequestCardVisible] =
    useState(false);
  const [refundRequestCard1Visible, setRefundRequestCard1Visible] =
    useState(false);
  const [refundRequestCard2Visible, setRefundRequestCard2Visible] =
    useState(false);
  const [refundRequestCard3Visible, setRefundRequestCard3Visible] =
    useState(false);
  const [refundRequestCard4Visible, setRefundRequestCard4Visible] =
    useState(false);
  const [refundRequestCard5Visible, setRefundRequestCard5Visible] =
    useState(false);

  const openRefundRequestCard = useCallback(() => {
    setRefundRequestCardVisible(true);
  }, []);

  const closeRefundRequestCard = useCallback(() => {
    setRefundRequestCardVisible(false);
  }, []);

  const openRefundRequestCard1 = useCallback(() => {
    setRefundRequestCard1Visible(true);
  }, []);

  const closeRefundRequestCard1 = useCallback(() => {
    setRefundRequestCard1Visible(false);
  }, []);

  const openRefundRequestCard2 = useCallback(() => {
    setRefundRequestCard2Visible(true);
  }, []);

  const closeRefundRequestCard2 = useCallback(() => {
    setRefundRequestCard2Visible(false);
  }, []);

  const openRefundRequestCard3 = useCallback(() => {
    setRefundRequestCard3Visible(true);
  }, []);

  const closeRefundRequestCard3 = useCallback(() => {
    setRefundRequestCard3Visible(false);
  }, []);

  const openRefundRequestCard4 = useCallback(() => {
    setRefundRequestCard4Visible(true);
  }, []);

  const closeRefundRequestCard4 = useCallback(() => {
    setRefundRequestCard4Visible(false);
  }, []);

  const openRefundRequestCard5 = useCallback(() => {
    setRefundRequestCard5Visible(true);
  }, []);

  const closeRefundRequestCard5 = useCallback(() => {
    setRefundRequestCard5Visible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.refundRequest}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.refundRequestScrollViewContent}
      >
        <View style={styles.frameParent}>
          <View style={styles.arrowLeftSmParent}>
            <Pressable
              style={[styles.arrowLeftSm, styles.iconLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleftsm.png")}
              />
            </Pressable>
            <Text style={styles.refundRequest1}>Refund Request</Text>
          </View>
          <View style={styles.frameGroup}>
            <TextInput
              style={styles.frameChild}
              placeholder="Search Orders"
              placeholderTextColor="#b9b9b9"
            />
            <View style={styles.refundRequestCardParent}>
              <TouchableOpacity
                style={styles.refundCardBorder}
                activeOpacity={0.2}
                onPress={openRefundRequestCard}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <Pressable
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                onPress={openRefundRequestCard1}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                onPress={openRefundRequestCard2}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                onPress={openRefundRequestCard3}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </Pressable>
              <TouchableOpacity
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                activeOpacity={0.2}
                onPress={openRefundRequestCard4}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <Pressable
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                onPress={openRefundRequestCard5}
              >
                <View style={styles.orderId2021202236Parent}>
                  <Text style={[styles.orderId2021202236, styles.approvedTypo]}>
                    Order ID 2021202236
                  </Text>
                  <Text style={[styles.kayraDecor3d, styles.approvedTypo]}>
                    Kayra Decor 3D PVC Wall Panels Wave Design
                  </Text>
                  <View
                    style={[styles.approvedWrapper, styles.home04ParentFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCardVisible}
      >
        <View style={styles.refundRequestCardOverlay}>
          <Pressable
            style={styles.refundRequestCardBg}
            onPress={closeRefundRequestCard}
          />
          <RefundRequest2 onClose={closeRefundRequestCard} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCard1Visible}
      >
        <View style={styles.refundRequestCard1Overlay}>
          <Pressable
            style={styles.refundRequestCard1Bg}
            onPress={closeRefundRequestCard1}
          />
          <RefundRequest2 onClose={closeRefundRequestCard1} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCard2Visible}
      >
        <View style={styles.refundRequestCard2Overlay}>
          <Pressable
            style={styles.refundRequestCard2Bg}
            onPress={closeRefundRequestCard2}
          />
          <RefundRequest2 onClose={closeRefundRequestCard2} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCard3Visible}
      >
        <View style={styles.refundRequestCard3Overlay}>
          <Pressable
            style={styles.refundRequestCard3Bg}
            onPress={closeRefundRequestCard3}
          />
          <RefundRequest2 onClose={closeRefundRequestCard3} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCard4Visible}
      >
        <View style={styles.refundRequestCard4Overlay}>
          <Pressable
            style={styles.refundRequestCard4Bg}
            onPress={closeRefundRequestCard4}
          />
          <RefundRequest2 onClose={closeRefundRequestCard4} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCard5Visible}
      >
        <View style={styles.refundRequestCard5Overlay}>
          <Pressable
            style={styles.refundRequestCard5Bg}
            onPress={closeRefundRequestCard5}
          />
          <RefundRequest2 onClose={closeRefundRequestCard5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  refundRequestScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLayout: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  approvedTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  home04ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  refundCardBorder: {
    paddingVertical: responsiveHeight(1.61),
    paddingHorizontal: responsiveWidth(4.10),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
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
  arrowLeftSm: {
    height: responsiveHeight(2.98),
  },
  refundRequest1: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    height: responsiveHeight(4.85),
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  refundRequestCardOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCardBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  orderId2021202236: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  kayraDecor3d: {
    width: responsiveWidth(59.23),
    marginTop: responsiveHeight(1.11),
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  approved: {
    color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  approvedWrapper: {
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorHoneydew,
    width: responsiveWidth(20.76),
    paddingHorizontal:responsiveWidth(2.56),
    paddingVertical: responsiveHeight(0.49),
    marginTop: responsiveHeight(1.11),
    height: responsiveHeight(2.98),
    flexDirection: "row",
  },
  orderId2021202236Parent: {
    flex: 1,
  },
  arrowRightSmIcon: {
    marginLeft: responsiveWidth(15.64),
    height: responsiveHeight(2.98),
  },
  refundRequestCard1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCard1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCard1: {
    marginTop: responsiveHeight(1.99),
  },
  refundRequestCard2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCard2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCard3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCard3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCard4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCard4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCard5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  refundRequestCard5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCardParent: {
    marginTop: responsiveHeight(1.86),
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: responsiveHeight(4.97),
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  refundRequest: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default RefundRequest1;
