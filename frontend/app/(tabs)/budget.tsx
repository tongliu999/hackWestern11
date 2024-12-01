import { StyleSheet, Image, Platform, Text, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { LinearGradient } from "expo-linear-gradient";

import Ionicons from "@expo/vector-icons/Ionicons";
import Widget from "@/components/CustomWidget";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";

export default function BudgetScreen() {
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
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#FFF9F2", "#E8E2DB"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.text}>Edit Budget</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#FFF9F2", "#E8E2DB"]}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.text}>Add Money</Text>
          </LinearGradient>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>Goals</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            maxWidth: 350,
            justifyContent: "space-between",
          }}
        >
          <Widget style={styles.progressWidget}>
            <View style={styles.widgetTextContainer}>
              <Text style={styles.widgetText}>Graduating Debt-Free</Text>
              <View style={styles.statContainer}>
                <Text style={styles.progressBarText}>{`${60}%`}</Text>
                <Ionicons
                  name="information-circle-outline"
                  size={15}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.divider} />
            <ProgressBar currentValue={6000} maxValue={10000} />
          </Widget>
          <Widget style={styles.progressWidget}>
            <View style={styles.widgetTextContainer}>
              <Text style={styles.widgetText}>Short Term Savings</Text>
              <View style={styles.statContainer}>
                <Text style={styles.progressBarText}>{`${20}%`}</Text>
                <Ionicons
                  name="information-circle-outline"
                  size={15}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.divider} />
            <ProgressBar currentValue={2000} maxValue={10000} />
          </Widget>
        </View>
        <View style={[styles.divider, { marginTop: 40 }]} />
        <View style={styles.titleContainer}>
          <Text style={styles.header}>Nov. Budget: </Text>
          <Text
            style={[
              styles.header,
              { fontFamily: "space-mono", fontWeight: "regular" },
            ]}
          >
            6 days to go.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFF9F2",
    marginTop: 40,
  },
  header: {
    fontSize: 24,
    fontFamily: "bricolage-grotesque",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 45,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 12,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "bricolage-grotesque",
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
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 4,
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
  widgetText: {
    fontFamily: "bricolage-grotesque",
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginVertical: 10,
    width: "100%",
  },
});

