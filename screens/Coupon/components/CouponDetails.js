import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import moment from "moment";

const CouponDetails = ({ coupon, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Coupon Code: {coupon.couponCode}</Text>
      <Text style={styles.label}>Coupon Label: {coupon.couponLabel}</Text>
      <Text style={styles.label}>
        Expiry Date: {moment(coupon.expiryDate).format("MMM D, YYYY")}
      </Text>
      <Text style={styles.label}>Discount Type: {coupon.discountType}</Text>
      <Text style={styles.label}>Discount Value: {coupon.discountValue}</Text>
      {/* Include other relevant coupon information */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CouponDetails;
