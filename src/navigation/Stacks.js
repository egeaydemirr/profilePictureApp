import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActionScreen from '../screens/ActionScreen';
import FilterScreen from '../screens/FilterScreen';
import CropEditor from '../screens/CropScreen';
import FinalPicture from '../screens/FinalScreen';

const Stack = createNativeStackNavigator();

const ActionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Action" component={ActionScreen} />
      <Stack.Screen name="Crop" component={CropEditor} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Final" component={FinalPicture} />
    </Stack.Navigator>
  );
};

export default ActionStack;
