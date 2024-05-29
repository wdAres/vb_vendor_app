import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Header from "../../components/Header";
import useHttp2 from "../../hooks/useHttp2";
import moment from "moment";
import Steps from "../../components/Steps";
import ProductCards from "../../components/ProductCards";
import Container from "../../components/Container/Container";

const OrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const { sendRequest, isLoading } = useHttp2();
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const getData = useCallback(() => {
    sendRequest(
      {
        url: `order/${id}/show`,
      },
      (result) => {
        let items = result?.data?.items?.map((element, index) => ({
          index: index + 1,
          _id: element.productId._id,
          price: element?.price,
          qty: element?.qty,
          name: element?.productId?.name,
          url: element?.productId?.url,
          price: element?.price,
        }));
        setTableData(items);
        setData(result.data);
      }
    );
  }, [id, sendRequest]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [getData])
  );

  return (
    <>
      <Header label={"Order Details"} />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ordersScrollViewContent}
        style={[styles.orders, styles.ordersSpaceBlock]}
      >
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <View style={styles.frameContainer}>
                <View style={styles.orderDateParent}>
                  <Text style={[styles.orderDate, styles.textTypo]}>
                    Order Date
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>
                    {moment(data?.createdAt).format("YYYY-MM-DD")}
                  </Text>
                </View>
                <View style={styles.orderNoParent}>
                  <Text style={[styles.orderDate, styles.textTypo]}>
                    Order ID
                  </Text>
                  <Text style={[styles.text1, styles.textTypo]}>
                    {data?.orderId}
                  </Text>
                </View>
                <View style={styles.orderNoParent}>
                  <Text style={[styles.orderDate, styles.textTypo]}>
                    Order Total
                  </Text>
                  <Text style={[styles.text2, styles.textTypo]}>
                    ${data?.total}
                  </Text>
                </View>
                <Text style={[styles.downloadInvoice, styles.updateLog1Typo]}>
                  Download invoice
                </Text>
              </View>
            </View>
            <View style={styles.orderStatusParent}>
              <Text style={[styles.orderStatus, styles.logsTypo]}>
                Order Status
              </Text>
              <View style={[styles.frameView, styles.frameParentSpaceBlock]}>
                <View style={styles.frameContainer}>
                  <View style={styles.frameContainer}>
                    <View style={styles.frameParent3}>
                      <Steps currentStep={data?.orderStatus} />
                    </View>
                    {/* Logs */}
                    <View style={styles.logsParent}>
                      <Text style={[styles.logs, styles.logsTypo]}>Logs</Text>
                      <View style={[styles.frameParentSpaceBlock, styles.gap]}>
                        {data &&
                          data?.logs?.length > 0 &&
                          data.logs.map((element, index) => (
                            <Text
                              key={index}
                              style={[
                                styles.packageIsShipped,
                                styles.packageTypo,
                              ]}
                            >
                              {element.log}
                            </Text>
                          ))}
                      </View>
                    </View>
                  </View>
                  {data?.orderStatus !== "delivered" &&
                    data?.orderStatus !== "cancelled" &&
                    data?.orderStatus !== "return" && (
                      <TouchableOpacity
                        style={styles.updateLog}
                        activeOpacity={0.2}
                        onPress={() =>
                          navigation.navigate("UpdateLog", {
                            id: data?._id,
                            orderStatus: data?.orderStatus,
                          })
                        }
                      >
                        <Text style={styles.updateLog1Typo}>Update Log</Text>
                      </TouchableOpacity>
                    )}
                </View>
              </View>
            </View>
            <View style={styles.orderStatusParent}>
              <Text style={[styles.orderStatus, styles.logsTypo]}>
                Product details
              </Text>

              {isLoading ? (
                <Text>Loading</Text>
              ) : (
                <Pressable
                  onPress={() =>
                    navigation.navigate("ViewProduct", {
                      id: tableData[0]?._id,
                    })
                  }
                  style={[
                    styles.imagePlaceHolderParent,
                    styles.frameParentSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.imagePlaceHolder}
                    resizeMode="contain"
                    source={{ uri: tableData[0]?.url }}
                  />
                  <View style={styles.pearlBeadingTexturParent}>
                    <Text style={[styles.pearlBeadingTextur, styles.orderTypo]}>
                      {tableData[0]?.name}
                    </Text>
                    <View style={[styles.starsParent, styles.parentSpaceBlock]}>
                      {/* <Image
                      style={styles.starsIcon}
                      resizeMode="cover"
                      source={{uri:}}
                    /> */}
                      <Text style={[styles.reviews, styles.logsTypo]}>
                        Qty : {tableData[0]?.qty}
                      </Text>
                      <Text style={[styles.reviews, styles.logsTypo]}>
                        Total Price : ${tableData[0]?.price}
                      </Text>
                    </View>
                    {/* <View style={styles.parentSpaceBlock}>
                      <Text style={[styles.text4, styles.textSpaceBlock]}>
                        ${tableData[0]?.price}
                      </Text>
                    </View> */}
                  </View>
                </Pressable>
              )}
            </View>
            <View style={styles.orderStatusParent}>
              <Text style={[styles.orderStatus, styles.logsTypo]}>
                Payment Info
              </Text>
              <View style={[styles.frameParent5, styles.frameBorder]}>
                <View style={styles.frameContainer}>
                  <Text style={[styles.paymentMethods, styles.orderTypo]}>
                    Payment Method
                  </Text>
                  <Text style={styles.pickup}>{data?.paymentMethod}</Text>
                </View>
                <View
                  style={[styles.frameChild, styles.frameParentSpaceBlock]}
                />
                <View style={styles.frameParentSpaceBlock}>
                  <Text style={[styles.paymentMethods, styles.orderTypo]}>
                    Billing Address
                  </Text>
                  <Text style={[styles.apt45352466, styles.apt45352466FlexBox]}>
                    {data?.billingAddress}
                  </Text>
                </View>
              </View>
            </View>
            {data?.pickupAddress && (
              <View style={styles.orderStatusParent}>
                <Text style={[styles.orderStatus, styles.logsTypo]}>
                  Pickup Address
                </Text>
                <View style={[styles.frameWrapper1, styles.frameBorder]}>
                  <View style={styles.frameContainer}>
                    <Text style={[styles.paymentMethods, styles.orderTypo]}>
                      Nishant Choudhary
                    </Text>
                    <Text
                      style={[styles.apt45352466, styles.apt45352466FlexBox]}
                    >
                      Apt. 453 52466 Kimberlie Trail, Emardmouth, IL 70724
                    </Text>
                    <Text
                      style={[styles.apt45352466, styles.apt45352466FlexBox]}
                    >
                      7503063585
                    </Text>
                  </View>
                </View>
              </View>
            )}
           <Text style={[styles.orderStatus, styles.logsTypo,styles.mt]}>
                Payment Description
              </Text>
            <Container style={[styles.container_1]}>
              <View style={[styles.inner_container]}>
                <View style={[styles.inner_container_row]}>
                  <Text style={[styles.icr_left, styles.font_1]}>Subtotal</Text>
                  <Text style={[styles.icr_right, styles.font_1]}>
                    ${data?.subtotal}
                  </Text>
                </View>
                <View style={[styles.inner_container_row]}>
                  <Text style={[styles.icr_left, styles.font_1]}>Discount</Text>
                  <Text style={[styles.icr_right, styles.font_1]}>
                    ${data?.discount}
                  </Text>
                </View>
                <View style={[styles.inner_container_row]}>
                  <Text style={[styles.icr_left, styles.font_1]}>Shipping Charge</Text>
                  <Text style={[styles.icr_right, styles.font_1]}>
                    ${data?.shippingCharge}
                  </Text>
                </View>
                <View style={[styles.inner_container_row]}>
                  <Text style={[styles.icr_left, styles.font_1]}>Total</Text>
                  <Text style={[styles.icr_right, styles.font_1]}>
                    ${data?.total}
                  </Text>
                </View>
              </View>
            </Container>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ordersSpaceBlock: {
    backgroundColor: Color.colorWhite,
  },
  orders: {
    overflow: "hidden",
    width: responsiveWidth(100),
    flex: 1,
  },
  ordersScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  orderTypo: {
    fontFamily: FontFamily.interSemiBold,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  updateLog1Typo: {
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignSelf: "stretch",
  },
  logsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameParentSpaceBlock: {
    marginTop: responsiveHeight(1.61),
    alignSelf: "stretch",
  },
  gap: {
    gap: responsiveHeight(1.61),
  },
  juneClr: {
    color: Color.colorMediumseagreen_200,
    fontSize: FontSize.size_4xs,
  },
  juneSpaceBlock: {
    marginLeft: responsiveWidth(9.74),
    flex: 1,
  },
  thJune1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  thJune3Typo: {
    textAlign: "right",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  packageTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  apt45352466FlexBox: {
    marginTop: responsiveHeight(0.99),
    textAlign: "left",
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: responsiveHeight(1.11),
    flexDirection: "row",
    alignItems: "center",
  },
  text3Layout: {
    height: responsiveHeight(2.36),
    alignItems: "center",
  },
  textSpaceBlock: {
    marginLeft: responsiveWidth(1.28),
    textAlign: "left",
  },
  frameBorder: {
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveHeight(2.98),
    height: responsiveHeight(2.98),
  },
  orderDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowLeftSmParent: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  orderDate: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  text: {
    marginLeft: responsiveWidth(13.07),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  orderDateParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text1: {
    marginLeft: responsiveWidth(15.38),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  orderNoParent: {
    marginTop: responsiveHeight(1.24),
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text2: {
    marginLeft: responsiveWidth(12.82),
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  downloadInvoice: {
    marginTop: responsiveHeight(1.24),
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingVertical: responsiveHeight(1.61),
    paddingHorizontal: responsiveWidth(4.61),
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  orderStatus: {
    // height: responsiveHeight(1.74),
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignItems: "center",
    alignSelf: "stretch",
  },
  thJune: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "stretch",
  },
  orderConfirmed: {
    fontSize: FontSize.size_5xs,
    marginTop: responsiveHeight(3.73),
    color: Color.colorGray_200,
    textAlign: "left",
  },
  thJuneParent: {
    zIndex: 0,
    flex: 1,
  },
  thJune1: {
    color: Color.colorMediumseagreen_200,
    fontSize: FontSize.size_4xs,
  },
  shipped: {
    fontSize: FontSize.size_5xs,
    marginTop: responsiveHeight(3.73),
    color: Color.colorGray_200,
  },
  thJuneGroup: {
    height: responsiveHeight(6.34),
    zIndex: 1,
    alignItems: "center",
  },
  thJuneContainer: {
    height: responsiveHeight(6.09),
    zIndex: 2,
    alignItems: "center",
  },
  thJune3: {
    color: Color.colorMediumseagreen_200,
    fontSize: FontSize.size_4xs,
  },
  delivered: {
    fontSize: FontSize.size_5xs,
    marginTop: responsiveHeight(3.73),
    color: Color.colorGray_200,
  },
  thJuneParent1: {
    alignItems: "flex-end",
    zIndex: 3,
  },
  imageIcon: {
    position: "absolute",
    top: 20,
    left: 0,
    width: responsiveWidth(83.58),
    height: responsiveHeight(1.61),
    zIndex: 4,
  },
  frameParent3: {
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  logs: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  packageIsShipped: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  packageIsDelivered: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  logsParent: {
    marginTop: responsiveHeight(3.6),
    alignSelf: "stretch",
  },
  updateLog: {
    marginTop: responsiveHeight(8.7),
  },
  frameView: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(2.82),
    marginTop: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  mt:{
    marginTop: responsiveHeight(3.73),
  },
  orderStatusParent: {
    marginTop: responsiveHeight(3.73),
    alignSelf: "stretch",
  },
  imagePlaceHolder: {
    borderRadius: Border.br_5xs,
    width: responsiveWidth(20.51),
    height: responsiveHeight(10.57),
    backgroundColor: "#d4d9d6",
  },
  pearlBeadingTextur: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    alignSelf: "stretch",
  },
  starsIcon: {
    width: responsiveWidth(21.28),
    height: responsiveHeight(1.86),
  },
  reviews: {
    color: Color.black,
    // marginLeft: responsiveHeight(1.11),
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    flex: 1,
  },
  starsParent: {
    alignSelf: "stretch",
  },
  off: {
    color: Color.colorMediumseagreen_100,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  offWrapper: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorPaleturquoise,
    width: responsiveWidth(11.53),
    justifyContent: "center",
    // paddingHorizontal: responsiveWidth(2.56),
    // paddingVertical: responsiveHeight(1.24),
    flexDirection: "row",
  },
  text3: {
    textDecoration: "line-through",
    width: responsiveWidth(10.25),
    fontFamily: FontFamily.interRegular,
    height: responsiveHeight(2.36),
    alignItems: "center",
    fontSize: FontSize.size_smi,
    display: "flex",
    color: Color.colorGray_200,
  },
  text4: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  pearlBeadingTexturParent: {
    marginLeft: responsiveWidth(2.56),
    flex: 1,
  },
  imagePlaceHolderParent: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(2.82),
    marginTop: responsiveHeight(1.61),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
  },
  paymentMethods: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  pickup: {
    marginTop: responsiveHeight(0.62),
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameChild: {
    borderTopWidth: 1,
    height: responsiveHeight(0.12),
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: responsiveHeight(1.61),
  },
  apt45352466: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  frameParent5: {
    paddingHorizontal: responsiveWidth(3.84),
  },
  frameWrapper1: {
    paddingHorizontal: responsiveWidth(4.61),
  },
  frameGroup: {
    // marginTop: responsiveHeight(3.1),
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
  },
  orderDetails: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container_1: {
    padding: responsiveHeight(1.86),
    gap: responsiveHeight(1.86),
    flexDirection: "column",
    marginTop: 10,
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
});

export default OrderDetails;
