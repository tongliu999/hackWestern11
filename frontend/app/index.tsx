// import { Image, StyleSheet, Platform, Text } from "react-native";

// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import Intro from "@/app/Intro";

// export default function Page() {
//   return (
//     <ParallaxScrollView useBottomTab={false}>
//       <Text>initial quiz</Text>
//       <Intro />
//     </ParallaxScrollView>
//   );
// }

import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Index() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkFirstTimeUser();
  }, []);

  const checkFirstTimeUser = async () => {
    try {
      const hasCompletedIntro = await AsyncStorage.getItem("hasCompletedIntro");
      setIsFirstTime(hasCompletedIntro !== "true");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  // Redirect to intro if first time, otherwise to tabs
  return isFirstTime ? <Redirect href="/intro" /> : <Redirect href="/(tabs)" />;
}

