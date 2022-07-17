import React from 'react';
import Tabs from './Tabs';
import Map from './Map'
import Places from './Places';
import SelectState from './SelectState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function NavigScreen(props) {
    return (
        <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    );
}

export default NavigScreen;