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

import CustomButton2 from "./CustomButton";


function Places(props) {
    const onPressCustomButton = ()=> {
        console.log("done")
    }
    
  return (
      
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Places</Text>
      </View>
      <ScrollView 
      pagingEnabled={false}
      horizontal={true}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection:'row',
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <View style={styles.ItemContainer2}>
          <Image
            style={styles.imageContain}
            source={require("../assets/indiagate.jpg")}
          />
          <Text style={styles.titleText}>India Gate</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/jamamasjid.jpg")}
          />
          <Text style={styles.titleText}>Jama Masjid</Text>
        </View>

        <View style={styles.ItemContainer2}>
          <Image
            style={styles.imageContain}
            source={require("../assets/humayun.jpg")}
          />
          <Text style={styles.titleText}>Humayun's Tomb</Text>
        </View>

        <View style={styles.ItemContainer1}>
          <Image
            style={styles.imageContain}
            source={require("../assets/redfort.jpg")}
          />
          <Text style={styles.titleText}>Red Fort</Text>
        </View>
      </ScrollView>

      <View>
        <Text style={styles.titleText2}>Restraunts</Text>
      </View>

      <ScrollView 
      horizontal={true}
      pagingEnabled={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 10,
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

      <View>
        <Text style={styles.titleText2}>Activites</Text>
      </View>

      <ScrollView 
      horizontal={true}
      pagingEnabled={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 10,
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
          <CustomButton2 title='+' onPress={onPressCustomButton}></CustomButton2>
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
    marginTop: 7,
    marginLeft:8,
    color: "#263089",
    flexWrap: "wrap",
    fontSize: 19,
    fontWeight: "bold",
    width: 100,
  }, 

  titleText2: {
    marginTop: 12,
    marginLeft:8,
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
