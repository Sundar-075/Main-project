import moment from "moment";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

function MonthGraph() {
  const data = {
    labels: moment.monthsShort(),
    datasets: [
      {
        data: [20, 45, 28, 80, 85, 43, 12, 34, 21, 32, 45, 56],
        color: (opacity = 1) => `rgba(66, 150, 144, ${opacity})`, // optional
        strokeWidth: 3, // optional
      },
    ],
    legend: ["Expenditure"], // optional
  };
  const chartConfig = {
    backgroundColor: "#f2f2f2",
    backgroundGradientFrom: "#f2f2f2",
    backgroundGradientTo: "#f2f2f2",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barRadius: 5,
  };

  return (
    <BarChart
      data={data}
      width={Dimensions.get("window").width * 2}
      height={250}
      chartConfig={chartConfig}
      withInnerLines={false}
      showValuesOnTopOfBars={true}
    />
  );
}

export default MonthGraph;
