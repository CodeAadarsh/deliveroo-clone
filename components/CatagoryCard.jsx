import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CatagoryCard = ({imgUrl,title}) => {
    return (
    <TouchableOpacity className="relative mr-2">
        <Image className="h-20 w-20 rounded" source={{uri:imgUrl}}/>
      <Text className="absolute font-bold text-white text-center bottom-1 left-1">{title}</Text>

    </TouchableOpacity>
  )
}

export default CatagoryCard

const styles = StyleSheet.create({})