import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";
import useHttp2 from "../../../hooks/useHttp2";

const DB_Tiles = () => {
  const [data, setData] = useState({});
  const { sendRequest, isLoading } = useHttp2();

  const getData = () => {
    sendRequest({ url: "dashboard/tiles" }, (result) => {
      setData(result.data);
    });
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <View>
      <View style={styles.dashboardParent}>
        <Text style={[styles.projectSummary, styles.marginTop]}>
          Project Summary
        </Text>
      </View>
      <View style={styles.frameParent}>
        <Pressable style={[styles.pressable, styles.groupBorder, styles.flex1]}>
          <Text style={[styles.largeText, styles.firebrickText]}>
            {data?.totalOrders ?? "0"}
          </Text>
          <Text style={[styles.my_text, styles.firebrickText]}>
            Total Orders
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressable,
            styles.groupBorder,
            styles.flex1,
            styles.marginLeft,
          ]}
        >
          <Text style={[styles.largeText, styles.firebrickText]}>
            {data?.todayOrders ?? "0"}
          </Text>
          <Text style={[styles.my_text, styles.firebrickText]}>
            Today Orders
          </Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <Pressable
          style={[
            styles.pressable,
            styles.groupBorder,
            styles.flex1,
            styles.thistleBg,
          ]}
        >
          <Text style={[styles.largeText, styles.bluevioletText]}>
            {data?.totalSales ?? 0}
          </Text>
          <Text style={[styles.my_text, styles.bluevioletText]}>
            Total Sales ($)
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressable,
            styles.groupBorder,
            styles.flex1,
            styles.marginLeft,
            styles.lavenderBg,
          ]}
        >
          <Text style={[styles.largeText, styles.cornflowerblueText]}>
            {data?.todaySales ?? 0}
          </Text>
          <Text style={[styles.my_text, styles.cornflowerblueText]}>
            Today Sales ($)
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardParent: {
    alignSelf: "stretch",
  },
  dashboardText: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
  },
  projectSummary: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  marginLeft: {
    marginLeft: responsiveWidth(5.12),
  },
  frameParent: {
    marginTop: responsiveHeight(2.48),
    gap: responsiveWidth(2.48),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  pressable: {
    paddingVertical: responsiveHeight(1.24),
    paddingHorizontal: responsiveWidth(3.58),
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  groupBorder: {
    borderColor: Color.colorFirebrick_200,
  },
  flex1: {
    flex: 1,
  },
  largeText: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_34xl,
  },
  firebrickText: {
    color: Color.colorFirebrick_200,
    textAlign: "left",
    // width:responsiveWidth(20.51)
  },
  bluevioletText: {
    color: Color.colorBlueviolet,
    textAlign: "left",
  },
  cornflowerblueText: {
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
  },
  totalOrdersPending: {
    width: responsiveWidth(24.35),
  },
  totalProducts: {
    width: responsiveWidth(19.48),
  },
  pendingOrders: {
    width: responsiveWidth(26.41),
  },
  thistleBg: {
    backgroundColor: Color.colorThistle,
    borderColor: Color.colorBlueviolet,
  },
  lavenderBg: {
    backgroundColor: Color.colorLavender,
    borderColor: Color.colorCornflowerblue_100,
  },

  my_text: {
    fontWeight: "600",
    fontSize: responsiveHeight(1.49),
    marginTop: responsiveHeight(4.97),
  },
});

export default DB_Tiles;
