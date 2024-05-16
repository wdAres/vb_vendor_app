import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useHttp2 from "../../hooks/useHttp2";

const PaymentGraph = () => {
  const barData = [
    { value: 250, label: "M" },
    { value: 250, label: "M" },
    { value: 500, label: "T" },
    { value: 745, label: "W" },
    { value: 320, label: "T" },
    { value: 600, label: "F" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];

  const [chartData, setChartData] = useState([]);
  const { sendRequest: chartDataFunc, isLoading: chartLoading } = useHttp2();

  function createObjects(data) {
    const result = [];

    for (let i = 0; i < data.labels.length; i++) {
      // Object for grossEarning
      const grossObj = {
        value: data.grossEarning[i],
        label: data.labels[i],
        frontColor: "#AE0000",
      };
      result.push(grossObj);

      // Object for netEarning
      const netObj = {
        value: data.netEarning[i],
        label: data.labels[i],
        frontColor: "#000",
      };
      result.push(netObj);
    }

    return result;
  }

  useEffect(() => {
    chartDataFunc(
      {
        url: `dashboard/graph`,
      },
      (result) => {
        let res = createObjects(result.data);
        setChartData(res);
      }
    );
  }, []);

  return (
    <View style={styles.block1}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.text}>Last 7 Months</Text>
        <View style={styles.identifiers}>
            <View style={styles.identifier}><View style={[styles.identifier_color,styles.red]}></View><Text style={styles.identifier_text}>Gross</Text></View>
            <View style={styles.identifier}><View style={[styles.identifier_color,styles.black]}></View><Text style={styles.identifier_text}>Net</Text></View>
        </View>
      </View>
      {chartLoading ? (
        <Text>Loading</Text>
      ) : (
        <BarChart
          barWidth={responsiveWidth(7.43)}
          noOfSections={5}
          barBorderRadius={5}
          frontColor="#AE0000"
          data={chartData}
          yAxisThickness={0}
          xAxisThickness={0}
          // hideRules={true}
          showScrollIndicator={true}
          isAnimated={true}
          lineBehindBars={true}
          spacing={50}
          roundToDigits={2}
          yAxisLabelPrefix={"$"}
          showFractionalValues={true}
          renderTooltip={(item, index) => {
            return (
              <View
                style={{
                  marginBottom: 20,
                  marginLeft: -6,
                  backgroundColor: "#ffcefe",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text>${item.value}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default PaymentGraph;

const styles = StyleSheet.create({
  block1: {
    gap: responsiveHeight(2.36),
    marginBottom: responsiveHeight(2.36),
    flexDirection: "column",
  },
  text: {
    color: "#AE0000",
    fontSize: responsiveHeight("1.61"),
    fontWeight: "600",
  },
  identifiers:{
    gap:10,
    flexDirection:'row',
    alignItems:'center'
  },
  identifier:{
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  identifier_color:{
    width:5,
    height:5,
    borderRadius:5
  },
  identifier_text:{
    fontSize:10
  },
  black:{
    backgroundColor:'#000'
  },
  red:{
    backgroundColor:'#AE0000'
  }
});
