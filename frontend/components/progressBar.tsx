import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

export default function ProgressBar({
  currentValue,
  maxValue,
}: ProgressBarProps) {
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressBarText}>
        <Text style={styles.currentValue}>{`$${currentValue}`}</Text>
        <Text style={styles.separator}>{` / `}</Text>
        <Text style={styles.maxValue}>{`$${maxValue}`}</Text>
      </Text>
      <View style={styles.progressBar}>
        <LinearGradient
          colors={["#C5B5A2", "#766E59"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progress, { width: `${progressPercentage}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    marginTop: 10,
  },
  progressBarText: {
    fontFamily: "bricolage-grotesque",
    flexShrink: 0,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#C5B5A2",
    borderRadius: 0,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 0,
  },
  currentValue: {
    fontFamily: "space-mono",
    fontWeight: "regular",
  },
  separator: {
    fontFamily: "space-mono",
    fontWeight: "regular",
  },
  maxValue: {
    fontWeight: "bold",
  },
});

