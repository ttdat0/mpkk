import React from "react";
import { Text, View } from "native-base";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./HomeScreen";
import MenuDown from "./MenuDown";
import HomeTest from "./HomeTest";


const Tab = createMaterialBottomTabNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trang Chủ</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Down</Text>
    </View>
  );
}



function MenuButtom() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 20 }}
      style={{ backgroundColor: 'red' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeTest}
        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MenuDown}
        options={{
          tabBarLabel: 'Download',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-down-bold" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
  
  export default function App() {
    return (
      <NavigationContainer>
        <MenuButtom />
      </NavigationContainer>
    );
  }