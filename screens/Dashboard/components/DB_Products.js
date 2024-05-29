import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useHttp2 from "../../../hooks/useHttp2";

const DB_Products = () => {
  const [data, setData] = useState({});
  const { sendRequest, isLoading } = useHttp2();

  const getData = () => {
    sendRequest({ url: "product?limit=10&page=1&search" }, (result) => {
      setData(result.data.docs);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Text style={styles.text}>Top Products</Text>
      {isLoading ? (
        <Text>Loading</Text>
      ) : data.length > 0 ? (
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.inner_container}
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {data.map(element=>(
              <ProductCard key={element._id} style={styles.productCard} {...element} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Products Found!</Text>
      )}
    </>
  );
};

export default DB_Products;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontWeight: "600",
    fontSize: responsiveHeight(1.49),
    color: "#000",
  },
  inner_container: {
    gap: responsiveWidth(3.33),
  },
});
