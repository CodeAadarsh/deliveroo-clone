import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'

const RestrauntCards = (
    {id,
    imgUrl,
    title,
    short_description,
    genre,
    rating,
    address,
    dishes,
    long,
    lat,}
) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image className="h-36 w-64 rounded-sm" source={{ url: imgUrl}}/>
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color={"#00BBCC"} opacity={0.5} size={22}/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-400">{rating}</Text> • {genre}</Text>    
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon color={"#00BBCC"} opacity={0.5} size={22}/>
                <Text>Nearby • {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default RestrauntCards

const styles = StyleSheet.create({})