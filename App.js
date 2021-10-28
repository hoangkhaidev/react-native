import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Settings from './screens/Settings';
import Orders from './screens/Orders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen 
//         name="Category" 
//         component={Category} 
//         options={({route}) => ({ title: route.params.categoryName })}
//       />
//       <Stack.Screen name="Cart" component={Cart} />
//       <Stack.Screen name="Orders" component={Orders} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen
        name="Home"
        component={Home}
      />
      <HomeStack.Screen 
        name="Category" 
        component={Category} 
        options={({route}) => ({ title: route.params.categoryName })}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
      />
    </SettingsStack.Navigator>
  );
}

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
      />
    </CartStack.Navigator>
  );
}

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="Orders"
        component={Orders}
      />
    </OrdersStack.Navigator>
  );
}

const color = {
  ACTIVE: '#6987f5',
  INACTIVE: '#ccc'
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return <MaterialIcons name="home-filled" size={24} color={ focused ? color.ACTIVE : color.INACTIVE } />;
            } else if (route.name === 'Settings') {
              return <Ionicons name="settings-sharp" size={24} color={ focused ? color.ACTIVE : color.INACTIVE } />;
            } else if (route.name === 'Cart') {
              return <MaterialCommunityIcons name="cart" size={24} color={ focused ? color.ACTIVE : color.INACTIVE } />;
            } else if (route.name === 'Orders') {
              return <MaterialIcons name="message" size={24} color={ focused ? color.ACTIVE : color.INACTIVE } />;
            }
            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false 
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Cart" component={CartStackScreen} />
        <Tab.Screen name="Orders" component={OrdersStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}