import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  Color,
  Border,
  FontSize,
  Padding,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useForm } from "react-hook-form";
import Seller_BasicInfo from "./components/Seller_BasicInfo";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import Seller_Bank from "./components/Seller_Bank";
import Seller_Tax from "./components/Seller_Tax";
import Seller_Pickup from "./components/Seller_Pickup";
import Seller_Address from "./components/Seller_Address";
import useHttp2 from "../../hooks/useHttp2";
import Header from "../../components/Header";
import Seller_PickupAddress from "./components/Seller_PickupAddress";

const SellerDetails = () => {
  const { sendRequest, isLoading } = useHttp2();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm();

  const handleForm = (data) => {
    sendRequest(
      {
        url: `seller`,
        method: "PUT",
        body: data,
      },
      (result) => {},
      true
    );
  };

  const isFormValid = Object.keys(errors).length === 0;

  const getData = () => {
    sendRequest(
      {
        url: `seller`,
      },
      (result) => {
        reset({
          ...result.data,
          postalCode: String(result.data.postalCode),
          pickupPoint: {
            latitude: String(result.data.pickupPoint.latitude),
            longitude: String(result.data.pickupPoint.longitude),
          },
        });
      }
    );
  };

  React.useEffect(() => {
    getData();
  }, []);

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  return (
    <>
      <Header label={"Seller Details"} />
      <View style={styles.my_parent}>
        <ScrollView
          style={styles.sellerDetails}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sellerDetailsScrollViewContent}
        >
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <View style={styles.frameContainer}>
                <Seller_BasicInfo
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Seller_Address
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Seller_PickupAddress
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Seller_Bank
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Seller_Tax
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Seller_Pickup
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <PrimaryBtn
          title={`Save Details`}
          isLoading={isLoading}
          disabled={isLoading || !isFormValid}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sellerDetailsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameBorder: {
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
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
  sellerDetails1: {
    fontSize: FontSize.size_lg,
    marginLeft: 10,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  arrowLeftSmParent: {
    alignItems: "center",
  },
  frameWrapper: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  basicInfo: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
  },
  sellerName: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameChild: {
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.33),
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  sellerPincodeParent: {
    marginTop: responsiveHeight(3.35),
    alignSelf: "stretch",
  },
  frameInner: {
    height: responsiveHeight(13.93),
    paddingVertical: responsiveHeight(1.49),
    paddingHorizontal: responsiveWidth(3.33),
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  rectangleTextinput: {
    height: responsiveHeight(5.22),
    marginTop: responsiveHeight(0.87),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  frameParent1: {
    marginTop: responsiveHeight(3.48),
    alignSelf: "stretch",
  },
  taxInformationParent: {
    marginTop: responsiveHeight(2.86),
    alignSelf: "stretch",
  },
  frameContainer: {
    alignSelf: "stretch",
    gap: responsiveHeight(6.21),
  },
  save: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  saveWrapper: {
    backgroundColor: Color.colorFirebrick_200,
    justifyContent: "center",
    paddingHorizontal: responsiveWidth(38.46),
    paddingVertical: responsiveHeight(2.11),
    marginTop: responsiveHeight(6.21),
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  sellerDetails: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
  my_parent: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    backgroundColor: "white",
    gap: responsiveHeight(4.1),
  },
  overall_heading: {
    fontSize: FontSize.size_mini,
    color: Color.colorFirebrick_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
  },
  overall_container: {
    gap: responsiveHeight(2.98),
  },
  overall_frameView: {
    marginTop: responsiveHeight(4.1),
    alignSelf: "stretch",
  },
});

export default SellerDetails;
