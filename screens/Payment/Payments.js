import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import PaymentCard from "../../components/PaymentCard";
import useHttp2 from "../../hooks/useHttp2";
import moment from "moment";
import Header from "../../components/Header";

const Payments = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { sendRequest, isLoading } = useHttp2();
  const [data, setData] = React.useState([]);
  const [pageDetails, setPageDetails] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [allDataLoaded, setAllDataLoaded] = React.useState(false);

  const getData = () => {
    sendRequest(
      {
        url: `wallet?limit=${limit}&page=${page}`,
      },
      (result) => {
        let arr = result.data.docs.map((element) => ({
          _id: element._id,
          orderId: element.orderId.orderId,
          paymentRefNumber: element.paymentRefNumber,
          date: moment(element.date).format("ll"),
          total: element.orderId.subtotal,
        }));
        if (arr.length === 0) {
          setAllDataLoaded(true);
        } else {
          setData((prevData) => [...prevData, ...arr]);
          setPageDetails({ ...result.data, docs: null });
        }
      }
    );
  };

  React.useEffect(() => {
    if (isFocused) {
      // Check if the screen is focused before calling the API
      getData();
    }
  }, [isFocused, page, limit]); // Trigger the effect when isFocused changes

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !allDataLoaded) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderPaymentCards = () => {
    if (isLoading && page === 1) {
      return <Text>Loading...</Text>;
    } else if (data.length === 0 && !isLoading) {
      return <Text>No data found</Text>;
    } else {
      return (
        <>
          {data.map((payment, index) => (
            <PaymentCard
              key={index}
              id={payment._id}
              orderId={payment.orderId}
              paymentRefNumber={payment.paymentRefNumber}
              date={payment.date}
              total={payment.total}
              style={styles.paymentCard}
            />
          ))}
          {isLoading && <Text>Loading more...</Text>}
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header label={"My Payments"} />
      <ScrollView
        style={[styles.payments, styles.paymentsLayout]}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.paymentsScrollViewContent}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust the scroll event throttle as needed
      >
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <View style={styles.walletAmountParent}>
                <Text style={[styles.walletAmount, styles.textTypo]}>
                  Wallet Amount
                </Text>
                <Text style={[styles.text, styles.textTypo]}>₹5,345</Text>
              </View>
              <Pressable
                style={[styles.withdrawWrapper, styles.home04ParentFlexBox]}
                onPress={() => navigation.navigate("WithdrawMoney")}
              >
                <Text style={styles.withdraw}>Withdraw</Text>
              </Pressable>
            </View>
            <Image
              style={[styles.imageIcon, styles.imageIconSpaceBlock]}
              resizeMode="cover"
              source={require("../../assets/image2.png")}
            />
            <View style={styles.imageIconSpaceBlock}>
              <Text style={[styles.paymentHistory, styles.myPaymentsTypo]}>
                Payment History
              </Text>
              <View style={styles.paymentCardParent}>
                {renderPaymentCards()}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  payments: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  paymentsLayout: {
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: responsiveWidth(100),
  },
  paymentsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: responsiveWidth(5.12),
    paddingVertical: responsiveHeight(2.36),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  walletAmountParent: {
    flex: 1,
  },
  walletAmount: {
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  text: {
    fontSize: FontSize.size_11xl,
    marginTop: responsiveHeight(1.11),
  },
  withdrawWrapper: {
    borderRadius: Border.br_7xs,
    width: responsiveWidth(22.05),
    paddingHorizontal: responsiveWidth(2.56),
    paddingVertical: responsiveHeight(1.11),
    marginLeft: responsiveWidth(42.05),
    backgroundColor: Color.colorFirebrick_200,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
  },
  home04ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  withdraw: {
    lineHeight: responsiveHeight(2.36),
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  imageIcon: {
    height: responsiveHeight(47.38),
    maxWidth: responsiveWidth(100),
    overflow: "hidden",
    width: "100%",
  },
  imageIconSpaceBlock: {
    marginTop: responsiveHeight(2.48),
    alignSelf: "stretch",
  },
  paymentHistory: {
    display: "flex",
    height: responsiveHeight(1.74),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
  },
  myPaymentsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  paymentCardParent: {
    marginTop: responsiveHeight(2.11),
    alignSelf: "stretch",
    marginBottom: responsiveHeight(1),
  },
  paymentCard: {
    marginBottom: responsiveHeight(1),
  },
});

export default Payments;
