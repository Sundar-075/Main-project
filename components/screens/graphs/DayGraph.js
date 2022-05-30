import React from "react";
import moment from "moment";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

function DayGraph() {
  const [tooltipPos, setTooltipPos] = React.useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  const days = Array(moment().daysInMonth())
    .fill()
    .map((_, i) => i + 1);
  const data = {
    labels: days,
    datasets: [
      {
        data: [
          20, 45, 28, 80, 85, 43, 12, 34, 21, 32, 45, 56, 20, 45, 28, 80, 85,
          43, 12, 34, 21, 32, 45, 56, 20, 45, 28, 80, 85, 43, 12,
        ],
        color: (opacity = 1) => `rgba(66, 150, 144, ${opacity})`, // optional
        strokeWidth: 3, // optional
      },
    ],
    legend: ["Expenditure (MAY)"], // optional
  };
  const chartConfig = {
    backgroundColor: "#f2f2f2",
    backgroundGradientFrom: "#f2f2f2",
    backgroundGradientTo: "#f2f2f2",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "3",
      stroke: "#438883",
    },
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get("window").width * 2}
      height={250}
      chartConfig={chartConfig}
      bezier
      withHorizontalLines={false}
      withVerticalLines={false}
      decorator={() => {
        return tooltipPos.visible ? (
          <View>
            <Svg>
              <Rect
                x={tooltipPos.x - 15}
                y={tooltipPos.y + 10}
                width="40"
                height="30"
                fill="#438883"
              />
              <TextSVG
                x={tooltipPos.x + 5}
                y={tooltipPos.y + 30}
                fill="white"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
              >
                {tooltipPos.value}
              </TextSVG>
            </Svg>
          </View>
        ) : null;
      }}
      onDataPointClick={(data) => {
        let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;

        isSamePoint
          ? setTooltipPos((previousState) => {
              return {
                ...previousState,
                value: data.value,
                visible: !previousState.visible,
              };
            })
          : setTooltipPos({
              x: data.x,
              value: data.value,
              y: data.y,
              visible: true,
            });
      }}
    />
  );
}

export default DayGraph;
