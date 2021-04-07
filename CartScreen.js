import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View, Alert, FlatList, ActivityIndicator, Pressable} from 'react-native';

function CartScreen({navigation}){
return(
  <SafeAreaView style={styles.sectionContainer}>
  <Text style={styles.prompt}> News Feed List </Text>
  </SafeAreaView>
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


export default CartScreen;
