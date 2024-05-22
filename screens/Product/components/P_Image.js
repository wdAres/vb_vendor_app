import React, { useState, useEffect } from "react";
import FormItem from "../../../components/form/FormItem";
import { PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Toast from "react-native-toast-message";
import { launchImageLibrary } from "react-native-image-picker";
import { log } from "console";

const P_Image = ({ uni_style }) => {
  const [productImage, setProductImage] = useState("");
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ]);
        return (
          granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const selectProductImage = async () => {
    const hasPermission = await requestPermissions();

    console.log(hasPermission);

    if (!hasPermission) {
      console.log('Permission denied');
      return;
    }

    try {
      const options = {
        mediaType: "photo",
      };

      let res = await launchImageLibrary(options);

      if (res.assets && res.assets.length > 0) {
        console.log(res.assets[0]);
        setProductImage(res.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={[uni_style.title]}>Product Images</Text>
      <View style={[uni_style.container, uni_style.frameview]}>
        <View style={[styles.container2]}>
          <Text style={styles.label}>Product Image</Text>
          <Pressable onPress={selectProductImage} style={styles.upload_btn}>
            <Text style={styles.upload_text}>Upload Product Image</Text>
          </Pressable>
        </View>
        <View style={[styles.container2]}>
          <Text style={styles.label}>Additional Images</Text>
          <Pressable style={styles.upload_btn}>
            <Text style={styles.upload_text}>Upload Product Image</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default P_Image;

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
  upload_text: {},
});
