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
import RefundRequest2 from "../../components/RefundRequest2";
import {
  FontFamily,
  Padding,
  Color,
  Border,
  FontSize,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import RefundCard from "../../components/RefundCard";
import Header from "../../components/Header";
import useHttp2 from "../../hooks/useHttp2";

const RefundRequest1 = () => {
  const navigation = useNavigation();
  const { sendRequest, isLoading } = useHttp2();
  const [data, setData] = React.useState([]);
  const [pageDetails, setPageDetails] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [allDataLoaded, setAllDataLoaded] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [currentData, setCurrentData] = useState("");

  const getData = () => {
    sendRequest(
      {
        url: `refund-request?limit=${limit}&page=${page}${
          query ? `&query=${query}` : ""
        }`,
      },
      (result) => {
        if (result.data.docs.length === 0) {
          setAllDataLoaded(true);
        }
        if (query) {
          // Clear existing data when a new query is applied
          setData(result.data.docs);
        } else {
          setData((prevData) => {
            // Filter out duplicates and append new data to existing data
            const newData = result.data.docs.filter(
              (item) => !prevData.some((prevItem) => prevItem.id === item.id)
            );
            return [...prevData, ...newData];
          });
        }
      }
    );
  };

  React.useEffect(() => {
    getData();
  }, [page, limit, query]);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !allDataLoaded) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderPaymentCards = () => {
    if (isLoading && page === 1) {
      return <Text>Loading...</Text>;
    } else if (data.length === 0 && !isLoading) {
      return <Text>No data found</Text>;
    } else {
      return (
        <>
          {data.map((payment, index) => (
            <RefundCard
              callerFunc={openRefundRequestCard}
              a
              key={index}
              data={payment}
              style={styles.paymentCard}
            />
          ))}
          {isLoading && <Text>Loading more...</Text>}
        </>
      );
    }
  };

  const [refundRequestCardVisible, setRefundRequestCardVisible] =
    useState(false);

  const openRefundRequestCard = useCallback((data) => {
    setRefundRequestCardVisible(true);
    setCurrentData(data);
  }, []);

  const closeRefundView = () => {
    setRefundRequestCardVisible(false);
    setCurrentData({});
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header label={"Refund Request"} />

        <ScrollView
          style={styles.refundRequest}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.refundRequestScrollViewContent}
          onScroll={handleScroll}
          scrollEventThrottle={16} //
        >
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              {/* <TextInput
                style={styles.frameChild}
                placeholder="Search By Order ID"
                placeholderTextColor="#b9b9b9"
                value={query}
                onChangeText={(text) => setQuery(text)}
              /> */}
              <View style={styles.refundRequestCardParent}>
                {renderPaymentCards()}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={refundRequestCardVisible}
      >
        <View style={styles.refundRequestCardOverlay}>
          <Pressable
            style={styles.refundRequestCardBg}
            onPress={closeRefundView}
          />
          <RefundRequest2
            parentFunc={getData}
            data={currentData}
            onClose={closeRefundView}
          />
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
    paddingHorizontal: responsiveWidth(4.1),
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
    paddingHorizontal: responsiveWidth(2.56),
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
    // marginTop: responsiveHeight(1.86),
    gap: responsiveHeight(1.99),
    alignSelf: "stretch",
  },
  frameGroup: {
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
