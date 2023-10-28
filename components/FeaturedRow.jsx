import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCards from "./RestrauntCards";

const FeaturedRow = ({ title, description, featuredCategory, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between items-center px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restruants Cards */}
        <RestrauntCards
          id={123}
          imgUrl="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=2067&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="KFC"
          short_description="Offers"
          genre="Non-Veg"
          rating="4.8"
          address="123 Street West"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestrauntCards
          id={123}
          imgUrl="https://images.unsplash.com/photo-1619881589670-43629f0e90f1?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="McDonalds"
          short_description="Offers"
          genre="Non-Veg"
          rating="4.8"
          address="123 Street West"
          dishes={[]}
          long={20}
          lat={0}
        />
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
