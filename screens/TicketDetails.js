import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Header from "../components/Header";
import useHttp2 from "../hooks/useHttp2";
import moment from "moment";
import Toast from "react-native-toast-message";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";

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
  const scrollViewRef = useRef();

  const getData = () => {
    sendRequest(
      {
        url: `ticket/${id}/show`,
      },
      (data) => {
        setData({ ...data.data, responds: null });
        setMyChat(data.data.responds);
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
        navigation.navigate("Support");
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
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    getData();
    scrollToBottom(); // Scroll to bottom on initial load
  }, []);

  return (
    <>
      <Header label={"Ticket Details"} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.ticketDetails}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ticketDetailsScrollViewContent}
      >
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            {data.status !== "closed" && (
              <SecondaryBtn
                style={{ paddingVertical: 10, marginBottom: 20 }}
                title={"Close Chat"}
                onPress={closeReq}
              />
            )}
            <View style={styles.frameContainer}>
              <View style={styles.ticketIdParent}>
                <Text style={styles.ticketId}>Ticket ID</Text>
                <Text style={[styles.text, styles.textTypo1]}>
                  #{data.ticketId ?? "--"}
                </Text>
              </View>
              <View style={styles.dateParent}>
                <Text style={styles.ticketId}>Date</Text>
                <Text style={[styles.text1, styles.textTypo1]}>
                  {moment(data.createdAt).format("YYYY-MM-DD") ?? "--"}
                </Text>
              </View>
            </View>
            <ScrollView style={styles.frameGroup}>
              <View style={[styles.frameView, styles.frameFlexBox]}>
                {myChat.length > 0 &&
                  myChat.map((element) => (
                    <View key={element._id} style={[styles.frameParent1]}>
                      <View
                        style={[
                          styles.goremIpsumDolorSitAmetCoWrapper,
                          styles.goremFlexBox,
                        ]}
                      >
                        <Text style={styles.goremIpsumDolor}>
                          {element.message}
                        </Text>
                      </View>
                      <Text style={[styles.text2, styles.textTypo]}>
                        {moment(element.createdAt).format("YYYY-MM-DD")}
                      </Text>
                    </View>
                  ))}
              </View>
            </ScrollView>
              {data.status !== "closed" && (
                <View style={styles.frameParent3}>
                  <TextInput
                    style={[styles.frameChild, styles.frameChildLayout]}
                    placeholder="Message ..."
                    value={message}
                    onChangeText={(val) => setMessage(val)}
                    placeholderTextColor="#7d7d7d"
                  />
                  <Pressable
                    onPress={sendMessage}
                    style={[styles.send01Wrapper, styles.frameChildLayout]}
                    disabled={loading3}
                  >
                    <Image
                      style={styles.send01Icon}
                      resizeMode="cover"
                      source={require("../assets/send01.png")}
                    />
                  </Pressable>
                </View>
              )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ticketDetailsScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textTypo1: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  goremFlexBox: {
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textTypo: {
    height: responsiveHeight(1.86),
    color: Color.colorDarkgray_500,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    alignSelf: "stretch",
  },
  frameChildLayout: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  ticketDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  ticketId: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
  },
  text: {
    marginLeft: responsiveWidth(5.89),
  },
  ticketIdParent: {
    width: responsiveWidth(42.3),
    flexDirection: "row",
  },
  text1: {
    marginLeft: responsiveWidth(12.05),
  },
  dateParent: {
    width: responsiveWidth(35.64),
    marginTop: responsiveHeight(3.6),
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    marginBottom: responsiveHeight(3.6),
  },
  goremIpsumDolor: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    flex: 1,
  },
  goremIpsumDolorSitAmetCoWrapper: {
    backgroundColor: "#faf9f9",
    paddingHorizontal: responsiveWidth(2.3),
    paddingVertical: responsiveHeight(1.11),
  },
  text2: {
    marginTop: responsiveHeight(1.24),
    textAlign: "left",
  },
  frameParent1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  goremIpsumDolorSitAmetCoContainer: {
    paddingHorizontal: responsiveWidth(2.3),
    paddingVertical: responsiveHeight(1.49),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text3: {
    textAlign: "right",
    marginTop: responsiveHeight(0.87),
  },
  frameParent2: {
    marginTop: responsiveHeight(12.06),
  },
  frameView: {
    borderRadius: Border.br_3xs,
    height: responsiveHeight(74.5),
    paddingHorizontal: responsiveWidth(5.64),
    paddingVertical: responsiveHeight(3.73),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  frameChild: {
    paddingHorizontal: responsiveWidth(3.58),
    paddingVertical: responsiveHeight(1.74),
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_sm,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    flex: 1,
  },
  send01Icon: {
    width: responsiveWidth(8.46),
    height: responsiveHeight(4.22),
  },
  send01Wrapper: {
    backgroundColor: Color.colorFirebrick_200,
    width: responsiveWidth(12.56),
    alignItems: "center",
    // justifyContent:'center',
    paddingVertical: responsiveHeight(0.62),
    paddingHorizontal: responsiveWidth(1.28),
    marginLeft: responsiveWidth(3.07),
  },
  frameParent3: {
    marginTop: responsiveHeight(3.23),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameGroup: {
    // marginTop: responsiveHeight(3.60),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  ticketDetails: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default TicketDetails;
