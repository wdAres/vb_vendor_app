const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Dashboard from "./screens/Dashboard";
// import Frame9 from "./components/Frame9";
import UpdateLog from "./screens/UpdateLog";
// import Frame7 from "./components/Frame7";
import ProductsDetails from "./screens/ProductsDetails";
import OtherDetails from "./screens/OtherDetails";
import AddProduct from "./screens/AddProduct";
import RefundRequest from "./screens/RefundRequest";
import RefundRequestPOPUP from "./components/RefundRequestPOPUP";
import ProductsDetails1 from "./screens/ProductsDetails1";
import OtherDetails1 from "./screens/OtherDetails1";
import ProductDescription from "./screens/ProductDescription";
import ProductDescription1 from "./screens/ProductDescription1";
import AddToGroupBuy from "./components/AddToGroupBuy";
import AddProduct2 from "./screens/AddProduct2";
import AddProduct3 from "./screens/AddProduct3";
import AddProduct4 from "./screens/AddProduct4";
import AddProduct5 from "./screens/AddProduct5";
import Upload from "./components/Upload";
import AllUploadedFiles from "./components/AllUploadedFiles";
import AllUploadedFiles1 from "./components/AllUploadedFiles1";
import Frame10 from "./components/Frame10";
import Frame11 from "./components/Frame11";
import Frame12 from "./components/Frame12";
import Frame13 from "./components/Frame13";
import Products from "./screens/Products";
import Reviews from "./components/Reviews";
import SellerDetails from "./screens/SellerDetails/SellerDetails";
import RefundRequest1 from "./screens/RefundRequest1";
import VendorProfile from "./screens/VendorProfile";
import RefundRequest2 from "./components/RefundRequest2";
import Payments from "./screens/Payments";
import PaymentDetails from "./screens/PaymentDetails";
import WithdrawMoney from "./screens/WithdrawMoney";
// import Frame from "./components/Frame";
// import Frame1 from "./components/Frame1";
// import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Dashboard1 from "./screens/Dashboard1";
import Products1 from "./screens/Products1";
import Orders from "./screens/Orders";
import Frame8 from "./components/Frame8";
import ShopSetting from "./screens/ShopSetting";
import AddProduct1 from "./screens/AddProduct1";
import Coupons from "./screens/Coupons";
import BulkUpload from "./screens/BulkUpload";
import ShopSetting1 from "./screens/ShopSetting1";
import Coupons1 from "./screens/Coupons1";
import Support from "./screens/Support";
import TicketDetails from "./screens/TicketDetails";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import OrderDetails from "./screens/OrderDetails";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Frame7 from "./components/Frame7";
import Frame9 from "./components/Frame9";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Login from "./screens/Auth/Login";
import ForgotPassword from "./screens/Auth/ForgetPassword";
import Signup from "./screens/Auth/Signup";
import { AuthContext, AuthProvider, useAuth } from "./context/AuthContext";
import Toast from "react-native-toast-message";
import InputCheker from "./screens/InputCheker";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Frame5 />,
    <Frame6 />,
    <Frame7 />,
    <Frame8 />,
    <Frame9 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Frame />,
    <Frame1 />,
    <Frame2 />,
    <Frame3 />,
    <Frame4 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.08)",
              shadowOffset: {
                width: 0,
                height: responsiveHeight(-0.62),
              },
              shadowRadius: 10,
              elevation: 10,
              shadowOpacity: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingHorizontal: responsiveWidth(5.12),
              paddingBottom: responsiveHeight(2.48),
              height: responsiveHeight(9.45),
              // width:responsiveWidth(100)
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Dashboard1"
        component={Dashboard1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Products1"
        component={Products1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="VendorProfile"
        component={VendorProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const NaviCon = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const { userInfo } = useAuth();

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!userInfo.token ? (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ForgetPassword"
                  component={ForgotPassword}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="BottomTabsRoot"
                  component={BottomTabsRoot}
                />
                <Stack.Screen
                  name="UpdateLog"
                  component={UpdateLog}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProductsDetails"
                  component={ProductsDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OtherDetails"
                  component={OtherDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct"
                  component={AddProduct}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RefundRequest"
                  component={RefundRequest}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProductsDetails1"
                  component={ProductsDetails1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OtherDetails1"
                  component={OtherDetails1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProductDescription"
                  component={ProductDescription}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProductDescription1"
                  component={ProductDescription1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct2"
                  component={AddProduct2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct3"
                  component={AddProduct3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct4"
                  component={AddProduct4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct5"
                  component={AddProduct5}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Products"
                  component={Products}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SellerDetails"
                  component={SellerDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RefundRequest1"
                  component={RefundRequest1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RefundRequest2"
                  component={RefundRequest2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PaymentDetails"
                  component={PaymentDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WithdrawMoney"
                  component={WithdrawMoney}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ShopSetting"
                  component={ShopSetting}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddProduct1"
                  component={AddProduct1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Coupons"
                  component={Coupons}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="BulkUpload"
                  component={BulkUpload}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ShopSetting1"
                  component={ShopSetting1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Coupons1"
                  component={Coupons1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Support"
                  component={Support}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TicketDetails"
                  component={TicketDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InputChecker"
                  component={InputCheker}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default NaviCon;