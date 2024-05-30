import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useHttp2 from "../../../hooks/useHttp2";
import { responsiveHeight } from "react-native-responsive-dimensions";

const AddProduct_7 = () => {
  const [attributes, setAttributes] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const { sendRequest, isLoading } = useHttp2();

  useEffect(() => {
    fetchAttributes(page);
  }, [page]);

  const fetchAttributes = (page) => {
    sendRequest(
      {
        url: `variation?limit=10&page=${page}`,
      },
      (result) => {
        setAttributes((prevAttributes) => [
          ...prevAttributes,
          ...result.data.docs,
        ]);
        setHasNextPage(result.data.hasNextPage);
      }
    );
  };

  const handleSelectAttribute = (attributeName, optionValue) => {
    setSelectedAttributes((prevSelected) => [
      ...prevSelected,
      { name: attributeName, value: optionValue },
    ]);
  };

  const renderAttribute = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      {item.options.map((option) => (
        <TouchableOpacity
          key={option._id}
          onPress={() => handleSelectAttribute(item.name, option.value)}
        >
          <Text>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const loadMoreAttributes = () => {
    if (hasNextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };


  return (
    <View>
      {attributes.length > 0 ? (
        <FlatList
          data={attributes}
          renderItem={renderAttribute}
          keyExtractor={(item) => item._id}
          onEndReached={loadMoreAttributes}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: responsiveHeight(2.36) }} />
          )}
        />
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>{"No Data Found!"}</Text>
      )}
      <Text>Selected Attributes:</Text>
      {selectedAttributes.map((attr, index) => (
        <Text key={index}>{`${attr.name}: ${attr.value}`}</Text>
      ))}
    </View>
  );
};

export default AddProduct_7;
