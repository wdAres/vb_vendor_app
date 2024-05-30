import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import Header from "../../components/Header";
import { Color } from "../../GlobalStyles";
import { responsiveHeight } from "react-native-responsive-dimensions";
import OrderCard from "../../components/OrderCard";
import useHttp2 from "../../hooks/useHttp2";
import NotificationCard from "../../components/Notifications/components/NotificationCard";

export default function Notifications({ navigation }) {
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
          url: `notifications?limit=10&page=${pageNumber}`,
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
      getData(page);
    }, [page])
  );

  const handleEndReached = () => {
    if (nextPageExist) {
      setPage((prevPage) => prevPage + 1);
    }
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

  const handleMarkDone = (id) => {
    sendRequest(
      {
        url: `notifications/${id}/seen`,
        method:'PUT'
      },
      (result) => {
        getData(page);
      },
      true
    );
  };
  const handleMarkDoneAll  = () => {
    sendRequest(
      {
        url: `notifications/seen`,
        method:'PUT'
      },
      (result) => {
        getData(page);
      },
      true
    );
  };


  const renderItem = ({ item }) => {
    return <NotificationCard handleMarkDone={handleMarkDone} {...item} />;
  };



  return (
    <>
      <Header label={"Notifications"} >
        <Pressable onPress={()=>handleMarkDoneAll()}>
            <Text style={styles.link}>Read All</Text>
        </Pressable>
      </Header>
      <View style={styles.screen}>
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
          />
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
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
  },
  block1: {
    gap: responsiveHeight(2.36),
    marginBottom: responsiveHeight(2.36),
    flexDirection: "column",
  },
  link:{
    fontSize: responsiveHeight(1.49),
    color: "#ae0000",
    fontWeight: "500",
  }
});

// 355 - 143 lines
