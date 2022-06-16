import React from "react";
import { NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import App from "./src/MenuButtom";


const Tab = createMaterialBottomTabNavigator();
    export default () => {
        return (
          <NativeBaseProvider>
            <App/>
          </NativeBaseProvider> 
        );
    };
 