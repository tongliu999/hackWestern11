import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font"; // Expo Font API for loading custom fonts
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClickableTag from "../../components/ClickableTag";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/header";
import Widget from "../../components/CustomWidget";
import AppleLogo from "../../assets/logos/apple-logo.png";
import ShoppingCartLogo from "../../assets/logos/shopping-cart-logo.png";
import SpotifyLogo from "../../assets/logos/spotify-logo.png";
import AmazonLogo from "../../assets/logos/amazon-logo.png";
import PelotonLogo from "../../assets/logos/peloton-logo.png";
import SkipLogo from "../../assets/logos/skip-logo.png";
import FlowLogo from "../../assets/images/flow.png";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
export default function HomeScreen() {
  const transactions = [
    {
      id: 1,
      recurring: true,
      company: "Apple Store",
      category: "Entertainment",
      amount: 5.99,
      logo: "apple-logo.png",
    },
    {
      id: 2,
      recurring: false,
      company: "No Frills",
      category: "Groceries",
      amount: 52.47,
      logo: "shopping-cart-logo.png",
    },
    {
      id: 3,
      recurring: true,
      company: "Spotify",
      category: "Entertainment",
      amount: 12.99,
      logo: "spotify-logo.png",
    },
    {
      id: 4,
      recurring: true,
      company: "Peloton",
      category: "Fitness",
      amount: 9.99,
      logo: "peloton-logo.png",
    },
    {
      id: 5,
      recurring: false,
      company: "Skip the Dishes",
      category: "Delivery",
      amount: 28.39,
      logo: "skip-logo.png",
    },
    {
      id: 6,
      recurring: true,
      company: "Amazon",
      category: "Household",
      amount: 9.99,
      logo: "amazon-logo.png",
    },
  ];
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [text, setText] = useState("");

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleChangeText = (inputText) => {
    setFilteredTransactions(transactions.filter(
      (transaction) => transaction.company.toLowerCase().includes(inputText.toLowerCase())
    ));
  };



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

  const renderItem = ({ item }) => {
    let logo;
    switch (item.logo) {
      case "apple-logo.png":
        logo = AppleLogo;
        break;
      case "shopping-cart-logo.png":
        logo = ShoppingCartLogo;
        break;
      case "spotify-logo.png":
        logo = SpotifyLogo;
        break;
      case "amazon-logo.png":
        logo = AmazonLogo;
        break;
      case "peloton-logo.png":
        logo = PelotonLogo;
        break;
      case "skip-logo.png":
        logo = SkipLogo;
        break;
      default:
        logo = null;
    }
  
    return (
      <View style={{flexDirection: "column", width: "100%"}}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 12, marginHorizontal: 20, width: "90%" }}>
          <View style={{ flexDirection: "row" }}>
            {logo && <Image source={logo} style={{ width: 30, height: 30 }} />}
            <View style={{ alignItems: "flex-start", marginLeft: 10 }}>
              <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                <Text style={{ fontFamily: "arial", fontSize: 14, fontWeight: "bold" }}>{item.company}</Text>
                {item.recurring ? (
                  <Icon name="repeat" size={14} color="#121212" style={{ marginLeft: 5 }} />
                ) : null}
              </View>
              <Text style={{ color: "#AFAFAF", fontSize: 12, marginTop: 5 }}>{item.category}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <Text style={{ fontFamily: "arial", marginTop: 10, marginRight: 10 }}>-${item.amount}</Text>
            {/* <Icon name="bars" style={{ marginTop: 11, marginRight: 10 }} /> */}
          </View>
        </View>
        {item.id != transactions.length && 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <View style={{width: '90%', height: 1, backgroundColor: '#888888'}}/>
        </View>}
      </View>
    );
  };
  


  return (
    <ScrollView style={styles.scrollViewContainer}>
      {/* Wrap content with ScrollView */}
      <View style={styles.container}>
        <View style={styles.lottieContainer}>
          <LottieView
            source={require("../../assets/backgrounds/lava-lamp-bg.json")}
            autoPlay
            loop
            style={styles.backgroundAnimation}
          />
        </View>

        <Header
          logoSource={require("@/assets/images/flow.png")}
          onRightIconPress={handleRightIconPress}
        />

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Morning, {name}.</Text>
        </View>

        <Text style={styles.messageText}>
          You’re now one day closer to graduating debt-free with $10,000 in the
          books.
        </Text>

        <View style={styles.widgetContainer}>
          <TouchableOpacity onPress={handlePress}>
            <View style={[styles.widget, styles.progressWidget]}>
              <View style={styles.progressContainer}>
                <Text style={styles.progressBarText}>{`${50}%`}</Text>
                <View style={styles.progressBar}>
                  <LinearGradient
                    colors={["#bdbdbd", "#797979"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.progress}
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
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.reminderText}>Reminders</Text>

        <View style={styles.reminderWidgetsContainer}>
          <View style={{ width: 168 }}>
            <View style={[styles.widget]}>
              <Text style={styles.reminderWidgetText}>
                <Text style={styles.widgetMoneyText}>$23.46</Text> left{"\n"}
                <Text style={{ fontSize: 14 }}>in{" "}
                  <ClickableTag style={{ backgroundColor: "#DAD8F4" }}>
                    <Text style={{ color: "#525278" }}>non-essentials</Text>
                  </ClickableTag>
                  this week.
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ width: 190, marginLeft: 10 }}>
            <View style={[styles.widget, styles.reminderWidget]}>
              <Text style={styles.reminderWidgetText}>
                <Text style={styles.widgetMoneyText}>$300</Text> needed{"\n"}
                <Text style={{ fontSize: 14 }}>
                  for upcoming{" "}
                  <ClickableTag style={{ backgroundColor: "#CFE2D5" }}>
                    <Text style={{ color: "#054430" }}>bills</Text>
                  </ClickableTag>
                  {"\n"}this month.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={[styles.reminderText, { textAlign: "center" }]}>
            Transactions
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "arial",
                color: "#888888",
                textDecorationLine: "underline",
                marginTop: 10,
                marginLeft: "auto",
                marginRight: 10,
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search for a past transaction"
            placeholderTextColor="#888888"
            onChangeText={handleChangeText}
          />
          <FlatList
            data={filteredTransactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ width: '100%' }}
          />
        </View>
        </View>

    </ScrollView>
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
  scrollViewContainer: {
    flex: 1,
  },
  backgroundAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
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
  widgetContainer: {
    flexDirection: "row", // Ensure the widget is aligned properly
    justifyContent: "flex-end", // Align it to the right
    width: "100%",
    marginTop: 15,
    paddingRight: 10,
  },
  progressWidget: {
    width: 200,
    alignItems: "flex-end",
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
    marginLeft: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    width: `${50}%`,
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
  reminderWidgetsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Ensures widgets are spaced equally
    marginLeft: 10,
    marginTop: 15,
    flexWrap: "nowrap",
  },
  reminderText: {
    fontSize: 24,
    color: "#1E1E2D",
    fontFamily: "bricolage-grotesque",
    fontWeight: "bold",
    marginLeft: 20, // Ensures there's a margin before the text
  },
  widgetText: {
    fontFamily: "bricolage-grotesque",
    fontSize: 12,
  },
  reminderWidget: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: "row", // Ensure the content is aligned horizontally
    justifyContent: "space-between", // Distribute space evenly between the money and text
    alignItems: "center", // Vertically center the text and amount
  },
  reminderWidgetText: {
    fontSize: 24,
    color: "#1E1E2D",
    fontFamily: "bricolage-grotesque",
    flexDirection: "row", // Ensure the text inside is aligned in a row
    alignItems: "center", // Vertically center the text and amount
  },
  widgetMoneyText: {
    fontFamily: "bricolage-grotesque",
    fontWeight: "bold",
    fontSize: 24,
  },
  blurView: {
    position: "absolute", // Ensure it's layered on top
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  widget: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    elevation: 5,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "column", // To position the TextInput and icon button horizontally
    alignItems: "center", // Align the items in the center vertically
    width: "100%", // Or set a custom width
    position: "relative", // This is to position the button inside the TextInput
    paddingHorizontal: 0,
  },
  textInput: {
    height: 40,
    width: 323,
    borderColor: "#888888",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 30,
    marginLeft: 20,
    marginTop: 24,
    outlineColor: "transparent",
  },
  transactionList: {
    paddingHorizontal: 20,
  },
  transactionItem: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    width: "100%",
  },
  transactionDescription: {
    fontSize: 16,
    color: "#1E1E2D",
    fontWeight: "bold",
  },
  transactionAmount: {
    fontSize: 14,
    color: "#1E1E2D",
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: "#888888",
    marginTop: 2,
  },
  itemContainer: {
    width: '100%',
  }
});

