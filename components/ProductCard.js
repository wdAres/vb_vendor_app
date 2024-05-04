import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const ProductCard = ({ style }) => {

  const navigation = useNavigation()

    const handlePress = () => navigation.navigate('ProductsDetails')
  return (
    <Pressable onPress={handlePress}>
      <View style={[classes.card, style]}>
        <Image
          style={[classes.image]}
          source={require("../assets/image-placeholder1.png")}
        />
        <View style={[classes.cardBody]}>
          <Text style={[classes.title]}>
            Rust-Oleum varathane ultra thick floor finishi..
          </Text>
          <View style={[classes.my_flex]}>
            <Text style={[classes.discount]}>$999</Text>
            <Text style={[classes.price]}>$1,999</Text>
            <View style={[classes.tag]}>
              <Text style={[classes.tagText]}>45%</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const classes = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderColor: "#C6C5C5",
    borderWidth: 1,
    borderStyle: "solid",
    width: responsiveWidth(42.05),
  },
  image: {
    width: '100%',
    height: responsiveHeight(14.8),
  },
  cardBody: {
    paddingHorizontal: responsiveWidth(2.56),
    paddingTop: responsiveHeight(0.62),
    paddingBottom: responsiveHeight(1.49),
  },
  title: {
    width: "100%",
    color: "black",
    fontSize: responsiveHeight(1.24),
  },
  my_flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveHeight(1.61),
  },
  discount: {
    color: "#303030",
    fontSize: responsiveHeight(1.86),
    fontWeight: "600",
  },
  price: {
    color: "#C1C1C1",
    fontSize: responsiveHeight(1.24),
    fontWeight: "600",
    marginHorizontal: responsiveWidth(1.02),
  },
  tag: {
    width: responsiveWidth(8.2),
    height: responsiveHeight(1.61),
    // paddingHorizontal: responsiveWidth(2.56),
    // paddingVertical: responsiveHeight(1.24),
    // width:'auto',
    backgroundColor: "#AE0000",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  tagText: {
    color: "white",
    fontSize: responsiveHeight(0.74),
  },
});

export default ProductCard;
