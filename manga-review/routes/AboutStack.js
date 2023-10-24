import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 


const Stack = createNativeStackNavigator();
const AboutNav = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Animes" component={About}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )

}
export default AboutNav;