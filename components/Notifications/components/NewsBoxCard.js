import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useHttp2 from "../../../hooks/useHttp2";
import moment from "moment";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/core";

const NewsBoxCard = ({ fetchData, data }) => {
  const { _id, createdAt, subject, seen, redirect } = data || {};
  const navigation = useNavigation();

  const { sendRequest, isLoading } = useHttp2();

  const links = {
    order: "Orders",
    payment: "Payments",
    "refund request": "RefundRequest1",
    "withdraw request": "Withdraw",
    product: "Products1",
  };

  const handleAll = () => {
    !seen &&
      sendRequest(
        {
          url: `notifications/${_id}/seen`,
          method: "PUT",
        },
        (result) => {
          fetchData();
        }
      );
  };

  let date = createdAt ? moment(createdAt).format("YYYY-MM-DD") : "";

  return (
    <Pressable onPress={handleAll} style={styles.parent}>
      <Text style={styles.text}>{date}</Text>
      <Text style={[styles.para]}>
        {subject.length > 125 ? subject?.slice(0, 125) + "..." : subject}
      </Text>
      {redirect && (
        <Pressable
          style={styles.link}
          onPress={() => navigation.navigate(links[redirect])}
        >
          <Text style={[styles.viewMore]}>View More</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default NewsBoxCard;

const styles = StyleSheet.create({
  parent: {
    gap: responsiveHeight(1.49),
    flexDirection: "column",
  },
  text: {
    fontSize: responsiveHeight(1.24),
    color: "#A1A1A1",
    fontWeight: "500",
  },
  para: {
    fontSize: responsiveHeight(1.24),
    color: "#000",
    fontWeight: "500",
  },
  link: {},
  viewMore: {
    color: "#C50505",
    fontWeight: "500",
    fontSize: responsiveHeight(1.24),
    textDecorationStyle: "solid",
    textDecorationColor: "#AE0000",
    textDecorationLine: "underline",
  },
});
