import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import ToggleBtns from "../../../components/ToggleBtns";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Color } from "../../../GlobalStyles";
import VP_BasicInfo from "./screens/VP_BasicInfo";
import useHttp2 from "../../../hooks/useHttp2";
import { useNavigation, useRoute } from "@react-navigation/core";
import VP_OtherDetails from "./screens/VP_OtherDetails";
import VP_Description from "./screens/VP_Description";
import VP_SEO from "./screens/VB_SEO";

const pressableData = [
  {
    label: "Basic Details",
    value: "",
  },
  {
    label: "Other Details",
    value: "other_details",
  },
  {
    label: "Product Description",
    value: "product_description",
  },
  {
    label: "Meta Description",
    value: "meta_description",
  },
];

const ViewProduct = () => {
  const [currentTab, setCurrentTab] = useState("");
  const { sendRequest, isLoading } = useHttp2();
  const { id } = useRoute().params;
  const [data, setData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    sendRequest(
      {
        url: `product/${id}/show`,
      },
      (result) => {
        console.log(result.data);
        setData(result.data);
      }
    );
  }, [id]);

  const renderElement = {
    "": <VP_BasicInfo data={data} />,
    other_details: <VP_OtherDetails data={data} />,
    product_description : <VP_Description data={data} />,
    meta_description:<VP_SEO data={data} />
  };

  return (
    <View style={{ flex: 1 }}>
      <Header label={"Product Information"}>
        <Pressable
          onPress={() => navigation.navigate("EditProduct_1", { id: id })}
        >
          <Text style={styles.link}>Edit</Text>
        </Pressable>
      </Header>
      <View style={styles.parent}>
        <View style={{ marginBottom: 20 }}>
          <ToggleBtns
            data={pressableData}
            onPress={(data) => setCurrentTab(data)}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator size={35} />
        ) : (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            contentContainerStyle={styles.scrollview}
          >
            {renderElement[currentTab]}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
  },
  scrollview: {
    gap: 20,
    flexDirection: "column",
  },
  link:{
    fontSize:12,
    fontWeight:'500',
    color:'#AE0000'
  }
});
