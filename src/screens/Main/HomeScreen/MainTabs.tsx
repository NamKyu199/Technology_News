import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYou from "./ForYou";
import AIScreen from "./AIScreen";
import TechScreen from "./TechScreen";
import HighQualityScreen from "./HighQualityScreen";

const Tab = createMaterialTopTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarScrollEnabled: true,
                swipeEnabled: false,
                tabBarStyle: { backgroundColor: "white", height: 50 },
                tabBarIndicatorStyle: { backgroundColor: "transparent" },
                tabBarItemStyle: { width: "auto",marginHorizontal:-5},
                tabBarLabel: ({ focused }) => {
                    let label;
                    switch (route.name) {
                        case "ForYou":
                            label = "Đang theo dõi";
                            break;
                        case "AI":
                            label = "For You";
                            break;
                        case "Tech":
                            label = "AI";
                            break;
                        case "HighQuality":
                            label = "4K";
                            break;
                        default:
                            label = route.name;
                    }
                    return (
                        <View
                            style={{
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: focused ? "black" : "gray",
                                backgroundColor: "white",
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                                color: "black",
                                fontWeight: focused ? "bold" : "400"
                            }}>
                                {label}
                            </Text>
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="ForYou" component={ForYou} />
            <Tab.Screen name="AI" component={AIScreen} />
            <Tab.Screen name="Tech" component={TechScreen} />
            <Tab.Screen name="HighQuality" component={HighQualityScreen} />
        </Tab.Navigator>
    );
};

export default MainTabs;
