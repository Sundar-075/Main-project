import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";

function HistoryScreen({ route, navigation }) {
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
      id: 4,
      name: "Salary",
      typeofpayment: "Transfer",
      date: "Apr 22 2022",
      amount: 50000,
      type: "income",
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
  const [paytmdata, setPaytmData] = React.useState({});
  const [phonepedata, setPhonepeData] = React.useState({});

  // console.log(data);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_paytm", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((res) => res.json())
      .then((paytmdata) => setPaytmData(paytmdata));
  }, []);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_phonepe", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((res) => res.json())
      .then((phonepedata) => setPhonepeData(phonepedata));
  }, []);
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
            color: item.type === "expense" ? "red" : "green",
          }}
        >
          Rs.{item.amount}
        </Text>
      </View>
    );
  };

  const { back } = route.params;
  const [selected, setSelected] = React.useState("MANUAL");
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
        <Text style={styles.txt}>HISTORY</Text>
        <Text style={styles.txt}></Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => setSelected("MANUAL")}>
          <Text
            style={{
              backgroundColor: selected == "MANUAL" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            MANUAL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("PAYTM")}>
          <Text
            style={{
              backgroundColor: selected == "PAYTM" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            PAYTM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("PHONEPE")}>
          <Text
            style={{
              backgroundColor: selected == "PHONEPE" ? "#438883" : null,
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            PHONEPE
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => setSelected("GPAY")}>
          <Text
            style={{
              backgroundColor: selected == "GPAY" ? "#438883" : "",
              padding: 10,
              borderRadius: 25,
              ...styles.txt2,
            }}
          >
            GPAY
          </Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.container3}>
        <FlatList
          data={
            selected == "PAYTM"
              ? paytmdata
              : selected == "PHONEPE"
              ? phonepedata
              : data
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default HistoryScreen;

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
    // backgroundColor: "red",
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
    flex: 4,
    bottom: 45,
    marginTop: 30,
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
