import React, { useState } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ShopSetting1 = () => {
  const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.shopSetting2}>
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
          <Text style={[styles.shopSetting, styles.createTypo]}>
            Shop Setting
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.deliveryBoyPickupPointParent}>
            <Text style={[styles.deliveryBoyPickup, styles.createTypo]}>
              Delivery Boy Pickup Point
            </Text>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View>
                <Checkbox
                  status={frameCheckboxchecked ? "checked" : "unchecked"}
                  onPress={() => setFrameCheckboxchecked(!frameCheckboxchecked)}
                  color="#ae0000"
                />
              </View>
              <Text style={[styles.sameAsShop, styles.typeTypo]}>
                Same as Shop Address
              </Text>
            </View>
            <View style={styles.frameSpaceBlock}>
              <View style={styles.deliveryBoyPickupPointParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Pickup Address
                </Text>
                <View style={[styles.typeWrapper, styles.frameWrapperBorder]}>
                  <Text style={[styles.type, styles.typeTypo]}>Type</Text>
                </View>
              </View>
              <View style={styles.availableHoursParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Available hours
                </Text>
                <View style={[styles.frameChild, styles.frameWrapperBorder]} />
              </View>
            </View>
          </View>
          <View style={styles.createWrapperSpaceBlock}>
            <Text style={[styles.deliveryBoyPickup, styles.createTypo]}>
              Banner Settings
            </Text>
            <View style={styles.availableHoursParent}>
              <View style={styles.deliveryBoyPickupPointParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Top Banner (1920x360)
                </Text>
                <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.type, styles.typeTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sliderBanners1500x450Parent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Slider Banners (1500x450)
                </Text>
                <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.type, styles.typeTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sliderBanners1500x450Parent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Banner Full width 1
                </Text>
                <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.type, styles.typeTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sliderBanners1500x450Parent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Banner half width (2 Equal Banners)
                </Text>
                <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.type, styles.typeTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sliderBanners1500x450Parent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Banner full width 2
                </Text>
                <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.type, styles.typeTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.createWrapperSpaceBlock}>
            <Text style={[styles.deliveryBoyPickup, styles.createTypo]}>
              Social Media Link
            </Text>
            <View style={styles.frameParent2}>
              <View style={styles.deliveryBoyPickupPointParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Facebook
                </Text>
                <View style={[styles.linkWrapper, styles.frameWrapperBorder]}>
                  <Text style={[styles.type, styles.typeTypo]}>Link</Text>
                </View>
              </View>
              <View style={styles.availableHoursParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Instagram
                </Text>
                <View style={[styles.linkWrapper, styles.frameWrapperBorder]}>
                  <Text style={[styles.type, styles.typeTypo]}>Link</Text>
                </View>
              </View>
              <View style={styles.availableHoursParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Twitter
                </Text>
                <View style={[styles.linkWrapper, styles.frameWrapperBorder]}>
                  <Text style={[styles.type, styles.typeTypo]}>Link</Text>
                </View>
              </View>
              <View style={styles.availableHoursParent}>
                <Text style={[styles.pickupAddress, styles.typeTypo]}>
                  Youtube
                </Text>
                <View style={[styles.linkWrapper1, styles.frameWrapperBorder]}>
                  <Text style={[styles.type, styles.typeTypo]}>Link</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.createWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.create, styles.createTypo]}>Create</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  typeTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameWrapperBorder: {
    marginTop: 7,
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
    width: 24,
    height: 24,
  },
  shopSetting: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  deliveryBoyPickup: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    alignSelf: "stretch",
  },
  sameAsShop: {
    marginLeft: 15,
    color: Color.colorBlack,
  },
  frameContainer: {
    flexDirection: "row",
  },
  pickupAddress: {
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  type: {
    color: Color.colorGray_100,
  },
  typeWrapper: {
    height: 105,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_smi,
    marginTop: 7,
    flexDirection: "row",
    overflow: "hidden",
  },
  deliveryBoyPickupPointParent: {
    alignSelf: "stretch",
  },
  frameChild: {
    height: 42,
  },
  availableHoursParent: {
    marginTop: 25,
    alignSelf: "stretch",
  },
  uploadWrapper: {
    borderTopLeftRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_600,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    justifyContent: "center",
  },
  frameWrapper: {
    overflow: "hidden",
  },
  sliderBanners1500x450Parent: {
    marginTop: 31,
    alignSelf: "stretch",
  },
  createWrapperSpaceBlock: {
    marginTop: 53,
    alignSelf: "stretch",
  },
  linkWrapper: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_smi,
    marginTop: 7,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  linkWrapper1: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_smi,
    marginTop: 7,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  frameParent2: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  create: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  createWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    paddingHorizontal: Padding.p_131xl,
    paddingVertical: Padding.p_mid,
    marginTop: 53,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: Border.br_8xs,
  },
  frameGroup: {
    marginTop: 28,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  shopSetting2: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_40xl,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ShopSetting1;
