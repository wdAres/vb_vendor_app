import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/core";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import P_ShippingConfig from "../components/P_ShippingConfig";
import P_Extras from "../components/P_Extras";
import P_Category from "../components/P_Category";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../redux/Slices/productSlice";

const EditProduct_3 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productData} = useSelector(state=>state.product)

  const {
    control,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shipping: {
        fee: '0',
        type:'free'
      },
      cod:false,
      stockVisibility:false,
      groupBy:false,
      instabuild:false
    },
  });

  const uni_style = {
    title: styles.overall_heading,
    container: styles.overall_container,
    frameview: styles.overall_frameView,
  };

  const handleForm = (data) => {
    dispatch(updateProductData(data)); 
    if (data.groupBy) {
      navigation.navigate("EditProduct_4");
    }else{
      navigation.navigate("EditProduct_5");
    }   
  };

  useEffect(()=>{
    reset({
      shipping: {
        fee: productData?.shipping?.fee ?? '0',
        type:productData?.type
      },
      estDeliveryDate:String(productData?.estDeliveryDate),
      cod:productData?.cod,
      stockVisibility:productData?.stockVisibility,
      groupBy:productData?.groupBy,
      instabuild:productData?.instabuild,
      tags:typeof productData?.tags === 'object' ? productData?.tags.join('') : productData?.tags,
    })
  },[productData])

  
  useEffect(()=>{
    if (watch('shipping.type' === 'free')) {
        setValue('shipping.fee' , '0')
    }
  },[watch('shipping.type')])

  return (
    <>
      <Header label={"Edit Product"} />
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
          contentContainerStyle={styles.inner_container}
        >
          <P_Category
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
          />
          <P_ShippingConfig
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
          />
          <P_Extras
            control={control}
            errors={errors}
            uni_style={uni_style}
            watch={watch}
          />
          
        </ScrollView>
        <PrimaryBtn title={"Next Page"} onPress={handleSubmit(handleForm)} />
      </View>
    </>
  );
};

export default EditProduct_3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    backgroundColor: "white",
    gap: responsiveHeight(4.1),
    width: "100%",
  },
  inner_container: {
    gap: responsiveHeight(5.34),
    width: "100%",
  },
  scrollview: {
    flex: 1,
    width: "100%",
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
