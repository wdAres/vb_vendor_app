import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
} from "react-native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import ProductCard from "../components/ProductCard";

const Dashboard1 = () => {
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
          <Text style={[styles.text, styles.textTypo1]}>24</Text>
          <Text style={[styles.totalOrdersPending, styles.totalTypo]}>
            Total Orders Pending
          </Text>
        </Pressable>
        <Pressable style={[styles.group, styles.groupBorder]}>
          <Text style={[styles.text, styles.textTypo1]}>11</Text>
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
        source={require("../assets/image3.png")}
      />
      <View style={styles.frameContainer}>
        <View style={[styles.newsParent, styles.parentFlexBox]}>
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
          <ProductCard style={styles.productCard} />
          <ProductCard style={styles.productCard} />
          <ProductCard style={styles.productCard} />
          <ProductCard style={styles.productCard} />
          {/* <View style={styles.parentLayout}>
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
            <View style={[styles.offWrapper, styles.offWrapperFlexBox]}>
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
            <View style={[styles.offWrapper, styles.offWrapperFlexBox]}>
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
            <View style={[styles.offWrapper, styles.offWrapperFlexBox]}>
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
            <View style={[styles.offWrapper, styles.offWrapperFlexBox]}>
              <Text style={[styles.off, styles.textTypo]}>48% off</Text>
            </View>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
            <Image
              style={[styles.imagePlaceholderIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-3.png")}
            />
          </View> */}
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
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardLayout: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
  },
  text7Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameViewSpaceBlock: {
    marginTop: responsiveHeight(1.24),
    alignSelf: "stretch",
  },
  groupBorder: {
    paddingVertical: responsiveHeight(1.24),
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  totalTypo: {
    marginTop: responsiveHeight(3.98),
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
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewMoreTypo: {
    marginTop: responsiveHeight(1.49),
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
  offWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameItemPosition: {
    left: 0,
    width: responsiveWidth(42.05),
  },
  parentLayout: {
    height: responsiveHeight(23.38),
    width: responsiveWidth(42.05),
    backgroundColor: Color.colorWhite,
  },
  frameChildLayout: {
    height: responsiveHeight(.62),
    width: responsiveWidth(13.58),
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
  },
  homeTypo: {
    marginTop: responsiveHeight(0.74),
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
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
    color: Color.colorFirebrick_200,
    fontSize: FontSize.size_34xl,
    fontWeight: "500",
    textAlign: "left",
  },
  totalOrdersPending: {
    width: responsiveWidth(24.35),
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  parent: {
    borderColor: Color.colorFirebrick_200,
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhite,
  },
  totalProducts: {
    width: responsiveWidth(19.48),
    color: Color.colorFirebrick_200,
    textAlign: "left",
  },
  group: {
    marginLeft: responsiveWidth(5.12),
    borderColor: Color.colorFirebrick_200,
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: responsiveHeight(3.48),
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
    marginTop: responsiveHeight(3.98),
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  container: {
    backgroundColor: Color.colorThistle,
    borderColor: Color.colorBlueviolet,
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
  },
  text3: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_34xl,
  },
  pendingGroupbuyOrders: {
    width: responsiveWidth(26.41),
    marginTop: responsiveHeight(3.98),
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  framePressable: {
    backgroundColor: Color.colorLavender,
    borderColor: Color.colorCornflowerblue_100,
    marginLeft: responsiveWidth(5.38),
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
  },
  imageIcon: {
    height: responsiveHeight(47.38),
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
  },
  news: {
    fontSize: FontSize.size_smi_9,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChild: {
    width: responsiveWidth(2.82),
    height: responsiveHeight(0.37),
  },
  newsParent: {
    alignItems: "center",
  },
  text4: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_2xs_3,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  doremIpsumDolor: {
    height: responsiveHeight(3.48),
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
    marginTop: responsiveHeight(2.61),
    alignSelf: "stretch",
  },
  frameContainer: {
    borderRadius: 4,
    borderColor: Color.colorGainsboro_200,
    height: responsiveHeight(42.16),
    paddingHorizontal: responsiveWidth(4.61),
    paddingVertical: responsiveHeight(2.61),
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: responsiveHeight(3.48),
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
    height: responsiveHeight(14.80),
    left: 0,
    width: responsiveWidth(42.05),
  },
  rustOleumVarathaneUltra: {
    width: responsiveWidth(33.84),
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
    width: responsiveWidth(8.20),
    height: responsiveHeight(1.61),
    // 
    paddingHorizontal:responsiveWidth(2.56),
    paddingVertical:responsiveHeight(1.24),
    backgroundColor: Color.colorFirebrick_200,
    top: 161,
    position: "absolute",
    flexDirection: "row",
  },
  frameItem: {
    borderRadius: Border.br_8xs,
    borderColor: Color.colorSilver_100,
    top: 0,
    position: "absolute",
    left: 0,
    height: responsiveHeight(23.38),
    borderWidth: 1,
    borderStyle: "solid",
  },
  rustOleumVarathaneUltraThiParent: {
    marginLeft: responsiveWidth(3.33),
  },
  rustOleumVarathaneUltra2: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: responsiveWidth(33.84),
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
    width: responsiveWidth(41.79),
    height: responsiveHeight(14.67),
  },
  frameScrollview: {
    marginTop: responsiveHeight(3.35),
    width: responsiveWidth(100)
  },
  topProductsParent: {
    width: responsiveWidth(86.66),
    marginTop: responsiveHeight(3.48),
  },
  dashboard: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  productCard:{
    marginRight:responsiveWidth(3.33)
  }
});

export default Dashboard1;
