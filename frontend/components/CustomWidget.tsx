import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Widget = ({ children, style }) => {
  return (
    <View style={[styles.widget, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  widget: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    elevation: 5,
    width: '100%',
    marginBottom: 10,
  },
});

export default Widget;
