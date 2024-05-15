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
import { useNavigation, useRoute } from "@react-navigation/native";
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
import Att_Info from "./components/Att_Info";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";

const EditAttributes = () => {
  const { sendRequest, isLoading } = useHttp2();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const {
    control,
    handleSubmit,
    reset,
    unregister,
    setValue,
    getValues,
    formState: { errors, defaultValues },
  } = useForm();
  const [initial_value, setInitialValue] = React.useState(1);

  React.useEffect(() => {
    sendRequest(
      {
        url: `variation/${id}/show`,
      },
      (result) => {
        reset(result.data);
        setInitialValue(result.data.options.length);
      }
    );
  }, []);

  const handleForm = (data) => {
    sendRequest(
      {
        url: `variation/${id}/edit`,
        method: "PUT",
        body: data,
      },
      (result) => {
        navigation.replace("Attributes");
      },
      true
    );
  };

  const isFormValid = Object.keys(errors).length === 0;

  const updateOption = (index) => {
    let options = getValues("option");
    options.splice(index, 1);
    setValue("option", options);
  };

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleDelete = () => {
    sendRequest(
      {
        url: `variation/${id}/delete`,
        method: "DELETE",
      },
      (result) => {
        navigation.replace("Attributes");
      },
      true
    );
  };

  return (
    <>
      <Header label={"Edit Attribute"}>
        <PrimaryBtn
          isLoading={isLoading}
          onPress={handleDelete}
          title={"Delete"}
          style={styles.btn}
        />
      </Header>
      <View style={styles.my_parent}>
        <ScrollView
          style={styles.AddAttributes}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ChangePasswordScrollViewContent}
        >
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <View style={styles.frameContainer}>
                <Att_Info
                  control={control}
                  uni_style={uni_style}
                  errors={errors}
                  initial_value={initial_value}
                  updateOption={updateOption}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <PrimaryBtn
          title={`Update Attribute`}
          isLoading={isLoading}
          disabled={isLoading || !isFormValid}
          onPress={handleSubmit(handleForm)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ChangePasswordScrollViewContent: {
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
  ChangePassword1: {
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
  AddAttributes: {
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
    alignSelf: "stretch",
  },
  delete_text: {
    fontWeight: "500",
    color: "red",
  },
  btn: {
    width: "auto",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

export default EditAttributes;
