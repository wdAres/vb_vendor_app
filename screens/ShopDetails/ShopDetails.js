import React, { useEffect, useState } from "react";
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
import Shop_Info from "./components/Shop_Info";
import Shop_Social from "./components/Shop_Social";
import Shop_Media from "./components/Shop_Media";
import useHttpForm from "../../hooks/useHttpForm";

const ShopDetails = () => {
  const { sendRequest, isLoading } = useHttp2();
  const { sendRequest: sendRequest2 } = useHttpForm();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [shopLogo, setShopLogo] = useState("");
  const [shopBanner, setShopBanner] = useState("");
  const [slideBanners, setSlideBanners] = useState("");

  const __props = {
    shopLogo,
    setShopLogo,
    shopBanner,
    setShopBanner,
    setSlideBanners,
    slideBanners,
  };

  const handleForm = (data) => {
    const formData = new FormData();

    const appendFormData = (data, prefix = "") => {
      for (const [key, value] of Object.entries(data)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === "object") {
          appendFormData(value, newKey);
        } else {
          formData.append(newKey, value);
        }
      }
    };

    appendFormData(data);

    if (shopLogo.mime) {
      let shopLogoObj = {
        uri: shopLogo.path,
        name: "mainShopLogo." + shopLogo.mime.split("/")[1],
        type: shopLogo.mime,
      };
      formData.append("shopLogo", shopLogoObj);
    }

    if (shopBanner.mime) {
      let shopBannerObj = {
        uri: shopBanner.path,
        name: "mainShopBanner." + shopBanner.mime.split("/")[1],
        type: shopBanner.mime,
      };
      formData.append("topBanner", shopBannerObj);
    }

    if (slideBanners[0].mime) {
      slideBanners.forEach((element, index) => {
        formData.append("sliderBanners", {
          name: `${index}_shopbanner.` + element.mime.split("/")[1],
          uri: element.path,
          type: element.mime,
        });
      });
    }

    sendRequest2(
      {
        url: `seller`,
        method: "PUT",
        body: formData,
      },
      (result) => {
        console.log(result);
        getData();
      },
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
        let res = result.data;
        reset({
          shopName: res?.shopName,
          shopPhone: res?.shopPhone,
          shopEmail: res?.shopEmail,
          seoMetaTitle: res?.seoMetaTitle,
          seoMetaDescription: res?.seoMetaDescription,
          socialMediaLinks: {
            instagram: res?.socialMediaLinks?.instagram,
            facebook: res?.socialMediaLinks?.facebook,
            twitter: res?.socialMediaLinks?.twitter,
            website: res?.socialMediaLinks?.website,
            youtube: res?.socialMediaLinks?.youtube,
          },
        });
        setShopLogo({ url: res.shopLogoUrl });
        setShopBanner({ url: res.topBannerUrl });
        let newArr = res.sliderBannersUrl.map((element) => ({ url: element }));
        if (newArr.length >= 1) {
          setSlideBanners(newArr)
        }
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  return (
    <>
      <Header label={"Shop Setting"} />
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
                <Shop_Info
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
                <Shop_Media
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                  {...__props}
                />
                <Shop_Social
                  uni_style={uni_style}
                  control={control}
                  errors={errors}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <PrimaryBtn
          title={"Update Details"}
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

export default ShopDetails;
