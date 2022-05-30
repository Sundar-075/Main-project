import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ route, navigation }) {
  // console.log(route.params);
  const { image, inimage, eximage, newdata } = route.params;
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

  if (newdata !== undefined) {
    data.push(newdata);
  }

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

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.containter1}>
          <Text style={styles.title}> Hello,User</Text>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flex: 0.5,
              margin: 30,
            }}
          >
            <Text style={styles.title}>Total Balance {"\n"} Rs.3000</Text>
          </View>
          <View
            style={{
              // backgroundColor: "orange",
              flex: 1,
              margin: 25,
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              <Image source={inimage} style={{ width: 20, height: 20 }} />
              Income {"\n"} Rs.4000
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              <Image source={eximage} style={{ width: 20, height: 20 }} />
              Expenses{"\n"} Rs.1000
            </Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View
            style={{
              flex: 0.5,
              // backgroundColor: "red",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>
              Transaction History
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                  textDecorationLine: "underline",
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  container: {
    flex: 1,
    margin: 20,
    height: "100%",
  },
  containter1: {
    flex: 0.5,
    // backgroundColor: "red",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  container2: {
    flex: 2,
    backgroundColor: "#1B5C58",
    borderRadius: 50,
    marginBottom: 25,
    shadowColor: "#e0e0e0",
    // marginTop: -30,
  },
  container3: {
    flex: 3.5,
    marginTop: -10,
    marginBottom: 40,
  },
});
