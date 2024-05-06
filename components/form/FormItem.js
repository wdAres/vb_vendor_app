import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { responsiveHeight } from "react-native-responsive-dimensions";



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
    gap: responsiveHeight(1.86),
  },
  label: {
    fontSize: responsiveHeight(1.86),
    color: "black",
    fontWeight: "400",
  },
  error: {
    color: "red",
    fontWeight: "400",
    textAlign: "right",
    fontSize:responsiveHeight(1.24)
  },
});
