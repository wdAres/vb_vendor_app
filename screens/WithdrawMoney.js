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
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const WithdrawMoney = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.withdrawMoney}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.withdrawMoneyScrollViewContent}
    >
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
              <Text style={[styles.withdrawMoney1, styles.withdrawTypo]}>
                Withdraw money
              </Text>
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.centerDiv}>
              <TextInput
                style={[styles.frameChild, styles.frameChildFlexBox]}
                placeholder="0"
                keyboardType="number-pad"
                placeholderTextColor="#8f9095"
              />
              {/* <Text style={styles.dollar}>
                $
              </Text> */}
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <Pressable style={styles.wrapperFlexBox}>
                  <Text style={styles.text}>$500</Text>
                </Pressable>
                <Pressable style={[styles.container, styles.wrapperFlexBox]}>
                  <Text style={styles.text}>$1000</Text>
                </Pressable>
                <Pressable style={[styles.container, styles.wrapperFlexBox]}>
                  <Text style={styles.text}>$1500</Text>
                </Pressable>
              </View>
              <View style={styles.frameParent2}>
                <Pressable style={styles.wrapperFlexBox}>
                  <Text style={styles.text}>$2000</Text>
                </Pressable>
                <Pressable style={[styles.container, styles.wrapperFlexBox]}>
                  <Text style={styles.text}>$2500</Text>
                </Pressable>
                <Pressable style={[styles.container, styles.wrapperFlexBox]}>
                  <Text style={styles.text}>$3000</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Pressable style={[styles.withdrawWrapper, styles.frameChildFlexBox]}>
          <Text style={[styles.withdraw, styles.withdrawTypo]}>Withdraw</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  withdrawMoneyScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  withdrawTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameChildFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.24),
    backgroundColor: Color.colorWhitesmoke_500,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: 24,
    height: 24,
  },
  withdrawMoney1: {
    color: Color.colorBlack,
    marginLeft: responsiveHeight(2.56),
    textAlign: "left",
    fontSize: FontSize.size_lg,
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
  frameChild: {
    fontFamily: FontFamily.interRegular,
    fontSize: responsiveHeight(9.95),
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  container: {
    marginLeft: responsiveWidth(4.1),
  },
  frameParent1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent2: {
    marginTop: responsiveHeight(1.99),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    marginTop: responsiveHeight(7.08),
    alignSelf: "stretch",
  },
  frameContainer: {
    marginTop: responsiveHeight(6.09),
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  withdraw: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
  },
  withdrawWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick_200,
    // paddingHorizontal: Padding.p_131xl,
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(61.94),
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent: {
    flex: 1,
  },
  withdrawMoney: {
    backgroundColor: Color.colorWhite,
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  centerDiv: {
    alignItems: "center",
    justifyContent: "center",
  },
  dollar : {
    color:'#8F9095',
    fontSize:responsiveHeight(2.48),
    fontWeight:'600',
    position:'absolute',
    left:responsiveWidth(10.25),
    top:10
  }
});

export default WithdrawMoney;
