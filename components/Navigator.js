import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import StatsScreen from "./screens/StatsScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostScreen from "./screens/PostScreen";
import HomeBackground from "../assets/HomeBackground.png";
import income from "../assets/icons/income.png";
import expense from "../assets/icons/expense.png";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ top: -15, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 35,
          backgroundColor: "#e0e0e0",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
function Navigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            image: HomeBackground,
            inimage: income,
            eximage: expense,
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/icons/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#549994" : "#AAAAAA",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreen}
          initialParams={{
            back: require("../assets/icons/blackback.png"),
            change: require("../assets/icons/change.png"),
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/icons/barchart.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#549994" : "#AAAAAA",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          initialParams={{
            image: HomeBackground,
            back: require("../assets/icons/backicon.png"),
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/icons/plus.png")}
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          initialParams={{
            back: require("../assets/icons/blackback.png"),
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/icons/history.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#549994" : "#AAAAAA",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{
            image: HomeBackground,
            profile: require("../assets/icons/Profilepic.png"),
            back: require("../assets/icons/backicon.png"),
            add: require("../assets/icons/add.png"),
            logout: require("../assets/icons/logout.png"),
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/icons/user.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#549994" : "#AAAAAA",
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 0.6,
    width: "100%",
    backgroundColor: "#f2f2f2",
  },
});
