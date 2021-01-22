import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@common';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './container/HomeScreen';
import DetailsScreen from './container/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router() {

    const TabNavigatior = () => {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.Primary
                }}
            >
                <Tab.Screen name="Participate" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<Entypo name='trophy' size={size} color={color} />) }} />
                <Tab.Screen name="Videos" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<Entypo name='video' size={size} color={color} />) }} />
                <Tab.Screen name="Learning" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<Entypo name='video' size={size} color={color} />) }} />
                <Tab.Screen name="Profile" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<Entypo name='user' size={size} color={color} />) }} />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='home' component={TabNavigatior} />
                {/* <TabNavigatior /> */}
                <Stack.Screen name='details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}