import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Image,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
  } from "react-native";
import Places from '../screens/Places'
import SelectState from './SelectState';
import Activities from './Activities';
import Restraunts from './Restraunts';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Tabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Places" component={Places} options={{
               tabBarIcon : ({focused}) => {
                   <View>
                       <Image source={require('../assets/home_icon.jpg')}
                       resizeMode='contain'
                       style={
                           {
                               width: 25,
                               height: 25,
                               tintColor: focused ? '#e32f45' : '#748c94',
                           }}
                       />
                       <Text 
                       style={{
                           color: focused ? '#e32f45' : '#748c94',
                       }}
                       >Places</Text>
                   </View>
               }
            }} />
            <Tab.Screen name="Activities" component={Activities} options={{
               tabBarIcon : ({focused}) => {
                   <View>
                       <Image source={require('../assets/location_icon.png')}
                       resizeMode='contain'
                       style={
                           {
                               width: 25,
                               height: 25,
                               tintColor: focused ? '#e32f45' : '#748c94',
                           }}
                       />
                       <Text
                       style={{
                        color: focused ? '#e32f45' : '#748c94',
                    }}
                       >Activities</Text>
                   </View>
                   
               }
            }}  
            />
            <Tab.Screen name="Restraunts" component={Restraunts}/>
        </Tab.Navigator>
    );
}

export default Tabs;