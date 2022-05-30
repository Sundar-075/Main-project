import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function ProfileScreen({ route, navigation }) {
  const { image, profile, back, add, logout } = route.params;
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 25, letterSpacing: 1 }}>
            PROFILE
          </Text>
          <Text
            style={{ color: "white", fontSize: 25, letterSpacing: 2 }}
          ></Text>
        </View>
        <View style={styles.container2}>
          <Text style={{ color: "white", fontSize: 25, letterSpacing: 2 }}>
            USER
          </Text>
          <Image
            source={profile}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <View style={styles.container3}>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={add}
                  style={{ width: 30, height: 30, marginRight: 25 }}
                />
                <Text>ADD PAYTM ID</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={add}
                  style={{ width: 30, height: 30, marginRight: 17 }}
                />
                <Text>ADD PHONEPE ID</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={logout}
                  style={{ width: 30, height: 30, marginRight: 25 }}
                />
                <Text>LOGOUT</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default ProfileScreen;

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
    margin: 25,
    height: "100%",
    // backgroundColor: "red",
  },
  container1: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container2: {
    flex: 2.5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    top: 70,
    // backgroundColor: "blue",
  },
  container3: {
    flex: 4,
    // backgroundColor: "red",
    top: 30,
    flexDirection: "column",
    margin: 45,

    // alignItems: "center",
    // backgroundColor,
  },
});
