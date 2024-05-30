import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useHttp2 from "../hooks/useHttp2";
import moment from "moment";
import RejectReason from "./RejectReason";
import { useNavigation } from "@react-navigation/core";

const RefundRequest2 = ({ onClose, data, parentFunc }) => {
  const { sendRequest, isLoading } = useHttp2();
  const { _id, createdAt, amount, status, message, orderId, productId } = data;
  const [frameButtonVisible, setFrameButtonVisible] = useState(false);
  const navigation = useNavigation();

  const openFrameButton = useCallback(() => {
    setFrameButtonVisible(true);
  }, []);

  const closeFrameButton = useCallback(() => {
    setFrameButtonVisible(false);
    onClose();
  }, []);

  const acceptHandler = () => {
    sendRequest(
      {
        url: `refund-request/${_id}/accept`,
        method: "PUT",
      },
      (result) => {
        parentFunc();
        onClose();
      },
      true
    );
  };
  const rejectHandler = () => {
    openFrameButton();
  };

  return (
    <>
      <View style={styles.refundRequest}>
        <View style={styles.refundRequestDetailsParent}>
          <Text style={[styles.refundRequestDetails, styles.reasonTypo]}>
            Refund Request Details
          </Text>
          <View style={[styles.dateParent, styles.parentSpaceBlock]}>
            <Text style={styles.date}>Date</Text>
            <Text style={[styles.text, styles.textTypo]}>
              {moment(createdAt).format("ll")}
            </Text>
          </View>
          <View style={[styles.dateParent, styles.parentSpaceBlock]}>
            <Text style={styles.date}>Order ID</Text>
            <Text style={[styles.text1, styles.textTypo]}>
              {orderId.orderId}
            </Text>
          </View>
          <View style={[styles.dateParent, styles.parentSpaceBlock]}>
            <Text style={styles.date}>Product</Text>
            <Pressable
              onPress={() =>
                navigation.navigate("ViewProduct", { id: productId._id })
              }
            >
              <Text style={[styles.view, styles.textTypo]}>View</Text>
            </Pressable>
          </View>
          <View style={styles.parentSpaceBlock}>
            <Text style={styles.reasonTypo}>Reason</Text>
            <ScrollView
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              style={styles.goremIpsumDolor}
            >
              <Text>{message}</Text>
            </ScrollView>
          </View>
          <View style={styles.amountParent}>
            <Text style={styles.date}>Amount</Text>
            <Text style={[styles.text2, styles.textTypo]}>${amount}</Text>
          </View>
          {status === "pending" && (
            <View style={[styles.dateParent, styles.parentSpaceBlock]}>
              <TouchableOpacity
                style={[styles.rejectWrapper, styles.wrapperFlexBox]}
                activeOpacity={0.2}
                onPress={rejectHandler}
              >
                <Text style={[styles.reject, styles.rejectTypo]}>Reject</Text>
              </TouchableOpacity>
              <Pressable
                onPress={acceptHandler}
                style={[styles.approveWrapper, styles.wrapperFlexBox]}
              >
                <Text style={[styles.approve, styles.rejectTypo]}>Approve</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>

      <Modal animationType="slide" transparent visible={frameButtonVisible}>
        <View style={styles.frameButtonOverlay}>
          <Pressable style={styles.frameButtonBg} onPress={closeFrameButton} />
          <RejectReason
            parentFunc={parentFunc}
            id={_id}
            onClose={closeFrameButton}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  reasonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(2.86),
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperFlexBox: {
    paddingVertical: responsiveHeight(2.36),
    justifyContent: "center",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  rejectTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  refundRequestDetails: {
    alignSelf: "stretch",
  },
  date: {
    flex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  text: {
    // marginLeft: responsiveWidth(58.46),
    color: Color.colorGray_100,
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  dateParent: {
    flexDirection: "row",
    marginTop: responsiveHeight(2.86),
  },
  text1: {
    marginLeft: responsiveWidth(53.84),
    color: Color.colorGray_100,
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  view: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue_200,
    // marginLeft: responsiveWidth(63.33),
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  goremIpsumDolor: {
    height: responsiveHeight(7.46),
    marginTop: responsiveHeight(1.86),
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.size_xl,
    // marginLeft: responsiveWidth(59.23),
    color: Color.colorBlack,
    textAlign: "right",
  },
  amountParent: {
    alignItems: "center",
    marginTop: responsiveHeight(2.86),
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  reject: {
    color: Color.colorDimgray_200,
  },
  rejectWrapper: {
    backgroundColor: Color.colorGainsboro_400,
    // paddingHorizontal: responsiveWidth(14.61),
  },
  approve: {
    color: Color.colorWhite,
  },
  approveWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    // paddingHorizontal: responsiveWidth(14.35),
    marginLeft: responsiveWidth(6.92),
  },
  refundRequestDetailsParent: {
    alignSelf: "stretch",
  },
  refundRequest: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: responsiveHeight(-0.87),
    },
    shadowRadius: 24.6,
    elevation: 24.6,
    shadowOpacity: 1,
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(6.41),
    paddingVertical: responsiveHeight(4.1),
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
});

export default RefundRequest2;
