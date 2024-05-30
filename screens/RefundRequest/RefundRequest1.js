import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import Header from "../../components/Header";
import { Color } from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SearchBar from "../../components/SearchBar";
import ToggleBtns from "../../components/ToggleBtns";
import OrderCard from "../../components/OrderCard";
import useHttp2 from "../../hooks/useHttp2";
import RefundCard from "../../components/RefundCard";
import RefundRequest2 from "../../components/RefundRequest2";

export default function RefundRequest1({ navigation }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const [query, setQuery] = useState("");
  const [nextPageExist, setNextPageExist] = useState(false);
  const [delivery_status, setDeliveryStatus] = useState("");

  const [currentOrder, setCurrentOrder] = useState({});
  const [modal, setModal] = useState(false);

  const getData = useCallback(
    (pageNumber, searchQuery = "", deliveryStatus = "") => {
      sendRequest(
        {
          url: `refund-request?limit=10&page=${pageNumber}&search=${searchQuery}&status=${deliveryStatus}`,
        },
        (result) => {
          setData((prevData) =>
            pageNumber === 1
              ? result.data.docs
              : [...prevData, ...result.data.docs]
          );
          setNextPageExist(result.data.hasNextPage);
        }
      );
    },
    [sendRequest]
  );

  // Fetch data when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      getData(page, query, delivery_status);
    }, [page, query, delivery_status, sendRequest])
  );

  const handleEndReached = () => {
    if (nextPageExist) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (text) => {
    setQuery(text);
    setPage(1);
  };

  const handleClick = (data) => {
    setCurrentOrder(data);
    setModal(true);
  };

  const renderItem = ({ item }) => {
    return <RefundCard callerFunc={handleClick} data={item} />;
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  const handleDeliveryStatus = (status) => {
    setDeliveryStatus(status);
    setPage(1);
  };

  const pressableData = [
    {
      label: "All",
      value: "",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Approved",
      value: "approved",
    },
    {
      label: "Rejected",
      value: "rejected",
    },
  ];

  return (
    <>
      <Header label={"Refund Request"} />
      <View style={styles.screen}>
        <View style={styles.block1}>
          {/* <SearchBar
            placeholder={"search by order id"}
            onSearch={handleSearch}
          /> */}
          <ToggleBtns onPress={handleDeliveryStatus} data={pressableData} />
        </View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id.toString()}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{ height: responsiveHeight(2.36) }} />
            )}
          />
        ) : (
          <Text>No Data Found!</Text>
        )}
      </View>

      <Modal
        style={styles.modal}
        animationType="slide"
        transparent
        visible={modal}
      >
        <View style={styles.refundRequestCardOverlay}>
          <Pressable
            style={styles.refundRequestCardBg}
            onPress={() => setModal(false)}
          />
          <RefundRequest2
            parentFunc={getData}
            data={currentOrder}
            onClose={() => setModal(false)}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
  },
  block1: {
    gap: responsiveHeight(2.36),
    marginBottom: responsiveHeight(2.36),
    flexDirection: "column",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    height:'auto'
  },
  refundRequestCardBg:{
    backgroundColor:'red'
  }
});

// 355 - 143 lines
