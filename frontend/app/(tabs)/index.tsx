import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';  // Expo Font API for loading custom fonts
import { Image, Platform, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'bricolage-grotesque': require('../../assets/fonts/BricolageGrotesque-Regular.ttf'), // Path to your font file
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; 
  }

  const handleRightIconPress = () => {
    console.log('Right icon clicked!');
  };

  const handlePress = () => {
    console.log('Widget clicked!');
  };

  const name = "Tom";


  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Success", "AsyncStorage has been cleared.");
    } catch (e) {
      Alert.alert("Error", "Failed to clear AsyncStorage.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require('../../assets/backgrounds/lava-lamp-bg.json')}
          autoPlay
          loop
          style={styles.backgroundAnimation}
  />
      // </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.logoContainer}>
          <Text style={styles.logoText}>Logo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRightIconPress} style={styles.iconContainer}>
          {/* <Icon name="bell-o" size={20} color="#121212" /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Morning, {name}.</Text>
      </View>
      <Text style={styles.messageText}>You’re now one day closer to graduating debt-free with $10,000 in the books.</Text>

      <View style={styles.widgetContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.widget}>
          <View style={styles.progressContainer}>
            <Text style={styles.progressBarText}>{`${50}%`}</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progress,
                    {
                      backgroundImage: 'linear-gradient(to right, #bdbdbd, #797979)',
                      width: `${50}%`,
                    },
                  ]}
                />
              </View>
          </View>
          <View style={styles.widgetTextContainer}>
            <Text style={styles.widgetText}>graduating debt free</Text>
            <Icon name="angle-right" size={15} color="#121212" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.reminderText}>Reminders</Text>
      <View style={styles.reminderWidgetContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.widget}>
            <Text>TEST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={styles.widget}>
            <Text>TEST</Text>
        </TouchableOpacity>
        <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} />
      </View>
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
  },
  backgroundAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  navbar: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    zIndex: 2,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 10,
  },
  iconText: {
    color: 'black',
    fontSize: 18,
  },
  greetingContainer: {
    marginTop: 170,
    alignItems: 'flex-start',
    width: '100%',
  },
  greetingText: {
    fontSize: 36,
    color: '#1E1E2D',
    fontFamily: 'bricolage-grotesque',
    marginLeft: 20,  
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 16,
    color: '#1E1E2D',
    fontFamily: 'bricolage-grotesque',
    marginLeft: 20,
    marginTop: 10,
  },
  widget: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
    elevation: 5,
    width: 180,
  },
  widgetText: {
    color: '#1E1E2D',                 
    fontSize: 12,
    alignSelf: 'flex-start', 
    paddingBottom: 5
  },
  widgetContainer: {
    paddingTop: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginLeft: 10,
    overflow: 'hidden', // Ensures the gradient stays within the progress bar bounds
  },
  progress: {
    height: '100%',
    borderRadius: 5, // Ensure smooth corners for the progress gradient
  },
  progressBarText: {
    fontWeight: 'bold',
    fontFamily: 'bricolage-grotesque',
  },
  widgetTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    marginLeft: 10,
    marginBottom: 3,
  },
  lottieContainer: {
    position: 'absolute',
    marginTop: 80,
    width: 300,
    height: 300,
    marginLeft: 30,
  },
  reminderText: {
    fontSize: 24,
    color: '#1E1E2D',
    fontFamily: 'bricolage-grotesque',
    marginLeft: 20,  
    fontWeight: 'bold',
    marginTop: 64,
  },
  reminderWidgetContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
 
});

