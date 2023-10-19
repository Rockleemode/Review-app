import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./components/Home";
import ReviewPage from "./components/ReviewPage";
import { useFonts } from "expo-font";
import globalStyles from "./styles/globalStyles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-reg": require("./assets/fonts/Nunito-Regular.ttf"),
  });
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Reviews" component={ReviewPage} />
        </Stack.Navigator>   
      </NavigationContainer>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}
