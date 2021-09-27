import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';

const LoginScreen = ({ navigation }) => {
  //Google ok
   const signInGoogle = async () => {
    console.log("loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: "370667793988-vlr67ffj521i83tsds978nueak8famba.apps.googleusercontent.com",
        androidClientId: "370667793988-fnqvhdcfb0973i2io0a3rbjbcihl0fbq.apps.googleusercontent.com",
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("Login success: " + user);
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };
  const signInFB = async () => {
    try {
      console.log('initializeAsync...');
      await Facebook.initializeAsync({
        //appId: '2971792086426943',
        appId: '628711031449401',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      console.log('initializeAsync...' + type);
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const res = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // console.log('FB response:', res);
        // //Alert.alert('Logged in!', `Hi ${(await res.json()).name}!`);
        const user = (await res.json());
        console.log('FB User', user);
        navigation.navigate("Profile", { user });

      } else {
        // type === 'cancel'
        
        console.log('Error: ' + type);
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
}
  return (
    <View style={styles.container}>
      <Image style = {{width:'100%', height:'60%',alignSelf:'center',alignItems:'stretch'}} source = {require('../assets/react-logo.png')} />
      <View style = {{padding:10}}/>
      <Button title="Login with Google" onPress={signInGoogle} />
      <View style = {{padding:10}}/>
      <Button title="Login with FaceBook" onPress={signInFB} />
    </View>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#e9e7e2'// 'rgba(240, 240, 240, 0.9)', //'white',// 
  },

});