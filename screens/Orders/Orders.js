import {
  ActivityIndicator,
  FlatList,
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

export default function Orders({ navigation }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const [query, setQuery] = useState("");
  const [nextPageExist, setNextPageExist] = useState(false);
  const [delivery_status, setDeliveryStatus] = useState("");

  const getData = useCallback(
    (pageNumber, searchQuery = "", deliveryStatus = "") => {
      sendRequest(
        {
          url: `order?limit=10&page=${pageNumber}&search=${searchQuery}&orderStatus=${deliveryStatus}`,
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
    }, [page, query, delivery_status,sendRequest])
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

  const renderItem = ({ item }) => {
    return <OrderCard data={item} />;
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
      label: "Processing",
      value: "processing",
    },
    {
      label: "Shipped",
      value: "shipped",
    },
    {
      label: "Delivered",
      value: "delivered",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
  ];


  useFocusEffect(
    useCallback(() => {
      return () => {
        setData([]);
        setPage(1);
      };
    }, [])
  );

  return (
    <>
      <Header label={"My Orders"} hideArrow={true} />
      <View style={styles.screen}>
        <View style={styles.block1}>
          <SearchBar
            placeholder={"search by order id"}
            onSearch={handleSearch}
          />
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
          isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : 
          <Text>{"No Data Found!"}</Text>
        )}
      </View>
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
});

// 355 - 143 lines