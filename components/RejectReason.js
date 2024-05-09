import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import PrimaryBtn from "./Buttons/PrimaryBtn";
import useHttp2 from "../hooks/useHttp2";
import Toast from "react-native-toast-message";

const RejectReason = ({ onClose, id, parentFunc }) => {
  const {sendRequest,isLoading} = useHttp2();
  const [message, setMessage] = React.useState("");
  const reject = () => {
    if (!message) {
      return Toast.show({
        type: "error",
        text1: "Your reject reason is empty!",
      });
    }

    sendRequest(
      {
        url: `refund-request/${id}/accept`,
        method: "PUT",
        body: {
          reason: message,
        },
      },
      (result) => {
        parentFunc();
        onClose();
      },
      true
    );
  };

  return (
    <View style={styles.rejectReason}>
      <View style={styles.rejectReasonParent}>
        <Text style={styles.rejectReason1}>Reject Reason</Text>
        <TextInput
          style={[styles.frameChild, styles.frameChildFlexBox]}
          placeholder="Type Something.."
          multiline={true}
          placeholderTextColor="#8f9095"
          value={message}
          onChangeText={v=>setMessage(v)}
        />
        <PrimaryBtn isLoading={isLoading} onPress={reject} title={"Reject Refund"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildFlexBox: {
    marginTop: 21,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  rejectReason1: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 276,
    padding: Padding.p_xl,
    fontFamily: FontFamily.interRegular,
    fontSize: 13,
    backgroundColor: Color.colorWhite,
    marginTop: 21,
  },
  reject: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  rejectWrapper: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorFirebrick,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_37xl,
    paddingVertical: Padding.p_lgi,
  },
  rejectReasonParent: {
    flex: 1,
  },
  rejectReason: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowRadius: 24.6,
    elevation: 24.6,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    width: 390,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 30,
    maxWidth: "100%",
    maxHeight: "100%",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default RejectReason;
