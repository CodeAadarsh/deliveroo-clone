import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, SparklesIcon, UserIcon } from "react-native-heroicons/outline";
import Catagories from '../components/Catagories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
  const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false 
        })
  },[])
    return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
      <View className="flex-row pb-3 items-center mx-3 space-x-2 px-1">
        <Image className="h-7 w-7 bg-gray-50 rounded-full" source={{uri:'https://images.unsplash.com/photo-1531908012224-8f8865e79a96?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
      <View className="flex-1">
        <Text className="text-gray-400 text-xs font-bold">Deliver Now!</Text>
        <Text className="text-xl font-bold">Current Location
        <ChevronDownIcon size={20} color={'#00CCBB'}/>
        </Text>
      </View>
      <UserIcon size={35} color={'#00CCBB'}/>
      </View>
      {/* Search Box */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon color={"gray"}/>
            <TextInput placeholder='Restuarants and Cuisines'/>
        </View>
        <View className="">
            <AdjustmentsVerticalIcon color={"#00CCBB"}/>
        </View>
      </View>
      {/* Body */}
      <View>
        <ScrollView>
            {/* Catagories */}
            <Catagories/>
            {/* featured */}
            <FeaturedRow
                id="1"
                title="Featured"
                description="Paid Placecments for our partners"
                featuredCategory="featured"
                />
            {/* Tasty Discounts */}
            <FeaturedRow
                id="2"
                title="Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                featuredCategory="featured"
                />
            {/* Offers Near You */}
            <FeaturedRow
                id="3"
                title="Offers near You!"
                description="Why not support local stores?"
                featuredCategory="Offers"
                />

        </ScrollView>
      </View>

      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})