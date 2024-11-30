import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font"; // Expo Font API for loading custom fonts
import AsyncStorage from "@react-native-async-storage/async-storage";
import Widget from "../../components/CustomWidget"; // Import the custom Widget component

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "bricolage-grotesque": require("../../assets/fonts/BricolageGrotesque-Regular.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleRightIconPress = () => {
    console.log("Right icon clicked!");
  };

  const handlePress = () => {
    console.log("Widget clicked!");
  };

  const name = "Tom";

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Success", "AsyncStorage has been cleared.");
    } catch (e) {
      Alert.alert("Error", "Failed to clear AsyncStorage.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require("../../assets/backgrounds/lava-lamp-bg.json")}
          autoPlay
          loop
          style={styles.backgroundAnimation}
        />
      </View>

      {/* Navbar with Logo and Icon */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.logoContainer}>
          <Text style={styles.logoText}>Logo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRightIconPress}
          style={styles.iconContainer}
        >
          <Icon name="bell-o" size={20} color="#121212" />
        </TouchableOpacity>
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Morning, {name}.</Text>
      </View>

      <Text style={styles.messageText}>
        You’re now one day closer to graduating debt-free with $10,000 in the
        books.
      </Text>
      <View style={{ alignItems: "flex-end" }}>
        <Widget style={styles.progressWidget}>
          <View style={styles.progressContainer}>
            <Text style={styles.progressBarText}>{`${50}%`}</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progress,
                  {
                    backgroundImage:
                      "linear-gradient(to right, #bdbdbd, #797979)",
                    width: `${50}%`,
                  },
                ]}
              />
            </View>
          </View>
          <View style={styles.widgetTextContainer}>
            <Text style={styles.widgetText}>graduating debt free</Text>
            <Icon
              name="angle-right"
              size={15}
              color="#121212"
              style={styles.icon}
            />
          </View>
        </Widget>
      </View>

      {/* <Widget>
        <Text>TEST CONTENT</Text>
      </Widget> */}

      <View>
        <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    position: "relative",
  },
  backgroundAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  navbar: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    zIndex: 2,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
  },
  greetingContainer: {
    marginTop: 170,
    alignItems: "flex-start",
    width: "100%",
  },
  greetingText: {
    fontSize: 36,
    color: "#1E1E2D",
    fontFamily: "bricolage-grotesque",
    marginLeft: 20,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 16,
    color: "#1E1E2D",
    fontFamily: "bricolage-grotesque",
    marginLeft: 20,
    marginTop: 10,
  },
  progressWidget: {
    marginTop: 15,
    paddingRight: 10,
    alignItems: "flex-end",
    width: 180,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginLeft: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 5,
  },
  progressBarText: {
    fontWeight: "bold",
    fontFamily: "bricolage-grotesque",
  },
  widgetTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 3,
  },
  lottieContainer: {
    position: "absolute",
    marginTop: 80,
    width: 300,
    height: 300,
    marginLeft: 30,
  },
  widgetText: {
    fontFamily: "bricolage-grotesque",
  },
});

