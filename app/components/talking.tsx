import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const talking = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Ionicons name="chevron-back-outline" size={10} color="#A3A3A3" />
          <Text>this is where you go when texting people</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default talking;
