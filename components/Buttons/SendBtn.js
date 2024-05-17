import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

const  SendBtn = ({
  title,
  onPress,
  disabled,
  isLoading,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: "#AE0000" },
        disabled && styles.disabledButton,
        style && style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../../assets/send01.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#AE0000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "400",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC", // Change to your preferred disabled color
  },
  icon:{
    // width: responsiveWidth(8.46),
    width:  responsiveHeight(4.22),
    height: responsiveHeight(4.22),
  }
});

export default SendBtn;
