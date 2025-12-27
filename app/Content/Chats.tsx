import images from "@/assets/Images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import talking from '../../'
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
            <Text className="font-bold text-[#262626] text-[19px] ">Chats</Text>
            <Image source={images.profile} style={{ width: 38, height: 38 }} />
          </View>
          {/* Cards */}
          <View className="mt-20 flex justify-center items-center gap-10">
            <Cards isTrue={true} />
            <Cards isTrue={false} />
            <Cards isTrue={true} />
            <Cards isTrue={true} />
            <Cards isTrue={true} />
            <Cards isTrue={false} />
            <Cards isTrue={true} />
            <Cards isTrue={false} />
            <Cards isTrue={true} />
            <Cards isTrue={false} />
            <Cards isTrue={true} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const Cards = ({ isTrue }: any) => {
  return (
    <Pressable
      onPress={() => router.push("/components/talking")}
      className="flex flex-row justify-between items-center gap-4"
    >
      <Image source={images.profile} style={{ width: 38, height: 38 }} />
      <View className="w-[236px]">
        <Text className="font-[500] text-[#262626] text-[15px] ">
          Alberto Moedano
        </Text>
        <Text className="font-[500] text-[#FF9134] text-[12px] ">
          Hey man what’s up?
        </Text>
      </View>
      <View className="ml-auto gap-2 ">
        <Text className="font-[500] text-[#BDBDBD] text-[12px] ">
          2 min ago
        </Text>
        {isTrue && (
          <View className="bg-[#FF9134] ml-auto  w-full max-w-[22px] h-[22px] rounded-full justify-center items-center">
            <Text className="font-[500] text-white text-[12px]">2</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};
