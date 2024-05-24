import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Toast from "react-native-toast-message";

const ImgComp = ({ imgState, imgStateFunc, options, label }) => {
  const imageBase64 = async () => {
    let img = await ImageCropPicker.openPicker(options);

    const fileSizeMB = img.size / (1024 * 1024);
    if (fileSizeMB > 5) {
      throw new Error("Image size exceeds 5 MB.");
    }

    if (options.multiple && img.length > 3) {
      throw new Error("Maximum 3 images can be uploaded");
    }

    imgStateFunc(img);
  };

  const mainHandler = async () => {
    try {
      await imageBase64();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };


  return (
    <View style={[styles.container2]}>
      <Text style={styles.label}>Product Image</Text>
      <Pressable onPress={mainHandler} style={styles.upload_btn}>
        <Text style={styles.upload_text}>Upload Product Image</Text>
      </Pressable>
      {imgState && options?.includeBase64 && (
        <View style={styles.render_images}>
          {imgState.length > 1 ? (
            imgState.map((element, index) => (
              <Image
                width={100}
                key={index}
                height={100}
                source={{
                  uri: element.url ? element.url : `data:${element.mime};base64,${element.data}`,
                }}
              />
            ))
          ) : (
            <Image
              width={100}
              height={100}
              source={{
                uri: imgState.url ? imgState.url :  `data:${imgState.mime};base64,${imgState.data}`,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default ImgComp;

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
  render_images: {
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
