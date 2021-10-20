import React from "react";
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  console.log("user from google", user);
  return (
        <View style={styles.container1}>

                  {/* <Text style={styles.container1}>Profile Screen</Text> */}
                <Text style={styles.container1}>Welcome </Text>  

                <View style={styles.container2}>
                    <Text style={styles.container3}> {user.name??user}</Text>
                    <Text style={styles.container3}> to</Text>
                    <Text style={styles.container3}> RN-login</Text>
                </View>

        </View>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

      container1:{
        flex:1,
        //alignSelf:'center',
        textAlign:'center',
        flexDirection:'column',
        backgroundColor:'#e9e7e2'// 'rgba(240, 240, 240, 0.9)', //'white',// 
      },     
      
      container2:{
        flex:1,
        flexDirection:'row',
        padding:20,
        backgroundColor:'#ff0000'// 'rgba(240, 240, 240, 0.9)', //'white',// 
      },

      container3:{
        flex:1,
        alignContent:'space-around',
        textAlign:'center',
        backgroundColor:'#ffff00'// 'rgba(240, 240, 240, 0.9)', //'white',// 
      },

});