import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Category from './screens/Category';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen 
        name="Category" 
        component={Category} 
        options={({route}) => ({ title: route.params.categoryName })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}