import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import moment from "moment";
import React from "react";

function PostScreen({ route, navigation }) {
  const { image, back } = route.params;
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState(moment().format("MMM DD YYYY"));
  const [typay, setTypay] = React.useState("");
  const [type, setType] = React.useState("");

  function addData() {
    let newdata = {
      id: 6,
      name: name,
      typeofpayment: typay,
      date: date,
      amount: parseInt(amount),
      type: type,
    };
    setName("");
    setAmount("");
    setTypay("");
    setType("");

    navigation.navigate("Home", { newdata });
  }
  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView>
        <ScrollView style={{ top: 40 }}>
          <View style={styles.container}>
            <View style={styles.container1}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image source={back} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: "white" }}>
                Add Income/Expense
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}></Text>
            </View>
            <View style={styles.container2}>
              <View
                style={{
                  flex: 1,
                  margin: 4,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text}>NAME</Text>
                <TextInput
                  style={styles.textinput}
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 4,
                }}
              >
                <Text style={styles.text}>AMOUNT</Text>
                <TextInput
                  style={styles.textinput}
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                  placeholder=""
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <Text style={styles.text}>DATE</Text>
                <TextInput
                  style={styles.textinput}
                  value={date}
                  onChangeText={setDate}
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <Text style={styles.text}>TYPE OF PAYMENT</Text>
                <TextInput
                  style={styles.textinput}
                  value={typay}
                  onChangeText={setTypay}
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <Text style={styles.text}>TYPE</Text>
                <TextInput
                  style={styles.textinput}
                  value={type}
                  onChangeText={setType}
                  placeholder="Income/Expense"
                />
              </View>
              <View style={{ flex: 1, margin: 4, padding: 10 }}>
                <Button onPress={() => addData()} title="Add" color="#2F7E79" />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default PostScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    margin: 20,
    height: "100%",
    // backgroundColor: "red",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  container2: {
    top: 25,
    flex: 5,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#429690",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    // borderWidth: 1,
    marginBottom: "25%",
  },
  textinput: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    borderColor: "#DDDDDD",
  },
  text: {
    color: "black",
    fontSize: 15,
    letterSpacing: 0.5,
    padding: 5,
  },
});
