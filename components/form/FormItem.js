import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getErrorMessage } from "../../utils/getErrorMessage";



const FormItem = ({ label, child, dataObj, style }) => {
  const { errors = {}, name } = dataObj; 

   const {exists,message} = getErrorMessage(errors,name)

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      {child(dataObj)}
      {exists && <Text style={styles.error}>{message}</Text>}
    </View>
  );
};

export default FormItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: 5,
  },
  label: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
  },
  error: {
    color: "red",
    fontWeight: "400",
    textAlign: "right",
  },
});
