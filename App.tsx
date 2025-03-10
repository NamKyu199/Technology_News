import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "~screens/Authentication/LoginScreen";
import RegisterScreen from "~screens/Authentication/RegisterScreen";
import ForgotPasswordScreen from "~screens/Authentication/ForgotPasswordScreen";
import DetailsImage from "~screens/Main/HomeScreen/DetailsImage";
import HomeScreen from "~screens/Main/HomeScreen"; // HomeScreen đã chứa Tab.Navigator

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DetailsImage" component={DetailsImage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
