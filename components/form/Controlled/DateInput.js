import moment from "moment";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import DatePicker from "react-native-date-picker";
import ImageCropPicker from "react-native-image-crop-picker";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Toast from "react-native-toast-message";

const DateInput = ({ dateState, dateStateFunc, label  }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container2]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={() => setOpen(true)} style={styles.upload_btn}>
        <Text style={styles.upload_text}>
          {moment(dateState ? dateState : new Date()).format("YYYY-MM-DD")}
        </Text>
      </Pressable>
      <DatePicker
        modal
        open={open}
        date={dateState ? dateState : new Date()}
        onConfirm={(date) => {
          setOpen(false);
          dateStateFunc(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container2: {
    width: "100%",
    flexDirection: "column",
    gap: responsiveHeight(1.86),
  },
  label: {
    fontSize: responsiveHeight(1.86),
    color: "black",
    fontWeight: "400",
  },
  upload_btn: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
    padding: 10,
    color: "#8F9095",
    fontSize: responsiveHeight(1.49),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
});
