import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryBtn = ({ title, onPress, disabled,isLoading,style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: "#AE0000" },
        disabled && styles.disabledButton,
        style && style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>
        {disabled ? (isLoading ? "Loading" : title) : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#AE0000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: "400",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC", // Change to your preferred disabled color
  },
});

export default PrimaryBtn;
