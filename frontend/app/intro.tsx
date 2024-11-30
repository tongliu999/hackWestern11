import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IntroForm from "@/components/introForm";

export default function IntroScreen() {
  const router = useRouter();

  const handleIntroComplete = async (formData: any) => {
    try {
      // Save user data to async storage
      await AsyncStorage.setItem("userData", JSON.stringify(formData));

      // Mark intro as completed so if they open again, won't come back to it
      await AsyncStorage.setItem("hasCompletedIntro", "true");

      // Navigate to home tabs
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error saving intro data", error);
    }
  };

  return <IntroForm onSubmit={handleIntroComplete} />;
}

