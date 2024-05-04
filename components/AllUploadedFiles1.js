import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Upload from "./Upload";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AllUploadedFiles1 = ({ style }) => {
  const navigation = useNavigation();
  const [addSquare03IconVisible, setAddSquare03IconVisible] = useState(false);

  const openAddSquare03Icon = useCallback(() => {
    setAddSquare03IconVisible(true);
  }, []);

  const closeAddSquare03Icon = useCallback(() => {
    setAddSquare03IconVisible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={[styles.allUploadedFiles, style, styles.search01WrapperBg]}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.allUploadedFilesContent}
      >
        <View style={styles.frameParent}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.arrowLeftSmParent, styles.frameGroupFlexBox]}>
              <Pressable
                style={styles.arrowLeftSm}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrowleftsm.png")}
                />
              </Pressable>
              <Text style={styles.uploadFiles}>Upload Files</Text>
            </View>
            <Pressable style={styles.addSquare03} onPress={openAddSquare03Icon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/add-product.png")}
              />
            </Pressable>
          </View>
          <View
            style={[styles.search01Wrapper, styles.frameContainerSpaceBlock]}
          >
            <Image
              style={styles.search01Icon}
              resizeMode="cover"
              source={require("../assets/search01.png")}
            />
          </View>
          <View
            style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
          >
            <View style={styles.frameChild} />
            <View style={styles.frameChild} />
          </View>
          <View style={styles.frameContainerSpaceBlock}>
            <View style={styles.videoCard}>
              <View style={styles.videoCardChild} />
              <Image
                style={styles.videoCardItem}
                resizeMode="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={styles.videoCard1}>
              <View style={styles.videoCardChild} />
              <Image
                style={styles.videoCardItem}
                resizeMode="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={styles.videoCard1}>
              <View style={styles.videoCardChild} />
              <Image
                style={styles.videoCardItem}
                resizeMode="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={styles.videoCard1}>
              <View style={styles.videoCardChild} />
              <Image
                style={styles.videoCardItem}
                resizeMode="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={addSquare03IconVisible}>
        <View style={styles.addSquare03IconOverlay}>
          <Pressable
            style={styles.addSquare03IconBg}
            onPress={closeAddSquare03Icon}
          />
          <Upload onClose={closeAddSquare03Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  allUploadedFilesContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  search01WrapperBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainerSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: 24,
    height: 24,
  },
  uploadFiles: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 10,
  },
  arrowLeftSmParent: {
    flex: 1,
  },
  addSquare03IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  addSquare03IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addSquare03: {
    width: 20,
    height: 20,
    marginLeft: 189,
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  search01Icon: {
    width: 18,
    height: 18,
  },
  search01Wrapper: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    width: 175,
    display: "none",
  },
  frameContainer: {
    height: 41,
    flexDirection: "row",
    marginTop: 20,
  },
  videoCardChild: {
    borderRadius: Border.br_3xs,
    height: 184,
    zIndex: 0,
    alignSelf: "stretch",
  },
  videoCardItem: {
    position: "absolute",
    marginLeft: -15,
    top: 77,
    left: "50%",
    borderRadius: Border.br_11xs,
    width: 30,
    height: 30,
    zIndex: 1,
  },
  videoCard: {
    alignSelf: "stretch",
  },
  videoCard1: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  allUploadedFiles: {
    width: "100%",
    alignSelf: "stretch",
  },
});

export default AllUploadedFiles1;
