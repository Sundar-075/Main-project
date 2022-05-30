import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import DayGraph from "./graphs/DayGraph";
import MonthGraph from "./graphs/MonthGraph";
import CategoryGraph from "./graphs/CategoryGraph";

function StatsScreen({ route, navigation }) {
  const { back, change } = route.params;

  const [selected, setSelected] = React.useState("DAY");
  const data = [
    {
      id: 1,
      name: "Food",
      typeofpayment: "Cash",
      date: "Apr 21 2022",
      amount: 500,
      type: "expense",
    },
    {
      id: 2,
      name: "Clothes",
      typeofpayment: "Cash",
      date: "Apr 21 2022",
      amount: 5000,
      type: "expense",
    },
    {
      id: 3,
      name: "Food",
      typeofpayment: "Cash",
      date: "Apr 21 2022",
      amount: 1000,
      type: "expense",
    },
    {
      id: 5,
      name: "Travel",
      typeofpayment: "Cash",
      date: "Apr 22 2022",
      amount: 500,
      type: "expense",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: "red",
          marginBottom: 5,
          justifyContent: "space-between",
          flexDirection: "row",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "black",
        }}
      >
        <View
          style={{
            padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "black",
            }}
          >
            {item.name} ({item.typeofpayment})
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "black",
            }}
          >
            {item.date}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: "red",
          }}
        >
          Rs.{item.amount}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={back} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <Text style={styles.txt}>STATISTICS</Text>
        <Text style={styles.txt}></Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => setSelected("DAY")}>
          <Text
            style={{
              backgroundColor: selected == "DAY" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            DAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("MONTH")}>
          <Text
            style={{
              backgroundColor: selected == "MONTH" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            MONTH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("CATEGORIES")}>
          <Text
            style={{
              backgroundColor: selected == "CATEGORIES" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            CATEGORIES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("INSIGHTS")}>
          <Text
            style={{
              backgroundColor: selected == "INSIGHTS" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            INSIGHTS
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {selected == "DAY" ? (
            <DayGraph />
          ) : selected == "MONTH" ? (
            <MonthGraph />
          ) : selected == "CATEGORIES" ? (
            <CategoryGraph change={change} />
          ) : null}
        </ScrollView>
      </View>
      <View style={styles.container4}>
        <Text style={{ color: "black", fontSize: 16, marginBottom: 10 }}>
          Top Spending
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default StatsScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f2f2f2",
    // justifyContent: "center",
    // alignItems: "center",
  },
  container: {
    flex: 1,
    margin: 30,
    height: "100%",
  },
  container1: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    alignItems: "center",
  },
  container2: {
    flex: 0.75,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "blue",
    alignItems: "center",
  },
  container3: {
    flex: 3,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  container4: {
    flex: 3,
    paddingBottom: 20,
    // backgroundColor: "black",
  },
  txt: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
  },
  txt2: {
    color: "black",
    fontSize: 15,
    letterSpacing: 1,
  },
});
