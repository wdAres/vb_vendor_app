import React from "react";
import ControlledInput from "../../../components/form/Controlled/ControlledInput";
import FormItem from "../../../components/form/FormItem";
import { StyleSheet, Text, View } from "react-native";

const Seller_Pickup = ({ control, errors }) => {
    const inputFields = [
        {
          label: "Longitude",
          dataObj: {
            name: 'pickupPoint.longitude',
            control:control,
            errors:errors,
            rules: {
              required: "Longitude is required",
            },
            forInput:{
                keyboardType:'numeric'
            }
          },
          child: (data) => <ControlledInput {...data} />,
        },
        {
          label: "Latitude",
          dataObj: {
            name: 'pickupPoint.latitude',
            control:control,
            errors:errors,
            rules: {
              required: "Latitude is required",
            },
            forInput:{
                keyboardType:'numeric'
            }
          },
          child: (data) => <ControlledInput {...data} />,
        },
      ];
      
      
  return (
    <View style={styles.frameParent}>
      <Text style={[styles.basicInfo, styles.saveTypo]}>Pickup Point</Text>
      <View style={styles.frameView}>
        {inputFields.map((element) => (
          <FormItem  key={element.dataObj.name} {...element} />
        ))}
      </View>
    </View>
  );
};

export default Seller_Pickup;

const styles = StyleSheet.create({});
