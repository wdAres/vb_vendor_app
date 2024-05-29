import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Border, Color, FontSize } from "../GlobalStyles";

const ToggleBtns = ({ data , onPress }) => {
  const [currentSelected, setCurrentSelected] = useState("");

  const handlePress = (value) => {
    let inp = value;
    if (value === currentSelected) {
      inp = "";
    }
    onPress(inp)
    setCurrentSelected(inp);
  };

  // const data = [
  //   { label: "Group Buy", value: "groupBy" },
  //   { label: "Instabuild", value: "instabuild" },
  //   { label: "Cancel orders", value: "cancel_orders" },
  //   { label: "In Transit", value: " in_transit" },
  //   { label: "Group Buy", value: "groupBy" },
  //   { label: "Instabuild", value: "instabuild" },
  //   { label: "Cancel orders", value: "cancel_orders" },
  //   { label: "In Transit", value: " in_transit" },
  // ];

  const PressableBtn = ({ value, label }) => {
    return (
      <Pressable
        onPress={() => handlePress(value)}
        style={[styles.btn, value === currentSelected && styles.active_btn]}
      >
        <Text
          style={[
            styles.btn_text,
            value === currentSelected && styles.btn_text_active,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <ScrollView
      style={styles.scrollview_style}
      contentContainerStyle={styles.container_style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {data.map((element, index) => (
        <PressableBtn {...element} key={index} />
      ))}
    </ScrollView>
  );
};

export default ToggleBtns;

const styles = StyleSheet.create({
  scrollview_style: {},
  container_style: {
    gap: responsiveWidth(5.12),
    alignItems: "center",
  },
  btn: {
    minWidth: responsiveWidth(37.17),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: responsiveWidth(2.56),
    borderRadius: Border.br_8xs,
    height: responsiveHeight(5.22),
    backgroundColor: Color.colorWhitesmoke_100,
  },
  active_btn: {
    backgroundColor: Color.colorFirebrick_200,
  },
  btn_text: {
    fontWeight: "400",
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
  },
  btn_text_active: {
    color: "white",
  },
});
