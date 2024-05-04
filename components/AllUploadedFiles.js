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
  TouchableOpacity,
  Modal,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import AllUploadedFiles from "AllUploadedFiles";
import AllUploadedFiles1 from "./AllUploadedFiles1";
import Frame10 from "./Frame10";
import Frame12 from "./Frame12";
import Frame11 from "./Frame11";
import Frame13 from "./Frame13";
import { useNavigation } from "@react-navigation/native";
import Upload from "./Upload";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();

const AllUploadedFiles = ({ style }) => {
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
        style={[styles.allUploadedFiles, style]}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
          <TopTab.Navigator
            style={styles.frameChild}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([<Frame10 />, <Frame11 />]);
              const [normalItems] = React.useState([<Frame12 />, <Frame13 />]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={{ flex: 1 }}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen
              name="All Uploaded Files"
              component={AllUploadedFiles}
            />
            <TopTab.Screen
              name="All Uploaded Files1"
              component={AllUploadedFiles1}
            />
          </TopTab.Navigator>
          <View style={styles.frameContainerSpaceBlock}>
            <View style={styles.groupFlexBox}>
              <View style={styles.imageLayout}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder6.png")}
                />
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
              </View>
              <View style={[styles.imagePlaceholderGroup, styles.imageLayout]}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder7.png")}
                />
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
              </View>
            </View>
            <View style={[styles.groupContainer, styles.groupFlexBox]}>
              <View style={styles.imageLayout}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder6.png")}
                />
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
              </View>
              <View style={[styles.imagePlaceholderGroup, styles.imageLayout]}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder7.png")}
                />
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
              </View>
            </View>
            <View style={[styles.groupContainer, styles.groupFlexBox]}>
              <View style={styles.imageLayout}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder6.png")}
                />
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
              </View>
              <View style={[styles.imagePlaceholderGroup, styles.imageLayout]}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder7.png")}
                />
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
              </View>
            </View>
            <View style={[styles.groupContainer, styles.groupFlexBox]}>
              <View style={styles.imageLayout}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder6.png")}
                />
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
              </View>
              <View style={[styles.imagePlaceholderGroup, styles.imageLayout]}>
                <Image
                  style={styles.imagePlaceholderIcon}
                  resizeMode="cover"
                  source={require("../assets/image-placeholder7.png")}
                />
                <Text style={[styles.kb, styles.kbTypo]}>172.5 Kb</Text>
                <Text style={[styles.image1jpg, styles.kbTypo]}>
                  Image_1.jpg
                </Text>
              </View>
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
  frameChild: {
    width: "100%",
    height: 1130,
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    height: 41,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 41,
    zIndex: 1,
  },
  allUploadedFilesContent: {
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainerSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  kbTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  imageLayout: {
    height: 184,
    flex: 1,
  },
  groupFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowLeftSm: {
    width: 24,
    height: 24,
  },
  uploadFiles: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorBlack,
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
    alignItems: "center",
  },
  search01Icon: {
    width: 18,
    height: 18,
  },
  search01Wrapper: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_8xs,
    marginTop: 19,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  imagePlaceholderIcon: {
    top: 0,
    width: 166,
    height: 143,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  image1jpg: {
    top: 150,
    fontSize: FontSize.size_xs,
    width: 66,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  kb: {
    top: 172,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray_300,
    width: 42,
  },
  imagePlaceholderGroup: {
    marginLeft: 20,
  },
  groupContainer: {
    marginTop: 25,
  },
  frameParent: {
    flex: 1,
  },
  allUploadedFiles: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignSelf: "stretch",
  },
});

export default AllUploadedFiles;
