import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RefundRequestPOPUP from "../components/RefundRequestPOPUP";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const RefundRequest = () => {
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
          <View style={[styles.backWrapper, styles.backWrapperFlexBox]}>
            <Pressable style={styles.backWrapperFlexBox}>
              <Pressable
                style={[styles.arrowLeftSm, styles.arrowLayout]}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrowleftsm.png")}
                />
              </Pressable>
              <Text style={styles.refundRequest1}>Refund Request</Text>
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.searchBarWrapper}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search Orders"
                placeholderTextColor="#b9b9b9"
              />
            </View>
            <View style={styles.refundRequestCardParent}>
              <TouchableOpacity
                style={[styles.refundRequestCard, styles.refundCardBorder]}
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                activeOpacity={0.2}
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                activeOpacity={0.2}
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                activeOpacity={0.2}
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.refundRequestCard1, styles.refundCardBorder]}
                activeOpacity={0.2}
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
                    style={[styles.approvedWrapper, styles.backWrapperFlexBox]}
                  >
                    <Text style={[styles.approved, styles.approvedTypo]}>
                      Approved
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.arrowRightSmIcon, styles.arrowLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrowrightsm1.png")}
                />
              </TouchableOpacity>
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard} />
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard1} />
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard2} />
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard3} />
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard4} />
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
          <RefundRequestPOPUP onClose={closeRefundRequestCard5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  refundRequestScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowLayout: {
    width: 24,
    height: 24,
  },
  refundCardBorder: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  approvedTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    height: 24,
  },
  refundRequest1: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorBlack,
  },
  backWrapper: {
    alignSelf: "stretch",
  },
  searchBar: {
    height: 39,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  refundRequestCardOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(97, 97, 97, 0.3)",
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
    alignSelf: "stretch",
  },
  kayraDecor3d: {
    marginTop: 9,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  approved: {
    color: Color.colorLimegreen,
    fontSize: FontSize.size_3xs,
  },
  approvedWrapper: {
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorHoneydew,
    width: 81,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginTop: 9,
    justifyContent: "center",
    height: 24,
  },
  orderId2021202236Parent: {
    flex: 1,
  },
  arrowRightSmIcon: {
    marginLeft: 61,
    height: 24,
  },
  refundRequestCard: {
    justifyContent: "center",
  },
  refundRequestCard1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(97, 97, 97, 0.3)",
  },
  refundRequestCard1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCard1: {
    marginTop: 16,
  },
  refundRequestCard2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(97, 97, 97, 0.3)",
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
    backgroundColor: "rgba(97, 97, 97, 0.3)",
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
    backgroundColor: "rgba(97, 97, 97, 0.3)",
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
    backgroundColor: "rgba(97, 97, 97, 0.3)",
  },
  refundRequestCard5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  refundRequestCardParent: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: 31,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  refundRequest: {
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
});

export default RefundRequest;
