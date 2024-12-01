import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

interface SubscriptionInsightProps {
  title: string;
  amount: string;
  subtitle1: string;
  subtitle2: string;
  description: string;
  iconSource: any;
  onPress?: () => void;
  iconBackgroundColor: string;
}

const SubscriptionInsight: React.FC<SubscriptionInsightProps> = ({
  title,
  amount,
  subtitle1,
  subtitle2,
  description,
  iconSource,
  onPress,
  iconBackgroundColor,
}) => {
  const router = useRouter(); // Use router hook to navigate

  const handlePress = () => {
    // Trigger the drawer to open when the card is pressed
    //   router.push('/drawer');
    console.log("Card pressed!");
  };
  return (
    <Pressable style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.iconBackground,
                { backgroundColor: iconBackgroundColor },
              ]}
            >
              <Ionicons name={iconSource} size={15} color="black" />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.amount}>{amount}</Text>
        </View>

        <View style={styles.subtitles}>
          <Text style={styles.subtitle}>{subtitle1}</Text>
          <Text style={styles.subtitle}>{subtitle2}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      {onPress && (
        <Pressable style={styles.moreButton} onPress={onPress}>
          <Feather name="more-vertical" size={15} color="black" />
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBackground: {
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Bricolage Grotesque",
    color: "#1e1e2d",
  },
  amount: {
    fontSize: 16,
    fontFamily: "Bricolage Grotesque",
    color: "#121212",
  },
  subtitles: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  divider: {
    width: "100%",
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e8e8e8",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
    color: "#888",
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontFamily: "Bricolage Grotesque",
    color: "#888",
  },
  moreButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  moreIcon: {
    width: "100%",
    height: "100%",
  },
});

export default SubscriptionInsight;

