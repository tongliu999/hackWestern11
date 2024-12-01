import { StyleSheet, Image, ScrollView, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Ionicons from "@expo/vector-icons/Ionicons";
import Widget from "@/components/CustomWidget";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";
import ClickableTag from "@/components/ClickableTag";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

export default function BudgetScreen() {
  const handleRightIconPress = () => {
    console.log("Right icon clicked!");
  };

  const currentValue1 = 2000;
  const maxValue1 = 10000;

  const currentValue2 = 6000;
  const maxValue2 = 10000;
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
                  <Text style={styles.progressBarText}>{`${
                    (currentValue1 / maxValue1) * 100
                  }%`}</Text>
                  <Ionicons
                    name="information-circle-outline"
                    size={15}
                    color="black"
                  />
                </View>
              </View>
              <View style={styles.divider} />
              <ProgressBar currentValue={currentValue1} maxValue={maxValue1} />
            </Widget>
            <Widget style={styles.progressWidget}>
              <View style={styles.widgetTextContainer}>
                <Text style={styles.widgetText}>Short Term Savings</Text>
                <View style={styles.statContainer}>
                  <Text style={styles.progressBarText}>{`${
                    (currentValue2 / maxValue2) * 100
                  }%`}</Text>
                  <Ionicons
                    name="information-circle-outline"
                    size={15}
                    color="black"
                  />
                </View>
              </View>
              <View style={styles.divider} />
              <ProgressBar currentValue={currentValue2} maxValue={maxValue2} />
            </Widget>
          </View>
          <View style={[styles.divider, { marginTop: 30 }]} />
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
          <View style={styles.textContainer}>
            <Text style={{ fontFamily: "bricolage-grotesque", fontSize: 19 }}>
              $300{" "}
            </Text>
            <Text
              style={{
                fontSize: 19,
              }}
            >
              needed for{" "}
            </Text>
            <ClickableTag style={{ backgroundColor: "#CFE2D5" }}>
              <Text style={{ color: "#054430" }}>bills</Text>
            </ClickableTag>
          </View>

          <View style={styles.transactionsContainer}>
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <FontAwesome6 name="circle-check" size={15} color="black" />
                <Text style={[styles.transactionText, styles.transactionTitle]}>
                  $1200 Rent
                </Text>
              </View>
              <Text style={[styles.statusText, styles.paidText]}>Paid</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.infoRow}>
                <FontAwesome6 name="circle-check" size={15} color="black" />
                <Text style={[styles.transactionText, styles.transactionTitle]}>
                  $250 Rogers Wireless
                </Text>
              </View>
              <Text style={[styles.statusText, styles.dueSoonText]}>
                Due in 2 days
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.infoRow}>
                <FontAwesome6 name="circle-check" size={15} color="black" />
                <Text style={[styles.transactionText, styles.transactionTitle]}>
                  $50 Hydro & Utilities
                </Text>
              </View>
              <Text style={[styles.statusText, styles.dueLaterText]}>
                Due in 5 days
              </Text>
            </View>
          </View>

          <View style={[styles.textContainer, { marginTop: 40 }]}>
            <Text style={{ fontFamily: "bricolage-grotesque", fontSize: 19 }}>
              $47.56{" "}
            </Text>
            <Text
              style={{
                fontSize: 19,
              }}
            >
              left in{" "}
            </Text>
            <ClickableTag style={{ backgroundColor: "#E2CFDE" }}>
              <Text style={{ color: "#525278" }}>essentials</Text>
            </ClickableTag>
          </View>

          <View style={[styles.frameContainer, { marginTop: 20 }]}>
            <View style={styles.infoRow}>
              <Ionicons
                name="information-circle-outline"
                size={15}
                color="black"
              />
              <Text style={styles.frameText}>
                There is only 6 days left in the month. All leftover funds will
                be transferred to short-term or long-term savings if not
                re-allocated to another fund.
              </Text>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.optionText}>Keep it for savings</Text>
            </View>
            <View style={styles.optionWithIcon}>
              <Text style={styles.optionText}>Re-allocate now</Text>
              <Feather name="arrow-up-right" size={15} color="#000" />
            </View>
          </View>

          <View style={[styles.textContainer, { marginTop: 40 }]}>
            <Text style={{ fontFamily: "bricolage-grotesque", fontSize: 19 }}>
              $23.46{" "}
            </Text>
            <Text
              style={{
                fontSize: 19,
              }}
            >
              left in{" "}
            </Text>
            <ClickableTag style={{ backgroundColor: "#DAD8F4" }}>
              <Text style={{ color: "#525278" }}>non-essentials</Text>
            </ClickableTag>
          </View>

          <View style={[styles.frameContainer, { marginTop: 20 }]}>
            <View style={styles.infoRow}>
              <Ionicons
                name="information-circle-outline"
                size={15}
                color="black"
              />
              <Text style={styles.frameText}>
                There is only 6 days left in the month. All leftover funds will
                be transferred to short-term or long-term savings if not
                re-allocated to another fund.
              </Text>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.optionText}>Keep it for savings</Text>
            </View>
            <View style={styles.optionWithIcon}>
              <Text style={styles.optionText}>Re-allocate now</Text>
              <Feather name="arrow-up-right" size={15} color="#000" />
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "bricolage-grotesque",
    flexShrink: 0,
    marginTop: 10,
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

  transactionsContainer: {
    width: "100%",
    marginTop: 20,
    gap: 10,
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 12,
    height: 44,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  transactionText: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
    textAlign: "left",
  },
  transactionTitle: {
    color: "#1e1e2d",
  },
  statusText: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
    textAlign: "right",
  },
  paidText: {
    color: "#8b9197",
  },
  dueSoonText: {
    color: "#e16364",
  },
  dueLaterText: {
    color: "#8b9197",
  },
  frameContainer: {
    gap: 10,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    flexDirection: "column",
  },
  frameText: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
    textAlign: "left",
    flexWrap: "wrap",
    flexShrink: 1,
    width: "100%",
  },
  optionsContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f9f9f9",
    marginTop: -5,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  optionWithIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  optionText: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
  },
});

