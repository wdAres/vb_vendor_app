import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import NewsBoxCard from "./components/NewsBoxCard";
import useHttp2 from "../../hooks/useHttp2";
import Container from "../Container/Container";
import { responsiveHeight } from "react-native-responsive-dimensions";

const NewsBox = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { sendRequest, isLoading: loading } = useHttp2();

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    if (!hasMore) {
      return;
    }
    sendRequest(
      {
        url: `notifications?limit=10&page=${page}`,
      },
      (result) => {
        if (result.data.docs.length > 0) {
          setData((prevData) => [...prevData, ...result.data.docs]);
        }
        if (!result.data.nextPage) {
          setHasMore(false);
        }
      }
    );
  };

  const handleReadAll = () => {
    sendRequest(
      {
        url: `notifications/seen`,
        method: "PUT",
      },
      (result) => {
        fetchData();
      }
    );
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Container  style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.heading}>News</Text>
        <Pressable disabled={loading} onPress={handleReadAll}>
          <Text style={styles.link}>{loading ? "Loading" : "Read All"}</Text>
        </Pressable>
      </View>
      {data?.length > 0 ? (
        <ScrollView style={styles.container_2} onScroll={handleScroll} scrollEventThrottle={16}>
          {data?.length > 0 &&
            data?.map((item, index) => (
              <NewsBoxCard fetchData={fetchData} key={index} data={item} />
            ))}
          {loading && <ActivityIndicator size="large" />}
        </ScrollView>
      ) : (
        <Text>{loading ? 'Loading' : 'No Data Found!'}</Text>
      )}
    </Container>
  );
};

export default NewsBox;

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    fontWeight: "500",
    fontSize: responsiveHeight(1.24),
    color: "#C50505",
  },
  heading: {
    paddingBottom: 10,
    fontWeight: "600",
    fontSize: responsiveHeight(1.49),
    color: "#000",
  },
  container: {
    padding: 10,
  },
  container_2:{
    height:400
  }
});
