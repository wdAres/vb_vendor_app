import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const BulkUpload = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
    horizontal={false}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.bulkProductScrollViewContent}
     style={styles.bulkUpload}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <Pressable style={styles.arrowLeftSmParent}>
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
              <Text
                style={[styles.bulkProductsUpload, styles.instructionsFlexBox]}
              >
                Bulk Products upload
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
          >
            <View style={styles.upload01Parent}>
              <Image
                style={styles.upload01Icon}
                resizeMode="cover"
                source={require("../assets/upload01.png")}
              />
              <Text style={[styles.uploadOnlyCsv, styles.instructionsTypo]}>
                Upload Only CSV File
              </Text>
            </View>
          </Pressable>
          <View style={styles.frameContainerSpaceBlock}>
            <Text style={[styles.instructions, styles.instructionsTypo]}>
              Instructions
            </Text>
            <View style={styles.downloadTheSkeletonFileAndParent}>
              <Text
                style={[styles.downloadTheSkeleton, styles.instructionsTypo]}
              >
                Download the skeleton file and fill it with data.
              </Text>
              <Text style={styles.youTypo}>
                <Text style={styles.youCan}>{`You can `}</Text>
                <Text style={styles.download}>download</Text>
                <Text style={styles.youCan}>
                  {" "}
                  the example file to understand how the data must be filled.
                </Text>
              </Text>
              <Text style={[styles.onceYouHave, styles.youTypo]}>
                Once you have downloaded and filled the skeleton file, upload it
                in the form below and submit.:
              </Text>
              <Text style={[styles.onceYouHave, styles.youTypo]}>
                After uploading products you need to edit them and set products
                images and choices.
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.uploadWrapper}>
          <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  instructionsFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameContainerSpaceBlock: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  instructionsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  youTypo: {
    marginTop: responsiveHeight(2.23),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignSelf: "stretch",
  },
  uploadTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: 24,
    height: 24,
  },
  bulkProductsUpload: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  upload01Icon: {
    width: responsiveWidth(10.51),
    height: responsiveHeight(5.09),
  },
  uploadOnlyCsv: {
    color: Color.colorFirebrick_200,
    marginTop: responsiveHeight(1.49),
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  upload01Parent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameContainer: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLavenderblush_100,
    borderStyle: "dashed",
    borderColor: Color.colorFirebrick_200,
    borderWidth: 2,
    paddingHorizontal: responsiveWidth(29.23),
    paddingVertical: responsiveHeight(21.26),
    overflow: "hidden",
  },
  instructions: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  downloadTheSkeleton: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorBlack,
  },
  youCan: {
    color: Color.colorBlack,
  },
  download: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue_200,
  },
  onceYouHave: {
    color: Color.colorBlack,
  },
  downloadTheSkeletonFileAndParent: {
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  upload: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    flex: 1,
  },
  uploadWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick_200,
    justifyContent: "center",
    paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(26.49),
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    flex: 1,
  },
  bulkUpload: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
  },
  bulkProductScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default BulkUpload;
