import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

const Catagories = () => {
  return (
    <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
            paddingVertical:15,
            paddingTop:10,
            
        }}
        >
            <CatagoryCard title="CupCakes" imgUrl='https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Shakes " imgUrl='https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80&w=1996&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Pizzas " imgUrl='https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Coffees " imgUrl='https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Rasgulla" imgUrl='https://images.unsplash.com/photo-1605194000384-439c3ced8d15?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Laddus" imgUrl='https://images.unsplash.com/photo-1554843522-a5323421d91b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Shushis" imgUrl='https://images.unsplash.com/photo-1611762687807-7cdd09aef422?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <CatagoryCard title="Donuts" imgUrl='https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </ScrollView>
  )
}

export default Catagories

const styles = StyleSheet.create({})