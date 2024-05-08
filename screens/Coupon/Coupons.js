import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CouponCard from "../../components/CouponCard";
import useHttp2 from "../../hooks/useHttp2";

const Coupons = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [data, setData] = React.useState([]);
  const { sendRequest, isLoading } = useHttp2();
  const [page, setPage] = React.useState(1);
  const [pageDetails, setPageDetails] = React.useState({});
  const [limit, setLimit] = React.useState(10);
  const [query, setQuery] = React.useState("");

  const getData = () => {
    sendRequest(
      {
        url: `coupon?limit=${limit}&page=${page}&search=${query}`,
      },
      (result) => {
        if (page === 1) {
          setData(result.data.docs);
        } else {
          setData((prevData) => [...prevData, ...result.data.docs]);
        }
        setPageDetails({ ...result.data, docs: null });
      }
    );
  };

  React.useEffect(() => {
    getData();
  }, [isFocused, limit, page, query]);

  const renderCouponCard = ({ item }) => (
    <View style={styles.couponCardContainer}>
      <CouponCard isLoading={isLoading} data={item} />
    </View>
  );

  const handleLoadMore = () => {
    if (!isLoading && pageDetails && page < pageDetails.totalPages) {
      setPage(page + 1);
    }
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
        <Text style={styles.headerTitle}>Coupons</Text>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Coupons1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/add-product.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Coupons"
          placeholderTextColor="#b9b9b9"
          onChangeText={(text) => setQuery(text)}
        />
      </View>
      {data.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No Coupons Found!</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderCouponCard}
          keyExtractor={(item) => item._id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: responsiveWidth(5.12),
    paddingTop: responsiveHeight(2.36),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(1.74),
  },
  backButton: {
    width: responsiveWidth(6.15),
    height: responsiveHeight(2.98),
  },
  addButton: {
    width: responsiveWidth(5.12),
    height: responsiveHeight(2.48),
    marginLeft: "auto",
  },
  headerTitle: {
    fontSize: FontSize.size_lg,
    marginLeft: responsiveWidth(2.56),
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  searchBar: {
    paddingHorizontal: responsiveWidth(2.82),
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    marginBottom: responsiveHeight(1.74),
  },
  searchInput: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  flatListContent: {
    paddingBottom: responsiveHeight(3.35),
  },
  couponCardContainer: {
    marginBottom: responsiveHeight(1.99),
  },
});

export default Coupons;
