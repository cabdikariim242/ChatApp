import images from "@/assets/Images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mt-10 mx-7 ">
          {/* HEADERS */}
          <View
            className="flex flex-row items-center "
            style={{
              display: "flex",
              alignContent: "space-between",
              width: "100%",
              gap: "110",
            }}
          >
            <Image source={images.plus} style={{ width: 30, height: 30 }} />
            <Text className="font-bold text-[#262626] text-[19px] ">
              Contacts
            </Text>
            <Image source={images.profile} style={{ width: 38, height: 38 }} />
          </View>
          {/* Cards */}
          <View className="mt-20  gap-10">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const Cards = () => {
  return (
    <View className="flex flex-row justify-between items-center ">
      <Image source={images.profile} style={{ width: 38, height: 38 }} />
      <View className="">
        <Text className="font-[500] text-[#262626] text-[15px] ">
          Alberto Moedano
        </Text>
        <Text className="font-[500] text-[#BDBDBD] text-[12px] ">
          last seen recently
        </Text>
      </View>
      <Text className="font-[500] text-[#FF9134] text-[12px] ">Message</Text>
    </View>
  );
};
