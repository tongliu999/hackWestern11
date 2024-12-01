import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface HeaderProps {
  logoSource: any; // The logo image source
  onRightIconPress: () => void; // Handler for the right icon press
}

const Header: React.FC<HeaderProps> = ({ logoSource, onRightIconPress }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={logoSource} style={styles.logoImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
        <Icon name="bell-o" size={20} color="#121212" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 50,
    left: 25,
    right: 25,
    height: 60,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logoImage: {
    width: 60, // Adjust the width to match your logo
    height: 40, // Adjust the height to match your logo
    resizeMode: "contain",
  },
  iconContainer: {
    padding: 8,
  },
});

export default Header;

