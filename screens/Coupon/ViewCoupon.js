import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import moment from "moment";
import useHttp2 from "../../hooks/useHttp2";

const ViewCoupon = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { id } = route.params;
  const { sendRequest, isLoading } = useHttp2();
  const [coupon, setCoupon] = React.useState(null);

  React.useEffect(() => {
    getCouponDetails();
  }, [isFocused]);

  const getCouponDetails = () => {
    sendRequest(
      {
        url: `coupon/${id}/show`,
      },
      (result) => {
        console.log(result);
        setCoupon(result.data);
      }
    );
  };

  const handleDelete = () => {
    sendRequest(
      {
        url: `coupon/${id}/remove`,
        method: "DELETE",
      },
      () => {
        navigation.goBack();
      }
    );
  };

  const handleEdit = () => {
    navigation.navigate("EditCoupon", { id: coupon._id });
  };

  const handleActiveToggle = () => {
    const newActiveStatus = !coupon.active;
    sendRequest(
      {
        url: `coupon/${id}/edit`,
        method: "PUT",
        body: { active: newActiveStatus },
      },
      () => {
        getCouponDetails();
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/arrowleftsm.png")}
          />
        </Pressable>
        <Text style={styles.headerTitle}>View Coupon</Text>
      </View>
      {isLoading && <Text>Loading...</Text>}
      {coupon && (
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Coupon Code: {coupon.couponCode}</Text>
          <Text style={styles.label}>Coupon Label: {coupon.couponLabel}</Text>
          <Text style={styles.label}>
            Expiry Date: {moment(coupon.expiryDate).format("MMM D, YYYY")}
          </Text>
          <Text style={styles.label}>
            Discount Type: {coupon.discountType}
          </Text>
          <Text style={styles.label}>
            Discount Value: {coupon.discountValue}
          </Text>
          <View style={styles.activeContainer}>
            <Text style={styles.activeText}>
              Status:{" "}
              <Text
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: coupon.active
                      ? Color.colorSuccess
                      : Color.colorDanger,
                  },
                ]}
              >
                {coupon.active ? "Active" : "Inactive"}
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleActiveToggle}>
              <Text style={styles.buttonText}>
                {coupon.active ? "Deactivate" : "Activate"}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  backButton: {
    width: 28,
    height: 28,
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  detailsContainer: {
    padding: 18,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderRadius: 8,
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  activeContainer: {
    marginTop: 10,
  },
  activeText: {
    fontSize: 16,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    color: Color.colorWhite,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 18,
  },
  button: {
    backgroundColor: Color.colorPrimary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: Color.colorWhite,
    fontWeight: "bold",
  },
});

export default ViewCoupon;
