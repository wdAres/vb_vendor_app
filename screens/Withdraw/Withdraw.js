import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import WithdrawCard from "../../components/WithdrawCard";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

export default function Withdraw({ navigation }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const { sendRequest: walletReq } = useHttp2();
  const [query, setQuery] = useState("");
  const [nextPageExist, setNextPageExist] = useState(false);
  const [wallet, setWallet] = React.useState(0);

  const getData = useCallback((pageNumber, searchQuery = "") => {
    sendRequest(
      {
        url: `withdraw-request?limit=10&page=${pageNumber}&search=${searchQuery}}`,
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

  const getTileData = () => {
    walletReq(
      {
        url: "withdraw-request/tiles",
      },
      (result) => {
        setWallet(result.data.currentWalletBalance);
      }
    );
  };

  // Fetch data when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      getTileData();
    }, [])
  );

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
    return <WithdrawCard {...item} />;
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <>
      <Header label={"Withdraw"} />
      <View style={styles.screen}>
        <View style={styles.block1}>
          <View style={styles.walletAmountParent}>
            <Text style={[styles.text1]}>
              Wallet Amount
            </Text>
            <Text style={[styles.text2]}>${wallet}</Text>
          </View>
          <PrimaryBtn
          style={styles.btn}
            title={"Withdraw"}
            onPress={() => navigation.navigate("WithdrawMoney")}
          />
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
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
  },
  text1:{
    fontSize:responsiveHeight(1.49),
    marginBottom:responsiveHeight(1.11),
    fontWeight:'500',
    color:'#000'
  },
  text2:{
    fontSize:responsiveHeight(3.73),
    fontWeight:'500',
    color:'#000'
  },
  btn:{
    width:responsiveWidth(22.05),
    fontSize:responsiveHeight(1.49),
    paddingHorizontal:responsiveWidth(2.56),
    paddingVertical:0,
    height:responsiveHeight(4.35)
  }
});

// 355 - 143 lines
