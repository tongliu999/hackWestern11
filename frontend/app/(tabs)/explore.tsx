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
import ClickableTag from "@/components/ClickableTag";

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

          <View>
            <Image
              source={require("@/assets/images/graph.png")}
              style={{ width: 350, height: 180 }}
            />
          </View>

          <View style={[styles.divider, { marginTop: 40 }]} />

          <View style={styles.reminderWidgetsContainer}>
            <View style={{ width: 168 }}>
              <View style={[styles.widget]}>
                <Text style={styles.reminderWidgetText}>
                  <Text style={styles.widgetMoneyText}>91%</Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "space-mono",
                    }}
                  >
                    {" "}
                    consistent{" "}
                  </Text>
                  <View style={[styles.textContainer]}>
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      You only went over{" "}
                    </Text>
                  </View>
                  <View style={[styles.textContainer]}>
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      the{" "}
                    </Text>
                    <ClickableTag style={{ backgroundColor: "#DAD8F4" }}>
                      <Text style={{ color: "#525278" }}>non-essentials</Text>
                    </ClickableTag>
                  </View>
                  <View style={[styles.textContainer]}>
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      limit by $17.
                    </Text>
                  </View>
                </Text>
              </View>
            </View>
            <View style={{ width: 190, marginLeft: 10 }}>
              <View style={[styles.widget, styles.reminderWidget]}>
                <Text style={styles.reminderWidgetText}>
                  <Text style={styles.widgetMoneyText}>$112</Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "space-mono",
                    }}
                  >
                    {" "}
                    on Amazon{" "}
                  </Text>
                  <View style={[styles.textContainer]}>
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      It's your leading{" "}
                    </Text>
                  </View>
                  <View style={[styles.textContainer]}>
                    <ClickableTag style={{ backgroundColor: "#DAD8F4" }}>
                      <Text style={{ color: "#525278" }}>non-essentials</Text>
                    </ClickableTag>
                  </View>
                  <View style={[styles.textContainer]}>
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      monthly expense.
                    </Text>
                  </View>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View>
            <Image
              source={require("@/assets/images/graph2.png")}
              style={{ width: 350, height: 180 }}
            />
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
    backgroundColor: "#FFF9F2",
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

  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginVertical: 10,
    width: "100%",
  },

  reminderWidgetsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Ensures widgets are spaced equally
    alignItems: "center",
    // marginLeft: 10,
    marginTop: 10,
    flexWrap: "nowrap",
  },
  reminderText: {
    fontSize: 24,
    color: "#1E1E2D",
    fontFamily: "bricolage-grotesque",
    fontWeight: "bold",
    alignItems: "center",
    // marginLeft: 20, // Ensures there's a margin before the text
  },
  widgetText: {
    fontFamily: "bricolage-grotesque",
    fontSize: 12,
    alignItems: "center",
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "bricolage-grotesque",
    flexShrink: 0,
    marginTop: 10,
  },
  widgetMoneyText: {
    fontFamily: "bricolage-grotesque",
    fontWeight: "bold",
    fontSize: 24,
  },
  widget: {
    backgroundColor: "#FFF9F2",
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
});

