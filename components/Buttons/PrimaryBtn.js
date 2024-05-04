import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryBtn = ({ title, onPress, disabled,isLoading }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: "#AE0000" },
        disabled && styles.disabledButton,
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
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC", // Change to your preferred disabled color
  },
});

export default PrimaryBtn;
