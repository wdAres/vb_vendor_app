import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View,
  Modal,
  TextInput,
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
import SupportCard from "../../components/SupportCard";

const Support = () => {
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
        url: `ticket?limit=${limit}&page=${page}${
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
            <SupportCard key={index} {...payment} />
          ))}
          {isLoading && <Text>Loading more...</Text>}
        </>
      );
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          label={"Support"}
          handlePress={() => navigation.navigate("AddSupportTicket")}
        />

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
              <TextInput
                style={styles.frameChild}
                placeholder="Search By Ticket ID"
                placeholderTextColor="#b9b9b9"
                value={query}
                onChangeText={(text) => setQuery(text)}
              />
              <View style={styles.refundRequestCardParent}>
                {renderPaymentCards()}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  refundRequestScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    gap: responsiveHeight(1.99),
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  refundRequestCardParent: {
    // marginTop: responsiveHeight(1.86),
    gap: responsiveHeight(1.99),
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
    gap: responsiveHeight(1.99),
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

export default Support;
