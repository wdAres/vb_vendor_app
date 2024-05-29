import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Container from "../../../../components/Container/Container";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import moment from "moment";

const VP_BasicInfo = ({ data , handleDelete , isLoading }) => {
  const arr1 = [
    { label: "Product Name", value: data?.name },
    { label: "Brand", value: data?.brand?.name },
    { label: "Unit Type", value: data?.unitType },
    { label: "Return Policy", value: data?.returnApplicable },
    { label: "Weight (in Kg,)", value: data?.weight },
  ];
  const arr2 = [
    { label: "Unit Price", value: "$" + data?.price },
    { label: "Discount Type", value: data?.discountType },
    { label: `Discount Value`, value: data?.discount },
    {
      label: "Start Date",
      value: moment(data?.discountDateRange?.start).format("ll"),
    },
    {
      label: "End Date",
      value: moment(data?.discountDateRange?.end).format("ll"),
    },
    { label: "SKU", value: data?.sku },
    { label: "Quantity Available", value: data?.quantityAvailable },
  ];

  console.log(data?.tags && data?.tags[0].split(","));

  return (
    <>
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Product Information</Text>
        <View style={[styles.inner_container]}>
          {arr1.map((element, index) => (
            <View key={element.label} style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                {element.label}
              </Text>
              <Text style={[styles.icr_right, styles.font_1]}>
                {element.value}
              </Text>
            </View>
          ))}
          <View style={[styles.inner_container_row, styles.column]}>
            <Text style={[styles.icr_left, styles.font_1]}>Tags : </Text>
            <View style={[styles.tags_container]}>
              {data?.tags?.length > 0 ? (
                data?.tags[0]?.split(",")?.map((element) => (
                  <Text key={element._id} style={[styles.tag]}>
                    {element}
                  </Text>
                ))
              ) : (
                <Text style={[styles.fallback_text, styles.font_1]}>
                  No Tags Found!
                </Text>
              )}
            </View>
          </View>
          <View style={[styles.inner_container_row, styles.column]}>
            <Text style={[styles.icr_left, styles.font_1]}>
              Product Category :{" "}
            </Text>
            <View style={[styles.tags_container]}>
              {data?.categories?.map((element) => (
                <Text key={element._id} style={[styles.tag]}>
                  {element.name}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Container>
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Product Price & Stock</Text>
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
      </Container>
      <Container style={styles.container_1}>
        <Text style={styles.heading}>Product Image</Text>
        <Image
          width={150}
          height={150}
          source={{ uri: data?.url }}
          style={styles.photo}
        />
        <Text style={styles.heading}>Product Additional Images</Text>
        <ScrollView
          style={styles.photos_container}
          contentContainerStyle={styles.photos_container_inner}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        >
          {data?.additionalImages?.length > 0 ? (
            data?.additionalImages?.map((element) => (
              <Image
                key={element._id}
                style={styles.photo}
                width={150}
                height={150}
                source={{ uri: element.url }}
              />
            ))
          ) : (
            <Text style={[styles.fallback_text, styles.font_1]}>
              No Images Found!
            </Text>
          )}
        </ScrollView>
      </Container>
      <Container style={[styles.container_1]}>
        <Text style={styles.heading}>Action</Text>
        <View style={[styles.inner_container]}>
            <View style={[styles.inner_container_row]}>
              <Text style={[styles.icr_left, styles.font_1]}>
                Delete Product
              </Text>
              <Pressable
              onPress={handleDelete}
              disabled={isLoading}
              >
              <Text style={[styles.icr_right, styles.font_1]}>
                {isLoading ? 'Loading' : 'Delete' }
              </Text>
              </Pressable>
            </View>
        </View>
      </Container>
    </>
  );
};

export default VP_BasicInfo;

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
});
