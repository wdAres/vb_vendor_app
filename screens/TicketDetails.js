import React, { useState, useEffect, useRef } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Header from "../components/Header";
import useHttp2 from "../hooks/useHttp2";
import moment from "moment";
import Toast from "react-native-toast-message";
import SendBtn from "../components/Buttons/SendBtn";
import { Colors } from "react-native-paper";
import Message from "../components/Support/Message";

const TicketDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const { sendRequest, isLoading } = useHttp2();
  const { sendRequest: endChat, isLoading: loading2 } = useHttp2();
  const { sendRequest: sendChat, isLoading: loading3 } = useHttp2();
  const [data, setData] = useState([]);
  const [myChat, setMyChat] = useState([]);
  const [message, setMessage] = useState("");
  const flatListRef = useRef();

  const getData = () => {
    sendRequest(
      {
        url: `ticket/${id}/show`,
      },
      (data) => {
        setData({ ...data.data, responds: null });
        setMyChat(data.data.responds);
        scrollToBottom();
      }
    );
  };

  const closeReq = () => {
    endChat(
      {
        url: `ticket/${id}/close`,
        method: "PUT",
      },
      (data) => {
        navigation.goBack();
      },
      true
    );
  };

  const sendMessage = () => {
    if (!message) {
      Toast.show({
        type: "error",
        text1: "Either select a file or send a message",
      });
      return;
    }

    sendChat(
      {
        url: `ticket/${id}/reply`,
        method: "POST",
        body: {
          message,
        },
      },
      (result) => {
        setMyChat([
          ...myChat,
          {
            message: message,
            sender: "user",
            createdAt: moment().toISOString(), // Add current timestamp
          },
        ]);
        setMessage(""); // Clear input after sending message
        scrollToBottom(); // Scroll to bottom after sending message
      }
    );
  };

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return <Message {...item} />;
  };

  return (
    <>
      <Header label={"Ticket Details"}>
        {data?.status !== "closed" && (
          <Pressable disabled={isLoading} onPress={closeReq}>
            <Text style={styles.close}>
              {isLoading ? "Loading" : "Close Chat"}
            </Text>
          </Pressable>
        )}
      </Header>
      <View style={styles.td}>
        <View style={styles.td_child_1}>
          <View style={styles.td_ul}>
            <View style={styles.td_li}>
              <Text style={styles.td_li_i1}>Ticket ID</Text>
              <Text style={styles.td_li_i2}>#{data?.ticketId ?? "--"}</Text>
            </View>
            <View style={styles.td_li}>
              <Text style={styles.td_li_i1}>Date</Text>
              <Text style={styles.td_li_i2}>
                {moment(data?.createdAt).format("ll")}
              </Text>
            </View>
          </View>
          <FlatList
            style={styles.chat_container}
            data={myChat}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.inp_con}
            ItemSeparatorComponent={() => (
              <View style={{ height: responsiveHeight(2.36) }} />
            )}
            ref={flatListRef} // Set ref for FlatList
          />
        </View>
        {data?.status !== "closed" && (
          <View style={styles.td_footer}>
            <View style={[styles.td_footer_input]}>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder={"write your message"}
              />
            </View>
            <SendBtn
              onPress={sendMessage}
              disabled={isLoading}
              isLoading={isLoading}
              style={styles.td_footer_btn}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  td: {
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    backgroundColor: Colors.white,
    flex: 1,
    gap: responsiveHeight(3.6),
  },
  td_child_1: {
    flex: 1,
    gap: responsiveHeight(3.6),
  },
  td_ul: {
    gap: responsiveHeight(3.6),
  },
  td_li: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  td_li_i1: {
    fontSize: responsiveHeight(1.49),
    fontWeight: "600",
    color: "black",
  },
  td_li_i2: {
    fontSize: responsiveHeight(1.49),
    fontWeight: "600",
    color: "#59595A",
  },
  td_footer: {
    flexDirection: "row",
    gap: 10,
  },
  td_footer_input: {
    flex: 6,
    position: "relative",
  },
  td_footer_btn: {
    flex: 1,
  },
  input: {
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    color: "#b9b9b9",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: "100%",
  },
  close: {
    fontSize: responsiveHeight(1.49),
    color: "#AE0000",
    fontWeight: "400",
  },
  chat_container: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
  inp_con: {
    padding: 10,
  },
});

export default TicketDetails;
