import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SearchBar = ({ placeholder = null , onSearch }) => {
  const [query, setQuery] = useState("");

  let ph = placeholder ?? "Search items";

  const handleSearch = text => {
    setQuery(text)
    onSearch(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={(text) => handleSearch(text)}
        placeholder={ph}
      />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/search01.png")}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position:'relative'
  },
  input: {
    paddingHorizontal: responsiveWidth(2.82),
    paddingVertical: responsiveHeight(1.24),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    color: "#b9b9b9",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  icon: {
    position:'absolute',
    right:responsiveWidth(2.56),
    top:responsiveHeight(1.86),
    width: responsiveHeight(2.23),
    height: responsiveHeight(2.23),
  },
});
