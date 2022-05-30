import React from "react";
import moment from "moment";
import { View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

function CategoryGraph(props) {
  const [type, setType] = React.useState("True");
  const data = [
    {
      name: "Food",
      amount: 2150,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Travel",
      amount: 2800,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Books",
      amount: 1000,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Clothes",
      amount: 10000,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Others",
      amount: 1230,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, letterSpacing: 2 }}>MAY 2022</Text>
        <TouchableOpacity onPress={() => setType(!type)}>
          <Image
            source={props.change}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={250}
        chartConfig={chartConfig}
        accessor={"amount"}
        backgroundColor={"transparent"}
        center={[0, 0]}
        absolute={type}
      />
    </View>
  );
}

export default CategoryGraph;
