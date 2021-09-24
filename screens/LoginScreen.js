import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: "370667793988-vlr67ffj521i83tsds978nueak8famba.apps.googleusercontent.com",
        androidClientId: "370667793988-fnqvhdcfb0973i2io0a3rbjbcihl0fbq.apps.googleusercontent.com",
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
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