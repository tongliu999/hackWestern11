import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ClickableTag = ({ children, style }) => {
  return (
    <TouchableOpacity>
        <View style={[styles.tag, style]}>
            {children}
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "red",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    elevation: 5,
    width: '100%',
  },
});

export default ClickableTag;
