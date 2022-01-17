import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Like from "../components/Like";
import Tuto from "../components/Tuto";
import { Icon } from "react-native-elements";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "search";
              color = focused ? "pink" : "#0DCBD4";
            } else if (route.name === "Like") {
              iconName = "movie";
              color = focused ? "pink" : "#0DCBD4";
            }else if (route.name === "Tuto"){
              iconName = "home";
              color = focused ? "pink" : "#0DCBD4";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
         <Tab.Screen name="Tuto" component={Tuto} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
