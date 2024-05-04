import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const ShopSetting = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.shopSetting}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.shopSettingScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <Pressable
            style={[styles.arrowLeftSmParent, styles.frameWrapperFlexBox]}
          >
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
            <Text style={[styles.shopSetting1, styles.saveTypo]}>
              Shop Setting
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.basicInfoParent}>
            <Text style={[styles.basicInfo, styles.saveTypo]}>Basic Info</Text>
            <View style={styles.frameContainer}>
              <View style={styles.basicInfoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Shop Name
                </Text>
                <TextInput
                  style={[styles.frameChild, styles.frameChildBorder]}
                  placeholder="Type name"
                  placeholderTextColor="#8f9095"
                />
              </View>
              <View style={styles.shopLogoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Shop Logo
                </Text>
                <Pressable
                  style={[styles.framePressable, styles.frameChildBorder]}
                >
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.upload, styles.uploadTypo]}>
                      Upload
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.shopLogoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Shop Phone
                </Text>
                <TextInput
                  style={[styles.frameChild, styles.frameChildBorder]}
                  placeholder="Type Phone"
                  placeholderTextColor="#8f9095"
                />
              </View>
              <View style={styles.shopLogoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Shop Address
                </Text>
                <TextInput
                  style={[styles.frameInner, styles.frameChildBorder]}
                  placeholder="Type Address"
                  multiline={true}
                  placeholderTextColor="#8f9095"
                />
              </View>
              <View style={styles.shopLogoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Meta Title
                </Text>
                <TextInput
                  style={[styles.rectangleTextinput, styles.frameChildBorder]}
                />
              </View>
              <View style={styles.shopLogoParent}>
                <Text style={[styles.shopName, styles.uploadTypo]}>
                  Meta Description
                </Text>
                <TextInput
                  style={[styles.frameChild1, styles.frameChildBorder]}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.saveWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("ShopSetting1")}
          >
            <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shopSettingScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  uploadTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameChildBorder: {
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveWidth(6.15),
    height: responsiveHeight(2.98),
  },
  shopSetting1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
  },
  frameWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  basicInfo: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  shopName: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameChild: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.33),
    marginTop: responsiveHeight(0.87),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  basicInfoParent: {
    alignSelf: "stretch",
  },
  upload: {
    color: Color.colorGray_100,
  },
  uploadWrapper: {
    borderTopLeftRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_600,
    paddingHorizontal: responsiveWidth(4.10),
    paddingVertical: responsiveHeight(1.49),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    justifyContent: "center",
  },
  framePressable: {
    overflow: "hidden",
  },
  shopLogoParent: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  frameInner: {
    height: responsiveHeight(10.44),
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.33),
    marginTop: responsiveHeight(0.87),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  rectangleTextinput: {
    height: responsiveHeight(5.22),
  },
  frameChild1: {
    height: responsiveHeight(10.69),
  },
  frameContainer: {
    marginTop: responsiveHeight(4.10),
    alignSelf: "stretch",
  },
  save: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  saveWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(26.61),
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: responsiveHeight(2.61),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  shopSetting: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ShopSetting;
