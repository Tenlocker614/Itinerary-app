import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

import CustomButton from "./CustomButton";



function Places(props) {
    const onPressCustomButton = ()=> {
        console.log("done")
    }
    
  return (
      
    <SafeAreaView>
      <ScrollView 
      horizontal={true}
      pagingEnabled={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <View style={styles.ItemContainer2}>
          <Image
            style={styles.imageContain}
            source={require("../assets/ice.jpg")}
          />
          <Text style={styles.titleText}>Ice Skating</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/laser.jpg")}
          />
          <Text style={styles.titleText}>Laser Tag</Text>
        </View>

        <View style={styles.ItemContainer2}>
          <Image
            style={styles.imageContain}
            source={require("../assets/mystery.jpg")}
          />
          <Text style={styles.titleText}>Mystery Rooms</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/trampoline.jpeg")}
          />
          <Text style={styles.titleText}>Trampoline Park</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonPos}>
          <CustomButton title='Charter Route' onPress={onPressCustomButton}></CustomButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ItemContainer1: {
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    width: 250,
    height: 110,
    alignItems: "center",
    backgroundColor: "#fc5c65",
  },

  ItemContainer2: {
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    width: 250,
    height: 110,
    alignItems: "center",
    backgroundColor: "#4ecdc4",
  },

  imageContain: {
    marginLeft: 5,
    borderRadius: 20,
    height: 100,
    width: 100,
    
  },

  titleText: {
    marginTop: 5,
    marginLeft:5,
    color: "#263089",
    flexWrap: "wrap",
    fontSize: 19,
    fontWeight: "bold",
    width: 100,
  },

  buttonPos: {
    width: 100, 
    position: 'absolute',
    height: 25,
    bottom: 10,
    right: 20,
  }
});
export default Places;
