import React from "react";
import HomeNav from './HomeStack.js';
import AboutNav from "./AboutStack.js";
import { createDrawerNavigator } from '@react-navigation/drawer';  


const Drawer = createDrawerNavigator();
const DrawerNav = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNav}/>
            <Drawer.Screen name="About" component={AboutNav}/>
        </Drawer.Navigator>

    )

}
export default DrawerNav;