import {
  StyleSheet,
  Image,
  Platform,
  View,
  ScrollView,
  Text,
} from "react-native";

import Header from "@/components/header";
import Feather from "@expo/vector-icons/Feather";

export default function TabTwoScreen() {
  const handleRightIconPress = () => {
    console.log("Right icon clicked!");
  };
  return (
    <View style={styles.parentContainer}>
      {/* Navbar with Logo and Icon */}
      <Header
        logoSource={require("@/assets/images/flow.png")}
        onRightIconPress={handleRightIconPress}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Monthly Huddle:</Text>
            <View style={styles.dateContainer}>
              <Feather name="chevron-left" />
              <Text style={styles.dateText}>Nov. 1st - Nov. 29th, 2024</Text>
              <Feather name="chevron-right" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingBottom: 150,
  },
  parentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF9F2",
    position: "relative",
    fontFamily: "bricolage-grotesque",
    paddingTop: 120,
  },
  container: {
    width: 350,
    marginLeft: 0,
    marginRight: 0,
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Bricolage Grotesque",
    color: "#1e1e2d",
    textAlign: "center",
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Bricolage Grotesque",
    color: "#1e1e2d",
    textAlign: "center",
  },
});

