import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Accueil from "./app/screens/Accueil";
import Search from "./app/screens/Search";
import Info from "./app/screens/Info";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerTintColor: "#fff",
            tabBarActiveTintColor: "#e91e63",
            headerShown: false,
            tabBarStyle: {
              height: 60,
              border: "none",
              borderTopEndRadius: 15,
              borderTopLeftRadius: 15,
              backgroundColor: "#ffff",
            },
          }}
        >
          <Tab.Screen
            name="home"
            component={Accueil}
            options={{
              tabBarLabel: "Accueil",
              tabBarItemStyle: {
                padding: 3,
              },
              tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="info"
            component={Search}
            options={{
              tabBarLabel: "Recherche",
              tabBarItemStyle: {
                padding: 3,
              },
              tabBarIcon: ({ color, size }) => (
                <Feather name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="search"
            component={Info}
            options={{
              tabBarLabel: "Info",
              tabBarItemStyle: {
                padding: 3,
              },
              tabBarIcon: ({ color, size }) => (
                <Feather name="info" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
