import { StatusBar } from "expo-status-bar";
import { Container, Content, Header } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserList from "./screens/UserList";
import DetailScreen from "./screens/DetailScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./config/configureStore";

export default function App() {
  const Stack = createStackNavigator();

  const navOptionHandler = () => ({
    headerShown: true,
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen
            name="List User"
            component={UserList}
            options={{ navOptionHandler}}
          />
          <Stack.Screen
            name="Detail User"
            component={DetailScreen}
            options={navOptionHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    tintColor: "#f0a00c",
  },
});
