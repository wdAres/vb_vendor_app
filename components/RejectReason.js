import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import PrimaryBtn from "./Buttons/PrimaryBtn";
import useHttp2 from "../hooks/useHttp2";
import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import RR_Reason from "../screens/Support/components/RR_Reason";
import { responsiveHeight } from "react-native-responsive-dimensions";

const RejectReason = ({ onClose, id, parentFunc }) => {
  const { sendRequest, isLoading } = useHttp2();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm();

  const reject = (data) => {
    console.log(data);
    sendRequest(
      {
        url: `refund-request/${id}/reject`,
        method: "PUT",
        body: data,
      },
      (result) => {
        parentFunc();
        onClose();
      },
      true
    );
  };

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  return (
    <View style={styles.rejectReason}>
      <View style={styles.rejectReasonParent}>
        <Text style={styles.rejectReason1}>Reject Reason</Text>
        <RR_Reason control={control} errors={errors} uni_style={uni_style} />
        <PrimaryBtn
          isLoading={isLoading}
          disabled={isLoading}
          onPress={handleSubmit(reject)}
          title={"Reject Refund"}
        />
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
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  overall_heading: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
  },
  overall_container: {
    gap: responsiveHeight(2.98),
    marginVertical: responsiveHeight(2.98),
  },
  overall_frameView: {
    alignSelf: "stretch",
  },
});

export default RejectReason;
