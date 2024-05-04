import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Upload = ({ onClose }) => {
  return (
    <View style={styles.upload}>
      <View style={styles.uploadFileParent}>
        <Text style={[styles.uploadFile, styles.uploadTypo1]}>Upload File</Text>
        <View style={[styles.frameWrapper, styles.wrapperSpaceBlock]}>
          <View style={styles.uploadWrapperFlexBox}>
            <Image
              style={styles.upload01Icon}
              resizeMode="cover"
              source={require("../assets/upload01.png")}
            />
            <Text style={[styles.uploadOnlyImages, styles.uploadTypo]}>
              Upload Only Images and Videos File
            </Text>
          </View>
        </View>
        <Pressable style={[styles.uploadWrapper, styles.uploadWrapperFlexBox]}>
          <Text style={[styles.upload1, styles.uploadTypo]}>Upload</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  wrapperSpaceBlock: {
    marginTop: 30,
    overflow: "hidden",
  },
  uploadTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  uploadWrapperFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  uploadFile: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
  },
  upload01Icon: {
    width: 41,
    height: 41,
  },
  uploadOnlyImages: {
    color: Color.colorFirebrick_200,
    marginTop: 12,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLavenderblush_100,
    borderStyle: "dashed",
    borderColor: Color.colorFirebrick_200,
    borderWidth: 2,
    paddingHorizontal: 61,
    paddingVertical: 95,
    alignSelf: "stretch",
    marginTop: 30,
  },
  upload1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    flex: 1,
  },
  uploadWrapper: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorFirebrick_200,
    justifyContent: "center",
    paddingHorizontal: Padding.p_37xl,
    paddingVertical: Padding.p_lgi,
    marginTop: 30,
    overflow: "hidden",
    flexDirection: "row",
  },
  uploadFileParent: {
    flex: 1,
  },
  upload: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowRadius: 24.6,
    elevation: 24.6,
    shadowOpacity: 1,
    width: 390,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_2xl,
    maxWidth: "100%",
    maxHeight: "100%",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default Upload;
