import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Reviews = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.reviews, styles.reviewsBg]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.reviewsScrollViewContent}
    >
      <View style={styles.frameParent}>
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
            <Text style={[styles.productReviews, styles.offTypo]}>
              Product Reviews
            </Text>
          </Pressable>
        </View>
        <View style={styles.productParent}>
          <Text style={[styles.product, styles.qoremTypo]}>{`Product 
`}</Text>
          <View
            style={[styles.imagePlaceHolderParent, styles.frameChildBorder]}
          >
            <ImageBackground
              style={styles.imagePlaceHolder}
              resizeMode="cover"
              source={require("../assets/imageplaceholder1.png")}
            />
            <View style={styles.pearlBeadingTexturParent}>
              <Text style={[styles.pearlBeadingTextur, styles.offTypo]}>
                Pearl Beading Textured Faux Fur Furnitures
              </Text>
              <View style={[styles.starsParent, styles.frameGroupSpaceBlock]}>
                <Image
                  style={styles.starsIcon}
                  resizeMode="cover"
                  source={require("../assets/stars.png")}
                />
                <Text style={[styles.reviews1, styles.text1Typo]}>
                  480+ Reviews
                </Text>
              </View>
              <View style={styles.frameGroupSpaceBlock}>
                <View style={[styles.offWrapper, styles.offWrapperFlexBox]}>
                  <Text style={[styles.off, styles.offTypo]}>2 % off</Text>
                </View>
                <Text style={[styles.text, styles.textSpaceBlock]}>$1399</Text>
                <Text style={[styles.text1, styles.textSpaceBlock]}>$1299</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <View style={styles.productParent}>
            <View style={styles.frameParent}>
              <View style={styles.frameWrapper}>
                <View style={styles.starParent}>
                  <Image
                    style={styles.frameItem}
                    resizeMode="cover"
                    source={require("../assets/star-16.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-17.png")}
                  />
                  <Image
                    style={[styles.starIcon, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-18.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-17.png")}
                  />
                  <Image
                    style={[styles.frameChild2, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-20.png")}
                  />
                </View>
                <Text style={styles.fabulousTypo}>Fabulous !</Text>
              </View>
              <Text style={[styles.qoremIpsumDolor, styles.qoremTypo]}>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex.
              </Text>
            </View>
            <View style={styles.parentFlexBox}>
              <ImageBackground
                style={styles.frameChild3Layout}
                resizeMode="cover"
                source={require("../assets/rectangle4424.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4425.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4426.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4427.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4428.png")}
              />
            </View>
            <View
              style={[styles.nishantChoudharyDelhiParent, styles.parentFlexBox]}
            >
              <Text style={[styles.nishantChoudharyDelhi, styles.verifiedTypo]}>
                Nishant Choudhary, Delhi
              </Text>
              <View style={[styles.verifiedParent, styles.offWrapperFlexBox]}>
                <Text style={[styles.verified, styles.verifiedTypo]}>
                  Verified
                </Text>
                <Image
                  style={styles.checkIcon}
                  resizeMode="cover"
                  source={require("../assets/check.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <View style={styles.productParent}>
            <View style={styles.frameParent}>
              <View style={styles.frameWrapper}>
                <View style={styles.starParent}>
                  <Image
                    style={styles.frameItem}
                    resizeMode="cover"
                    source={require("../assets/star-11.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.starIcon, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-13.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.frameChild2, styles.frameSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/star-15.png")}
                  />
                </View>
                <Text style={[styles.fabulous1, styles.fabulousTypo]}>
                  Fabulous !
                </Text>
              </View>
              <Text
                style={[styles.qoremIpsumDolor1, styles.qoremTypo]}
              >{`Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. `}</Text>
            </View>
            <View style={styles.groupFlexBox}>
              <ImageBackground
                style={styles.frameChild3Layout}
                resizeMode="cover"
                source={require("../assets/rectangle4429.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4430.png")}
              />
              <ImageBackground
                style={[styles.frameChild3, styles.frameChild3Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle4431.png")}
              />
            </View>
            <View
              style={[styles.nishantChoudharyDelhiGroup, styles.groupFlexBox]}
            >
              <Text style={[styles.nishantChoudharyDelhi, styles.verifiedTypo]}>
                Nishant Choudhary, Delhi
              </Text>
              <View style={[styles.verifiedParent, styles.offWrapperFlexBox]}>
                <Text style={[styles.verified, styles.verifiedTypo]}>
                  Verified
                </Text>
                <Image
                  style={styles.checkIcon}
                  resizeMode="cover"
                  source={require("../assets/check1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reviewsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  reviewsBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  offTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  qoremTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameChildBorder: {
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: 23,
    alignSelf: "stretch",
  },
  frameGroupSpaceBlock: {
    marginTop: 9,
    flexDirection: "row",
  },
  text1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  offWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textSpaceBlock: {
    marginLeft: 5,
    textAlign: "left",
  },
  frameSpaceBlock: {
    marginLeft: 1,
    height: 19,
  },
  frameChild3Layout: {
    height: 46,
    width: 46,
  },
  parentFlexBox: {
    marginTop: 11,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  verifiedTypo: {
    fontSize: FontSize.size_3xs_5,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  fabulousTypo: {
    marginLeft: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupFlexBox: {
    marginTop: 12,
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
  productReviews: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  product: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  imagePlaceHolder: {
    borderRadius: Border.br_5xs,
    width: 80,
    height: 85,
  },
  pearlBeadingTextur: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
  },
  starsIcon: {
    width: 71,
    height: 15,
  },
  reviews1: {
    color: Color.black,
    marginLeft: 9,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    flex: 1,
  },
  starsParent: {
    width: 163,
  },
  off: {
    fontSize: FontSize.size_5xs,
    color: Color.colorMediumseagreen_100,
  },
  offWrapper: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorPaleturquoise,
    width: 45,
    padding: Padding.p_3xs,
    height: 19,
  },
  text: {
    textDecoration: "line-through",
    color: Color.colorGray_200,
    display: "flex",
    width: 40,
    fontFamily: FontFamily.interRegular,
    height: 19,
    fontSize: FontSize.size_smi,
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  pearlBeadingTexturParent: {
    marginLeft: 10,
    flex: 1,
  },
  imagePlaceHolderParent: {
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    height: 121,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    borderTopWidth: 0.9,
    height: 1,
  },
  frameItem: {
    width: 17,
    height: 19,
  },
  frameInner: {
    width: 18,
  },
  starIcon: {
    width: 19,
  },
  frameChild2: {
    width: 17,
  },
  starParent: {
    flexDirection: "row",
  },
  qoremIpsumDolor: {
    marginTop: 13,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  frameChild3: {
    marginLeft: 7,
  },
  nishantChoudharyDelhi: {
    color: Color.colorBlack,
  },
  verified: {
    color: Color.colorDarkgray_400,
  },
  checkIcon: {
    width: 11,
    height: 11,
    marginLeft: 2.8,
  },
  verifiedParent: {
    borderRadius: 6,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 21,
    padding: 9,
    marginLeft: 7,
  },
  nishantChoudharyDelhiParent: {
    alignItems: "center",
  },
  productParent: {
    marginTop: 23,
    alignSelf: "stretch",
  },
  fabulous1: {
    flex: 1,
  },
  qoremIpsumDolor1: {
    marginTop: 17,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  nishantChoudharyDelhiGroup: {
    alignItems: "center",
  },
  reviews: {
    width: 390,
    maxWidth: 390,
    flex: 1,
  },
});

export default Reviews;
