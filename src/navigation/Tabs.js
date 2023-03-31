import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from '@Screen/Home';
import Favorite from '@Screen/Favorite';
import Notification from '@Screen/Notification';
import Account from '@Screen/Account';
import { moderateScale } from 'react-native-size-matters';
import Maps from '../screens/Maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
       <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#062743',
                inactiveTintColor: '#9ea9b3',
                tabStyle: {
                    marginVertical: moderateScale(10)
                },
                showLabel: false
            }}
       >
           <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <MaterialCommunityIcons name="home-assistant" size={24} color="black" />)
                }}

                />

            <Tab.Screen 
                name="SMS" 
                component={Favorite} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome5 name="sms" size={24} color="black" />)
                }}

            />


            <Tab.Screen 
                name="Notification" 
                component={Notification} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="notifications-sharp" size={24} color="black" />   )
                }}

            />
            
            <Tab.Screen 
                name="MAP" 
                component={Maps} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome name="map-marker" size={24} color="black" />   )
                }}

            />


            <Tab.Screen 
                    name="Account" 
                    component={Account} 
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="person-sharp" size={24} color="black" />  )
                    }}

            />
       </Tab.Navigator>
       
    )
}

export default Tabs;
