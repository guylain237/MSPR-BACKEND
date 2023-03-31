import {React, useEffect} from 'react'
import { View, Text } from 'react-native'
import AuthStack from '@Navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';
import axios from 'axios';
//import BASE_URL from '@Constans';

const {MyDarkTheme, MyLightTheme, BASE_URL} = Constant;

const RootNavigation = () => {
    const setUrlConfig = () => {
        console.log("appelé setUrlConfig");
        axios.defaults.baseURL = BASE_URL;
      };
    
      useEffect(() => {
        setUrlConfig();
      }, []);

    return (
        <NavigationContainer theme={MyLightTheme}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigation;
