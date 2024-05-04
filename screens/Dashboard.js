import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
} from "react-native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <ScrollView
      style={[styles.dashboard, styles.dashboardLayout]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dashboardScrollViewContent}
    >
      <View style={styles.dashboardParent}>
        <Text style={[styles.dashboard1, styles.text7Typo]}>Dashboard</Text>
        <Text style={[styles.projectSummary, styles.frameViewSpaceBlock]}>
          Project Summary
        </Text>
      </View>
      <View style={styles.frameParent}>
        <Pressable style={[styles.parent, styles.groupBorder]}>
          <Text style={[styles.text, styles.totalClr]}>24</Text>
          <Text style={[styles.totalOrdersPending, styles.totalTypo]}>
            Total Orders Pending
          </Text>
        </Pressable>
        <Pressable style={[styles.group, styles.groupBorder]}>
          <Text style={[styles.text, styles.totalClr]}>11</Text>
          <Text style={[styles.totalProducts, styles.totalTypo]}>
            Total Products
          </Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <Pressable style={[styles.container, styles.groupBorder]}>
          <Text style={[styles.text2, styles.text2Clr]}>09</Text>
          <Text style={[styles.pendingInstabuildOrders, styles.text2Clr]}>
            Pending Instabuild Orders
          </Text>
        </Pressable>
        <Pressable style={[styles.framePressable, styles.groupBorder]}>
          <Text style={[styles.text3, styles.text3Clr]}>02</Text>
          <Text style={[styles.pendingGroupbuyOrders, styles.text3Clr]}>
            Pending Groupbuy Orders
          </Text>
        </Pressable>
      </View>
      <Image
        style={[styles.imageIcon, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.frameContainer}>
        <View style={styles.newsParent}>
          <Text style={[styles.news, styles.textTypo1]}>News</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-250.png")}
          />
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <View style={styles.dashboardParent}>
            <Text style={styles.text4}>20/8/2023</Text>
            <Text style={[styles.doremIpsumDolor, styles.viewMoreTypo]}>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
            <Text style={[styles.viewMore, styles.viewMoreTypo]}>
              View More
            </Text>
          </View>
          <View style={styles.parent2}>
            <Text style={styles.text4}>20/8/2023</Text>
            <Text style={[styles.doremIpsumDolor, styles.viewMoreTypo]}>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
            <Text style={[styles.viewMore, styles.viewMoreTypo]}>
              View More
            </Text>
          </View>
          <View style={styles.parent2}>
            <Text style={styles.text4}>20/8/2023</Text>
            <Text style={[styles.doremIpsumDolor, styles.viewMoreTypo]}>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
            <Text style={[styles.viewMore, styles.viewMoreTypo]}>
              View More
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.topProductsParent}>
        <Text style={styles.topProducts}>Top products</Text>
        <ScrollView
          style={styles.frameScrollview}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.parentLayout}>
            <Image
              style={[styles.imagePlaceholderIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-placeholder.png")}
            />
            <Text style={styles.rustOleumVarathaneUltra}>
              Rust-Oleum varathane ultra thick floor finishi..
            </Text>
            <Text style={[styles.text7, styles.textPosition]}>$999</Text>
            <Text style={[styles.text8, styles.textTypo]}>$1,800</Text>
            <View style={[styles.offWrapper, styles.text8Position]}>
              <Text style={[styles.off, styles.textTypo]}>48% off</Text>
            </View>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
          </View>
          <View
            style={[
              styles.rustOleumVarathaneUltraThiParent,
              styles.parentLayout,
            ]}
          >
            <Text style={styles.rustOleumVarathaneUltra}>
              Rust-Oleum varathane ultra thick floor finishi..
            </Text>
            <Text style={[styles.text7, styles.textPosition]}>$999</Text>
            <Text style={[styles.text8, styles.textTypo]}>$1,800</Text>
            <View style={[styles.offWrapper, styles.text8Position]}>
              <Text style={[styles.off, styles.textTypo]}>48% off</Text>
            </View>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
            <Image
              style={[styles.imagePlaceholderIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-placeholder1.png")}
            />
          </View>
          <View
            style={[
              styles.rustOleumVarathaneUltraThiParent,
              styles.parentLayout,
            ]}
          >
            <Text style={styles.rustOleumVarathaneUltra2}>
              Rust-Oleum varathane ultra thick floor finishi..
            </Text>
            <Text style={[styles.text11, styles.textTypo]}>$999</Text>
            <Text style={[styles.text8, styles.textTypo]}>$1,800</Text>
            <View style={[styles.offWrapper, styles.text8Position]}>
              <Text style={[styles.off, styles.textTypo]}>48% off</Text>
            </View>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
            <Image
              style={[styles.image1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
          </View>
          <View
            style={[
              styles.rustOleumVarathaneUltraThiParent,
              styles.parentLayout,
            ]}
          >
            <Text style={styles.rustOleumVarathaneUltra2}>
              Rust-Oleum varathane ultra thick floor finishi..
            </Text>
            <Text style={[styles.text11, styles.textTypo]}>$999</Text>
            <Text style={[styles.text8, styles.textTypo]}>$1,800</Text>
            <View style={[styles.offWrapper, styles.text8Position]}>
              <Text style={[styles.off, styles.textTypo]}>48% off</Text>
            </View>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
            <Image
              style={[styles.imagePlaceholderIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-3.png")}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text7Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameViewSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  groupBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  totalClr: {
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  totalTypo: {
    marginTop: 32,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text2Clr: {
    color: Color.colorBlueviolet,
    textAlign: "left",
  },
  text3Clr: {
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  viewMoreTypo: {
    marginTop: 12,
    fontSize: FontSize.size_2xs_3,
    textAlign: "left",
  },
  iconPosition: {
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    color: Color.black,
    fontSize: FontSize.size_mini,
    top: 158,
    left: 16,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  text8Position: {
    top: 161,
    position: "absolute",
  },
  frameItemPosition: {
    left: 0,
    width: 164,
  },
  parentLayout: {
    height: 188,
    width: 164,
    backgroundColor: Color.colorWhite,
  },
  dashboard1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  projectSummary: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  dashboardParent: {
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_34xl,
  },
  totalOrdersPending: {
    width: 95,
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  parent: {
    borderColor: Color.colorFirebrick_200,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhite,
  },
  totalProducts: {
    width: 76,
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  group: {
    marginLeft: 20,
    borderColor: Color.colorFirebrick_200,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 28,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text2: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_34xl,
  },
  pendingInstabuildOrders: {
    width: 106,
    marginTop: 32,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  container: {
    backgroundColor: Color.colorThistle,
    borderColor: Color.colorBlueviolet,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_4xs,
  },
  text3: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_34xl,
  },
  pendingGroupbuyOrders: {
    width: 103,
    marginTop: 32,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  framePressable: {
    backgroundColor: Color.colorLavender,
    borderColor: Color.colorCornflowerblue_100,
    marginLeft: 21,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_4xs,
  },
  imageIcon: {
    height: 381,
    marginTop: 28,
    alignSelf: "stretch",
  },
  news: {
    fontSize: FontSize.size_smi_9,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChild: {
    width: 11,
    height: 3,
  },
  newsParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text4: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_2xs_3,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  doremIpsumDolor: {
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  viewMore: {
    textDecoration: "underline",
    color: Color.colorFirebrick_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  parent2: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  frameContainer: {
    borderRadius: 4,
    borderColor: Color.colorGainsboro_200,
    height: 339,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_2xl,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 28,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  topProducts: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  imagePlaceholderIcon: {
    height: 119,
    left: 0,
    width: 164,
  },
  rustOleumVarathaneUltra: {
    width: 132,
    left: 16,
    top: 124,
    position: "absolute",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text7: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text8: {
    left: 59,
    textDecoration: "line-through",
    color: Color.colorSilver_200,
    top: 161,
    position: "absolute",
    fontSize: FontSize.size_3xs,
  },
  off: {
    fontSize: FontSize.size_7xs,
    color: Color.colorWhite,
  },
  offWrapper: {
    left: 98,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorFirebrick_200,
    width: 32,
    height: 13,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameItem: {
    borderRadius: Border.br_8xs,
    borderColor: Color.colorSilver_100,
    top: 0,
    position: "absolute",
    left: 0,
    height: 188,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rustOleumVarathaneUltraThiParent: {
    marginLeft: 13,
  },
  rustOleumVarathaneUltra2: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 132,
    left: 16,
    top: 124,
    position: "absolute",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text11: {
    color: Color.black,
    fontSize: FontSize.size_mini,
    top: 158,
    left: 16,
    position: "absolute",
  },
  image1Icon: {
    left: 1,
    width: 163,
    height: 118,
  },
  frameScrollview: {
    marginTop: 27,
    width: "100%",
  },
  topProductsParent: {
    width: 338,
    marginTop: 28,
  },
  dashboard: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default Dashboard;
