import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../../../../components/Container/Container";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import moment from "moment";

const VP_OtherDetails = ({ data }) => {

  const arr2 = [
    { label: "Min Order", value: data?.groupByMinOrder },
    { label: "Order Reach", value: data?.groupByOrderReach },
    { label: `Discount Value`, value: data?.groupByDiscount },
    { label: "Discount Type", value: data?.groupByDiscountType },
    {
      label: "Start Date",
      value: moment(data?.groupByStartDate).format("ll"),
    },
    {
      label: "End Date",
      value: moment(data?.groupByEndDate).format("ll"),
    },
  ];

  return (
    <>
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Taxes</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                PST
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {data?.pst}
              </Text>
            </View>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                GST
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {data?.gst}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Estimate Shipping Time</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Days
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {data?.estDeliveryDate}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Cash on Delivery</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Cash On Delivery
              </Text>
              <Text style={[styles.icr_right, styles.font_1 , data?.cod ? styles.green : styles.red]}>
                {data?.cod ? 'on' : 'off'}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Stock Visibility State</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Stock Visibile
              </Text>
              <Text style={[styles.icr_right, styles.font_1 , data?.stockVisibility ? styles.green : styles.red]}>
                {data?.stockVisibility ? 'on' : 'off'}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Category</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Group Buy
              </Text>
              <Text style={[styles.icr_right, styles.font_1 , data?.groupBy ? styles.green : styles.red]}>
                {data?.groupBy ? 'on' : 'off'}
              </Text>
            </View>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Instabuild
              </Text>
              <Text style={[styles.icr_right, styles.font_1 , data?.instabuild ? styles.green : styles.red]}>
                {data?.instabuild ? 'on' : 'off'}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Shipping Configuration</Text>
        <View style={[styles.inner_container]}>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Shipping Type
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
              {data?.shipping?.type}
              </Text>
            </View>
            <View  style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
              Shipping Fee
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {data?.shipping?.fee}
              </Text>
            </View>
        </View>
      </Container>
      {/*  */}
      {data?.groupBy  &&
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Product Group Buy</Text>
        <View style={[styles.inner_container]}>
          {arr2.map((element, index) => (
            <View key={element.label} style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                {element.label}
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {element.value}
              </Text>
            </View>
          ))}
        </View>
      </Container>}
    </>
  );
};

export default VP_OtherDetails;

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
    alignItems:'center'
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
    paddingHorizontal:10,
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
  red:{
    color:'#AE0000',
    backgroundColor:'#FFEDED',
    padding:5,
    borderRadius:3
  },
  green:{
    color:'#13CF5B',
    backgroundColor:'#D9FFE7',
    padding:5,
    borderRadius:3
  }
});
