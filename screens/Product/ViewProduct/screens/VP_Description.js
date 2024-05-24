import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../../../../components/Container/Container";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import moment from "moment";

const VP_Description = ({ data }) => {


    
  return (
    <>
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Description</Text>
        <Text style={[styles.icr_left, styles.font_1]}>
          {data?.description}
        </Text>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Specifications</Text>
        <View style={[styles.inner_container]}>
            {data?.specs.map(element=>(
            <View  style={[styles.inner_container_row,styles.column]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                {element.label}
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
               {element.value}
              </Text>
            </View>
            ))}
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Dimensons</Text>
        <View style={[styles.inner_container]}>
            {data?.dimensions.map(element=>(
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                {element.name}
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
               {element.value}
              </Text>
            </View>
            ))}
        </View>
      </Container>
    </>
  );
};

export default VP_Description;

const styles = StyleSheet.create({
  container_1: {
    padding: responsiveHeight(1.86),
    gap: responsiveHeight(1.86),
    flexDirection: "column",
  },
  heading: {
    fontSize: responsiveHeight(1.49),
    color: "#000",
    fontWeight: "600",
  },
  inner_container: {
    flexDirection: "column",
    gap: responsiveHeight(1.24),
  },
  inner_container_row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  font_1: {
    fontWeight: "500",
    fontSize: responsiveHeight(1.24),
  },
  icr_left: {
    color: "#898989",
  },
  icr_right: {
    color: "#000",
  },
  column: {
    flexDirection: "column",
    gap: 10,
  },
  tags_container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  tag: {
    minWidth: responsiveWidth(13.33),
    paddingHorizontal: 10,
    backgroundColor: "#ececec",
    fontSize: responsiveHeight(0.99),
    textAlign: "center",
    paddingVertical: responsiveHeight(1.0),
    borderRadius: 3,
    fontWeight: "500",
    color: "#333",
  },
  photo: {
    borderRadius: 5,
  },
  photos_container: {},
  photos_container_inner: {
    gap: 10,
    flexDirection: "row",
  },
  red: {
    color: "#AE0000",
    backgroundColor: "#FFEDED",
    padding: 5,
    borderRadius: 3,
  },
  green: {
    color: "#13CF5B",
    backgroundColor: "#D9FFE7",
    padding: 5,
    borderRadius: 3,
  },
});
