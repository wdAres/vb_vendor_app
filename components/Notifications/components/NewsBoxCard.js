import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useHttp2 from "../../../hooks/useHttp2";
import moment from "moment";
import { responsiveHeight } from "react-native-responsive-dimensions";

const NewsBoxCard = ({ fetchData, data }) => {
  const { _id, createdAt, subject, seen } = data || {};

  const { sendRequest, isLoading } = useHttp2();

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

  let date = createdAt ? moment(createdAt).fromNow() : "";

  return (
    <Pressable onPress={handleAll} style={styles.parent}>
      <Text style={styles.text}>{date}</Text>
      <Text style={[styles.para]}>{subject?.slice(0, 25) + "..."}</Text>
      <Pressable style={styles.link}>
        <Text style={[styles.viewMore]}>View More</Text>
      </Pressable>
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
  },
});
