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

const SellerDetails = () => {
  const { sendRequest, isLoading } = useHttp2();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors,defaultValues },
  } = useForm();

  const handleForm = (data) => {
    sendRequest({
      url: `seller`,
      method: 'PUT',
      body: data
    }, result => {

    }, true)
  };


  const isFormValid = Object.keys(errors).length === 0;

  const getData = () => {
    sendRequest({
      url: `seller`
    }, result => {
        reset(result.data)
    })
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      style={styles.sellerDetails}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sellerDetailsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <Pressable
              style={[styles.arrowLeftSmParent, styles.frameWrapperFlexBox]}
            >
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
              <Text style={[styles.sellerDetails1, styles.saveTypo]}>
                Seller Details
              </Text>
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <Seller_BasicInfo control={control} errors={errors} />
            <Seller_Bank control={control} errors={errors} />
            <Seller_Tax control={control} errors={errors} />
            <Seller_Address control={control} errors={errors} />
            <Seller_Pickup control={control} errors={errors} />
            {/* <View style={styles.frameParent}>
              <Text style={[styles.basicInfo, styles.saveTypo]}>
                Basic Info
              </Text>
              <View style={styles.frameView}>
                <View style={styles.frameParent}>
                  <Text style={styles.sellerName}>Seller Name</Text>
                  <TextInput
                    style={[styles.frameChild, styles.frameBorder]}
                    placeholder="Type Name"
                    placeholderTextColor="#8f9095"
                  />
                </View>
                <View style={styles.sellerPincodeParent}>
                  <Text style={styles.sellerName}>Seller Pincode</Text>
                  <TextInput
                    style={[styles.frameChild, styles.frameBorder]}
                    placeholder="Type Phone"
                    placeholderTextColor="#8f9095"
                  />
                </View>
                <View style={styles.sellerPincodeParent}>
                  <Text style={styles.sellerName}>Seller Address</Text>
                  <TextInput
                    style={[styles.frameInner, styles.frameBorder]}
                    placeholder="Type Address"
                    multiline={true}
                    placeholderTextColor="#8f9095"
                  />
                </View>
              </View>
            </View> */}
            {/* <View style={styles.taxInformationParent}>
              <Text style={[styles.basicInfo, styles.saveTypo]}>
                Tax information
              </Text>
              <View style={styles.frameParent1}>
                <View style={styles.frameParent}>
                  <Text style={styles.sellerName}>Pan Number</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
                <View style={styles.frameParent1}>
                  <Text style={styles.sellerName}>GST Number</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.taxInformationParent}>
              <Text style={[styles.basicInfo, styles.saveTypo]}>
                Bank Information
              </Text>
              <View style={styles.frameParent1}>
                <View style={styles.frameParent}>
                  <Text style={styles.sellerName}>Bank name</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
                <View style={styles.frameParent1}>
                  <Text style={styles.sellerName}>Account No</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
                <View style={styles.frameParent1}>
                  <Text style={styles.sellerName}>IFSC Code</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
                <View style={styles.frameParent1}>
                  <Text style={styles.sellerName}>Branch</Text>
                  <TextInput
                    style={[styles.rectangleTextinput, styles.frameBorder]}
                  />
                </View>
              </View>
            </View> */}
          </View>
        </View>
        {/* <Pressable onPress={handleSubmit(handleForm)} style={styles.saveWrapper}>
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </Pressable> */}
        <PrimaryBtn
          title={"Save Details"}
          isLoading={isLoading}
          disabled={isLoading || !isFormValid}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sellerDetailsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
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
  frameView: {
    marginTop: responsiveHeight(4.1),
    alignSelf: "stretch",
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
    marginTop: responsiveHeight(5.09),
    alignSelf: "stretch",
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
});

export default SellerDetails;
