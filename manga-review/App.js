// import { StatusBar } from "expo-status-bar";
// import globalStyles from "./styles/globalStyles";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from "./routes/Drawer";


export default function App() {
  const [fontLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-reg": require("./assets/fonts/Nunito-Regular.ttf"),
  });
  if (fontLoaded) {
    return (
      // stack container routes
      <NavigationContainer>
       <DrawerNav />
      </NavigationContainer>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}
