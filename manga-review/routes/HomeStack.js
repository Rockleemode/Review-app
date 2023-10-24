import React from "react"
import Home from "../components/Home";
import ReviewPage from "../components/ReviewPage";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const HomeNav = () =>{
    return(
    <Stack.Navigator> 
                <Stack.Screen name="Animes" component={Home} />
                <Stack.Screen name="Reviews" component={ReviewPage} />
    </Stack.Navigator>   
    )
}

export default HomeNav;