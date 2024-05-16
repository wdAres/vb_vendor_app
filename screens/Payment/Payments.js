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
import useHttp2 from "../../hooks/useHttp2";
import PaymentCard from "../../components/PaymentCard";
import PaymentGraph from "../../components/PaymentGraph/PaymentGraph";

export default function Payments({ navigation }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const [query, setQuery] = useState("");
  const [nextPageExist, setNextPageExist] = useState(false);

  const getData = useCallback((pageNumber, searchQuery = "") => {
    sendRequest(
      {
        url: `wallet?limit=10&page=${pageNumber}&search=${searchQuery}}`,
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
    return <PaymentCard data={item} />;
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <>
      <Header label={"Payments"} />
      <View style={styles.screen}>
        <View style={styles.block1}>
          <PaymentGraph />
          <Text style={styles.heading}>Payment History</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          ItemSeparatorComponent={() => (
            <View style={{ height: responsiveHeight(2.36) }} />
          )}
        />
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
  heading: {
    fontSize: responsiveHeight(1.49),
    color: "black",
    fontWeight: "600",
  },
});

// 355 - 143 lines
