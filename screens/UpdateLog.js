import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const UpdateLog = () => {
  const navigation = useNavigation();

  return (

    // <View style={styles.updateLog}>
    <ScrollView
    horizontal={false}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.ordersScrollViewContent}
    style={[styles.orders, styles.ordersSpaceBlock]}
  >
      <View style={styles.frameParent}>
        <View style={styles.arrowLeftSmParent}>
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
          <Text style={[styles.updateLog1, styles.updateFlexBox]}>
            Update log
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.frameContainer}>
              <Text style={[styles.updateStage, styles.updateFlexBox]}>
                Update Stage
              </Text>
              <TextInput style={[styles.frameChild, styles.frameBorder]} />
            </View>
            <View style={styles.logParent}>
              <Text style={[styles.updateStage, styles.updateFlexBox]}>
                Log
              </Text>
              <TextInput
                style={[styles.frameItem, styles.frameBorder]}
                multiline={true}
              />
            </View>
          </View>
          <Pressable style={styles.createWrapper}>
            <Text style={[styles.create, styles.createTypo]}>Create</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  ordersSpaceBlock: {
    backgroundColor: Color.colorWhite,
  },
  orders: {
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
  },
  ordersScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  updateFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameBorder: {
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  createTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  updateLog1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  arrowLeftSmParent: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  updateStage: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    alignSelf: "stretch",
  },
  frameChild: {
    height: responsiveHeight(5.22),
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  frameItem: {
    height: responsiveHeight(55.59),
  },
  logParent: {
    marginTop: responsiveHeight(3.10),
    alignSelf: "stretch",
  },
  create: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    flex: 1,
  },
  createWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    justifyContent: "center",
    // paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(27.36),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameGroup: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  updateLog: {
    paddingHorizontal:responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
});

export default UpdateLog;
