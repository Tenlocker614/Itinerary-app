import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
  } from "react-native";

function MainScreen(props) {
    return (
        <SafeAreaView>
            <View style={styles.background1}></View>
            
            <Image source={require("../assets/beach1.jpg")}
            style={styles.imageContain}
            />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background1:{
        width:'100%',
        height:300,
        backgroundColor:'#569bdc',
    },

    imageContain: {
        
        right:0,
        height: 250,
        width: 250,
        
      },

    

})

export default MainScreen;