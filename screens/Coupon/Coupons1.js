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

const Coupons1 = () => {
  const { sendRequest, isLoading } = useHttp2();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    sendRequest({
      url: `coupon`,
      method: 'POST',
      body: data
    }, result => {

    }, true)
  };

//   const [products, setProducts] = useState([]);
// const { sendRequest: productDataFunc, isLoading: productDataLoading } =
//   useHttp2();

//   const handleSearchProducts = (key) => {
//     productDataFunc(
//       {
//         url: `product?limit=10&page=1&search=${key ? key : ""}`,
//       },
//       (result) => {
//         let arr = result.data.docs.map((element) => ({
//           label: element.name,
//           value: element._id,
//         }));
//         setProducts(arr);
//       }
//     );
//   };

//   useEffect(() => {
//     handleSearchProducts();
//   }, []);


  return (
    <ScrollView
      style={styles.coupons}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.shopSettingScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.frameWrapperFlexBox}>
              <Pressable
                style={styles.arrowLeftSm}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../assets/arrowleftsm.png")}
                />
              </Pressable>
              <Text style={[styles.addCoupon, styles.couponClr]}>
                Add Coupon
              </Text>
            </View>
          </View>
          <View style={styles.frameContainer}>
            {/* <View style={styles.frameGroup}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Coupon Type
              </Text>
              <View style={styles.wrapper}>
                <DropDownPicker
                  style={styles.dropdownpicker}
                  open={frameDropdownOpen}
                  setOpen={setFrameDropdownOpen}
                  value={frameDropdownValue}
                  setValue={setFrameDropdownValue}
                  placeholder="Select your type"
                  items={frameDropdownItems}
                  labelStyle={styles.frameDropdownValue}
                  dropDownContainerStyle={styles.frameDropdowndropDownContainer}
                />
              </View>
            </View>
            <View style={styles.couponCodeParent}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Coupon code
              </Text>
              <TextInput
                style={[styles.frameChild, styles.frameBorder]}
                placeholder="Select your type"
                placeholderTextColor="#8f9095"
              />
            </View>
            <View style={styles.couponCodeParent}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Minimum Shopping
              </Text>
              <TextInput
                style={[styles.frameChild, styles.frameBorder]}
                placeholder="Select your type"
                placeholderTextColor="#8f9095"
              />
            </View>
            <View style={styles.couponCodeParent}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Discount
              </Text>
              <View style={styles.frameBorder} placeholder="Select your type" />
            </View>
            <View style={styles.couponCodeParent}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Maximum Discount Amount
              </Text>
              <TextInput
                style={[styles.frameChild, styles.frameBorder]}
                placeholder="Select your type"
                placeholderTextColor="#8f9095"
              />
            </View>
            <View style={styles.couponCodeParent}>
              <Text style={[styles.couponType, styles.couponTypeTypo]}>
                Till Date
              </Text>
              <RNKDatepicker
                style={styles.frameRnkdatepicker}
                placeholder={() => (
                  <Text style={styles.frameDatePickerPlaceHolder}>
                    Select your Date
                  </Text>
                )}
                date={frameDatePicker}
                onSelect={setFrameDatePicker}
                controlStyle={styles.frameDatePickerValue}
              />
            </View> */}
            <Coupon_Info control={control} errors={errors}  />
          </View>
        </View>
        <PrimaryBtn style={styles.createWrapper} title={"Add Coupon"} onPress={handleSubmit(handleForm)} />
        {/* <Pressable style={styles.createWrapper}>
          <Text style={[styles.create, styles.createTypo]}>Create</Text>
        </Pressable> */}
      </View>
    </ScrollView>
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
  frameDatePickerValue: {},
  frameWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  couponClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  couponTypeTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeftSm: {
    width: responsiveWidth(6.15),
    height: responsiveHeight(2.98),
  },
  addCoupon: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  couponType: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
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
  frameGroup: {
    alignSelf: "stretch",
  },
  frameChild: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  couponCodeParent: {
    marginTop: responsiveHeight(4.35),
    alignSelf: "stretch",
  },
  frameRnkdatepicker: {
    marginTop: responsiveHeight(4.35),
  },
  frameContainer: {
    marginTop: responsiveHeight(3.6),
    alignSelf: "stretch",
    rowGap:responsiveHeight(5.34)
  },
  create: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
  },
  createWrapper: {
    marginTop: responsiveHeight(29.85),
  },
  frameParent: {
    flex: 1,
  },
  coupons: {
    backgroundColor: Color.colorWhite,
    width: responsiveWidth(100),
    flex: 1,
    maxWidth: "100%",
  },
  shopSettingScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Coupons1;
