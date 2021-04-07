import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View, Alert, FlatList, ActivityIndicator, Pressable} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation, route}){
const {username} = route.params;
useEffect( () => { console.log(username); });

return(
  <Tab.Navigator initialRouteName="Menu">
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{username: username}} options={ ({route}) => ({username: route.params.username}) }/>
  </Tab.Navigator>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  thumb: {
    width: '90%',
    height: 150,
    padding: 10,
    borderRadius: 10
  },
  listitem: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#123456',
  },
  synopsis: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});


export default HomeScreen;
