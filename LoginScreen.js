import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, StyleSheet, Text, Button, TextInput} from 'react-native';
import {Database} from './Database'

function LoginScreen({navigation}){

  Database.createTable();

  const [items, setItems] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect( () => {  (async () => {
        console.log(username);
        try{
          await Database.getData(setItems);      }
        catch (ex){
          console.error(ex);
        }
      }
    )();
  }, []);

  const signup = () => { navigation.navigate("Signup"); }

  const login = () => {
    if (items === null || items.length === 0) {
      console.log("error");
      navigation.navigate("Home", {username: username});
    }
    else{
      navigation.navigate("Home", {username: username});
      for(var i = 0; i<items.length; i++){
        console.log(items[i].name);
        console.log(items[i].password);
        console.log(items[i].latitude);
        console.log(items[i].username);
        console.log(username);
        if(username == items[i].username && password == items[i].password){
          console.log(items.length);
          navigation.navigate("Home", {username: username});
        }
      }
    }
  }

  return(
    <SafeAreaView style={styles.container}>
    <TextInput style={styles.input} placeholder = "Username" returnKeyType = "next" value = {username} onChangeText = {setUsername}
    autoCapitalize = "none"/>
    <TextInput style={styles.input1} placeholder = "Password" returnKeyType = "next" value = {password} onChangeText = {setPassword}
    autoCapitalize = "none"/>
    <View style={{margin:20}}>
    <Button title = "Login" color="black" onPress = { () => {
      login();
    }} />
    </View>
    <View style={{marginLeft:20, marginRight:20}}>
    <Button title = "Sign Up" color="black" onPress = { () => {
      signup();
    }} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
  },
  thumb: {
    width: '90%',
    height: 150,
    padding: 10,
    borderRadius: 10
  },
  input:{
    borderColor:'#f0f0f0',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    marginTop: 50,
    margin: 10,
    padding:5
  },
  input1:{
    borderColor:'#f0f0f0',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    margin: 10,
    marginBottom: 20,
    padding:5
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


export default LoginScreen;
