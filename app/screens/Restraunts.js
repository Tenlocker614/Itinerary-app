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



function Restraunts(props) {
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
            source={require("../assets/thyme.jpg")}
          />
          <Text style={styles.titleText}>Thyme Restraunt - The Umrao</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/kiyan.jpg")}
          />
          <Text style={styles.titleText}>Kiyan</Text>
        </View>

        <View style={styles.ItemContainer2}>
          <Image
            style={styles.imageContain}
            source={require("../assets/olive.jpg")}
          />
          <Text style={styles.titleText}>Olive Bar and Kitchen</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/chi.jpg")}
          />
          <Text style={styles.titleText}>Chi Ni</Text>
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
export default Restraunts;
