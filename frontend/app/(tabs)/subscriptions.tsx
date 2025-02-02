import {
  StyleSheet,
  Image,
  Platform,
  View,
  ScrollView,
  Text,
  Modal,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/header";
import SubscriptionInsight from "@/components/subscriptionInsight";
import { useState } from "react";
import axios from "axios";

export default function SubscriptionsScreen() {
  const handleRightIconPress = () => {
    console.log("Right icon clicked!");
  };

  const [isVisible, setIsVisible] = useState(false);
  const [company, setCompany] = useState("");
  const [planName, setPlanName] = useState("");

  // Toggle function to open/close the modal
  const toggleModal = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  const sendPostRequest = async () => {
    const url =
      "https://general-runtime.voiceflow.com/state/user/tong/interact";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "VF.DM.674b2d2b7151fc8271b56928.I31WIKaUAwb6uaG6",
      versionID: "production",
      Accept: "application/json",
    };

    const body = {
      request: {
        type: "text",
        payload: `I'd like to change my subscription plan from ${company} to the ${planName}.`,
      },
    };

    try {
      const response = await axios.post(url, body, { headers });
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCardPress = (companyName, subscriptionTitle) => {
    // Handle the press event and log the subscription title
    console.log(`${subscriptionTitle} card pressed!`);
    setCompany(companyName);
    setPlanName(subscriptionTitle);
    toggleModal(); // Open/close modal or any other action
  };

  const handleYesPress = () => {
    sendPostRequest();
    toggleModal();
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
            <Text style={styles.title}>current subscription spending</Text>
            <View style={styles.spendingContainer}>
              <View style={styles.spendingGroup}>
                <Text style={styles.amount}>$136.36</Text>
                <Text style={styles.frequency}>/ month</Text>
              </View>
            </View>
          </View>

          <LinearGradient
            style={[
              styles.summaryContainer,
              { marginTop: 20, width: "100%", overflow: "hidden" },
            ]}
            colors={["#FFF9F2", "#E9E9E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.text}>
              <Text style={styles.boldText}>
                That’s $1,636.32 spent on subscriptions in just one year
              </Text>
              <Text>
                . Use the insights below to save $45 per month and over $500 by
                the end of the year with just a few clicks.
              </Text>
            </Text>
          </LinearGradient>

          <View style={[styles.titleContainer, { marginBottom: 20 }]}>
            <Text style={styles.header}>Subscription Insights </Text>
          </View>
          <SubscriptionInsight
            title="Amazon Prime"
            amount="$9.99"
            subtitle1="Standard"
            subtitle2="Monthly"
            description="Can be optimized to save 58% annually as a student."
            iconSource="alert-circle-outline"
            onPress={() => handleCardPress("Amazon Prime", "prime")}
            iconBackgroundColor="#EEDBDA"
          />
          <SubscriptionInsight
            title="Uber"
            amount="$9.99"
            subtitle1="Uber One"
            subtitle2="Monthly"
            description="Consider your potentially redundant subscriptions between Uber One and Skip+."
            iconSource="remove-circle-outline"
            onPress={() => handleCardPress("Uber One", "eatsPass")}
            iconBackgroundColor="#EEECDA"
          />
          <SubscriptionInsight
            title="SkipTheDishes"
            amount="$9.99"
            subtitle1="Skip+"
            subtitle2="Monthly"
            description="Consider potentially redundant subscriptions between Skip+ and UberOne."
            iconSource="remove-circle-outline"
            onPress={() => handleCardPress("SkipTheDishes", "skip+")}
            iconBackgroundColor="#EEECDA"
          />
          <SubscriptionInsight
            title="LA Fitness"
            amount="$30.00"
            subtitle1="Standard"
            subtitle2="Monthly"
            description="Are you still using LA Fitness regularly? This is your second most expensive subscription. "
            iconSource="remove-circle-outline"
            onPress={() => handleCardPress("LA Fitness", "Annual")}
            iconBackgroundColor="#EEECDA"
          />

          <View
            style={[styles.titleContainer, { marginBottom: 20, marginTop: 40 }]}
          >
            <Text style={styles.header}>Your Subscriptions</Text>
          </View>
          <SubscriptionInsight
            title="Netflix"
            amount="$30.00"
            subtitle1="App+"
            subtitle2="Monthly"
            description="Billing occurs today."
            iconSource="checkmark-circle-outline"
            onPress={() => handleCardPress("Netflix", "premium")}
            iconBackgroundColor="#ccf0d6"
          />
          <SubscriptionInsight
            title="GoodLife Fitness"
            amount="$70.00"
            subtitle1="Basic Plan"
            subtitle2="Monthly"
            description="Next Billing is tomorrow."
            iconSource="checkmark-circle-outline"
            onPress={() => handleCardPress("GoodLife", "Member+")}
            iconBackgroundColor="#ccf0d6"
          />
          <SubscriptionInsight
            title="Adobe"
            amount="$60.00"
            subtitle1=" Creative Cloud Trial"
            subtitle2="Monthly"
            description="Trial ends and billing occurs in 7 days."
            iconSource="checkmark-circle-outline"
            onPress={() => handleCardPress("Adobe", "express")}
            iconBackgroundColor="#ccf0d6"
          />
          {/* <SubscriptionInsight
            title="Uber"
            amount="$9.99"
            subtitle1="Uber One"
            subtitle2="Monthly"
            description="Next Billing in 3 days."
            iconSource="remove-circle-outline"
            onPress={() => console.log("More pressed!")}
            iconBackgroundColor="#EEECDA"
          /> */}
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={{ textAlign: "left" }}>
                  <Text style={{ fontWeight: "bold" }}>Are you sure </Text>that
                  you want to convert your standard monthly subscription into an
                  annual student subscription?
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.noButton}
                  >
                    <Text>NO</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleYesPress}
                    style={styles.yesButton}
                  >
                    <Text style={{ color: "white" }}>YES</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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
    paddingHorizontal: 20,
    marginTop: 60,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#1e1e2d",
    fontFamily: "Bricolage Grotesque",
  },
  spendingContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  spendingGroup: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  amount: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1e1e2d",
    fontFamily: "Bricolage Grotesque",
  },
  frequency: {
    fontSize: 20,
    color: "#1e1e2d",
    fontFamily: "Bricolage Grotesque",
  },
  summaryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    color: "#1e1e2d",
    textAlign: "center",
    width: 270,
    fontFamily: "Bricolage Grotesque",
  },
  boldText: {
    fontWeight: "700",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    height: 165,
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e6e6e6",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  buttonContainer: {
    marginTop: "auto", // Pushes the buttons to the bottom of the modal
    flexDirection: "row",
    width: "100%",
    marginLeft: -20,
    marginBottom: -22,
  },
  noButton: {
    width: 150,
    height: 49,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
  },
  yesButton: {
    width: 150,
    height: 49,
    backgroundColor: "#988269",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 20,
  },
});

