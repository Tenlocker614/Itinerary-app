import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import {SafeAreaView,} from "react-native";
import CustomButton from "./CustomButton";

function SelectState(props) {
  const onPressCustomButton = ()=> {
    console.log("done")
  }
  return (
    <ImageBackground
        style={styles.background}
        source={require("../assets/background2.jpg")}
      >
      <SafeAreaView>
        
      <Dropdown
          icon='chevron-down'
          iconColor='#E1E1E1'
          label='Favorite Fruit'
          data={[{ value: "Haryana" }]}
          
        />
        </SafeAreaView>  

        <View style={styles.buttonPos}>
          <CustomButton title='Submit' onPress={onPressCustomButton}></CustomButton>
        </View>  
  
      </ImageBackground>
      
    );
    
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonPos: {
    width: 100, 
    position: 'absolute',
    height: 25,
    bottom: "50%",
    right: 150,
  },
  dropdown: {
    
    top: 100,
  }
});

export default SelectState;
