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
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import useHttp2 from "../../hooks/useHttp2";
import Header from "../../components/Header";
import AT_Info from "./components/AT_Info";

const AddSupportTicket = () => {
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
        url: `ticket`,
        method: "POST",
        body: data,
      },
      (result) => {
        reset()
        navigation.goBack()
      },
      true
    );
  };

  const isFormValid = Object.keys(errors).length === 0;

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };



  return (
    <>
      <Header label={"Add Ticket"} />
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
                <AT_Info control={control} errors={errors} uni_style={uni_style} />
              </View>
            </View>
          </View>
        </ScrollView>
        <PrimaryBtn
          title={`Add Ticket`}
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
    frameBorder: {
      borderWidth: 1,
      borderColor: Color.colorGainsboro_200,
      borderStyle: "solid",
      borderRadius: Border.br_8xs,
      backgroundColor: Color.colorWhite,
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
    saveWrapper: {
      backgroundColor: Color.colorFirebrick_200,
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
      gap: responsiveHeight(4.10),
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
      alignSelf: "stretch",
    },
  });
  

export default AddSupportTicket;
