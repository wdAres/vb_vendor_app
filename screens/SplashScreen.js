import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/core";

export default function SplashScreen() {

    const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.screen}
        source={require("../assets/splashScreen.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
});
