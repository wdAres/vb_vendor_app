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
import useHttp2 from "../../hooks/useHttp2";
import CouponCard from "../../components/CouponCard";

export default function Coupons({ navigation }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const [query, setQuery] = useState("");
  const [nextPageExist, setNextPageExist] = useState(false);

  const getData = useCallback((pageNumber, searchQuery = "") => {
    sendRequest(
      {
        url: `coupon?limit=10&page=${pageNumber}&search=${searchQuery}}`,
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
  }, []);

  // Fetch data when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      getData(page, query);
    }, [page, query])
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
    return <CouponCard data={item} />;
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

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
      <Header
        label={"My Coupons"}
        handlePress={() => navigation.navigate("AddCoupon")}
      />
      <View style={styles.screen}>
        <View style={styles.block1}>
          <SearchBar
            placeholder={"search by order id"}
            onSearch={handleSearch}
          />
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
