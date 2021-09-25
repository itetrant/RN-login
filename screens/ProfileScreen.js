import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  console.log("user from google", user);
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>Welcome {user.name??user} !</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9e7e2'// 'rgba(240, 240, 240, 0.9)', //'white',// 
      },

});