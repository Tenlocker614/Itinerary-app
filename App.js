import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './app/screens/Tabs';
import Map from './app/screens/Map'
import Places from './app/screens/Places';
import SelectState from './app/screens/SelectState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigScreen from './app/screens/NavigScreen';
import MainScreen from './app/screens/MainScreen';



export default function App() {
  return ( 
    <MainScreen></MainScreen>
    //<NavigationContainer>
     // <Stack.Navigator>
       // <Stack.Screen name="SelectState" component={SelectState} />
       // <Stack.Screen name="Places" component={Places} />
     // </Stack.Navigator>
   // </NavigationContainer>
  ); 
  
}

const styles = StyleSheet.create({
  
});

