import React, { useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { responsiveHeight } from "react-native-responsive-dimensions";

const P_Image = ({ uni_style }) => {
  const [productImage, setProductImage] = useState("");
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        return (
          granted["android.permission.CAMERA"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const selectProductImage =async  () => {
    console.log('clicked!')
    const hasPermission = await requestPermissions();

    console.log(hasPermission);

    if (!hasPermission) {
      console.log('Permission denied');
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setProductImage(imageUri);
      }
    });
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
