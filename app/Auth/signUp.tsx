import React from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../assets/Images";
import { router } from "expo-router";
const login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-red-900 h-screen">
          {/* bg cover */}
          <View>
            <Image source={images.bg} />
          </View>
          {/* singup */}
          <View className="absolute bg-white rounded-t-[20px] h-[554px] left-0 right-0 bottom-0 ">
            <View className="flex justify-center  items-center mx-7">
              <Text className="font-bold text-[36px] text-[#FF9134]   mt-20">
                Sing Up
              </Text>
              <View className="w-full h-[58px] rounded-[10px] flex flex-row gap-5 justify-start items-center  px-4 mt-10 bg-[#F6F7FB]">
              <Image source={images.messages} className="w-[24px] h-[24px]"/>
                <TextInput placeholder="alberto@mail.com" className="text-bold text-[19px] text-black" />
              </View>
              <View className="w-full h-[58px] rounded-[10px] flex flex-row gap-5 justify-start items-center  px-4 mt-10 bg-[#F6F7FB]">
              <Image source={images.passwords} className="w-[24px] h-[24px]"/>
                <TextInput placeholder="**********" className="text-bold text-[19px] text-black" />
              </View>
              <Text className="font-bold text-[12px] text-[#FF9134] ml-auto mt-4">
               Forgot password
              </Text>
              <Pressable onPress={() => router.push('/Content/Contact')} className="mt-24 bg-[#FF9134] rounded-[10px] flex justify-center items-center  w-full  h-[58px]">
                <Text className="text-white text-[18px] font-[500]">Sing Up</Text>
              </Pressable>
              <Pressable onPress={() => router.push('/Auth/login')} className="flex flex-row gap-1  mt-10">
                <Text className="text-black text-[13px] font-[500]">Do you have an account? </Text>
                <Text className="text-[#FF9134] text-[13px] font-[500]">Login here</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
