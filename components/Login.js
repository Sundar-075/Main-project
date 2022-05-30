import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";

export default function Login() {
  const images = {
    back: require("../assets/LoginBackground.png"),
    front: require("../assets/LoginMoji.png"),
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={images.back} style={styles.image}>
        <Image source={images.front} style={styles.moji}></Image>
      </ImageBackground>
      <Text style={styles.text}>Spend Smarter{"\n"}Save More</Text>
      <View style={styles.button}>
        <Button title="Get Started" color="#008080"></Button>
      </View>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        Already have an account ? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  moji: {
    flex: 0.75,
  },
  text: {
    color: "#008080",
    fontSize: 40,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 0.05,
    width: "100%",
    borderRadius: 25,
    // height: "70%",
    alignItems: "center",
  },
});
