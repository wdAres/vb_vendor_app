import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useHttp2 from "../../hooks/useHttp2";
import { useForm } from "react-hook-form";
import Coupon_Info from "./components/Coupon_Info";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import Header from "../../components/Header";

const Coupons1 = () => {
  const { sendRequest, isLoading } = useHttp2();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm();
  const [expiry,setExpiry] = useState('')

  const handleForm = (data) => {
    console.log(data);
    sendRequest(
      {
        url: `coupon`,
        method: "POST",
        body: {...data,expiryDate:expiry},
      },
      (result) => {
        navigation.replace("Coupons");
      },
      true
    );
  };

  return (
    <>
      <Header label={"Add Coupon"} />
      <View style={styles.my_parent}>
        <ScrollView
          style={styles.coupons}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shopSettingScrollViewContent}
        >
          <Coupon_Info control={control} errors={errors} expiry={expiry} setExpiry={setExpiry} />
        </ScrollView>
        <PrimaryBtn
          title={"Create Coupon"}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#8f9095",
    fontSize: responsiveHeight(1.49),
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
  },
  frameDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#8f9095",
    fontSize: responsiveHeight(1.49),
  },
  frameBorder: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.33),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    marginTop: responsiveHeight(1.86),
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  createTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  addCoupon: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  couponType: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  wrapper: {
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(3.84),
    paddingVertical: responsiveHeight(1.24),
    marginTop: responsiveHeight(1.86),
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameChild: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameRnkdatepicker: {
    marginTop: responsiveHeight(4.35),
  },
  shopSettingScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap:responsiveHeight(5.34)
  },
  my_parent: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    backgroundColor: "white",
    gap: responsiveHeight(5.34),
  },
});


export default Coupons1;
