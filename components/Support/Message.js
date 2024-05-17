import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import moment from "moment";

const Message = ({ sender, createdAt, message }) => {
  return (
    <View style={[styles.message_container, sender === "user" && styles.reply]}>
      <Text style={[styles.message, sender === "user" && styles.message_bg]}>
        {message}
      </Text>
      <Text style={styles.date}>{moment(createdAt).format("YYYY-MM-DD")}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  reply: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  message_container: {
    gap: responsiveHeight(2.48),
    width: "60%",
  },
  message: {
    paddingHorizontal: responsiveWidth(2.3),
    paddingVertical: responsiveHeight(1.11),
    borderRadius: 5,
    fontSize: responsiveHeight(1.24),
    fontWeight: "400",
    color: "#000",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
  message_bg: {
    backgroundColor: "#FAF9F9",
  },
  date: {
    fontSize: responsiveHeight(1.24),
    fontWeight: "400",
    color: "#989898",
  },
});
