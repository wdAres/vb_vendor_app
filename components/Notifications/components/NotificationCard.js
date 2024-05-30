import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const NotificationCard = ({
  _id,
  createdAt,
  subject,
  seen,
  redirect,
  description,
  handleMarkDone,
}) => {
  const navigation = useNavigation();

  const links = {
    order: "Orders",
    payment: "Payments",
    "refund request": "RefundRequest1",
    "withdraw request": "Withdraw",
    product: "Products1",
  };

  let date = createdAt ? moment(createdAt).format("YYYY-MM-DD") : "";

  return (
    <View style={[styles.container, seen || styles.bg]}>
      <Text style={styles.heading}>{subject}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.container_3}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.container_2}>
          <Pressable onPress={() => handleMarkDone(_id)}>
            <Text style={[styles.btn, styles.btn1]}>Mark Done</Text>
          </Pressable>
          {redirect && (
            <Pressable onPress={()=>navigation.navigate(links[redirect])}>
              <Text style={[styles.btn, styles.btn2]}>View</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(1.86),
    paddingHorizontal: responsiveWidth(5.12),
    gap: responsiveHeight(1.86),
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
  },
  bg: {
    backgroundColor: "#d9d9d9",
  },
  heading: {
    fontSize: responsiveHeight(1.49),
    color: "#000",
    fontWeight: "500",
  },
  desc: {
    fontSize: responsiveHeight(1.36),
    color: "#59595A",
    fontWeight: "500",
  },
  date: {
    fontSize: responsiveHeight(1.24),
    color: "#A1A1A1",
    fontWeight: "500",
  },
  container_2: {
    columnGap: responsiveWidth(2.82),
    alignItems: "center",
    flexDirection: "row",
  },
  btn: {
    fontSize: responsiveHeight(1.36),
    fontWeight: "500",
  },
  btn1: {
    color: "#3086D7",
  },
  btn2: {
    color: "#ae0000",
  },
  container_3: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
