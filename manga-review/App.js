import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import ReviewPage from "./components/ReviewPage";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-reg": require("./assets/fonts/Nunito-Regular.ttf"),
  });
  if (fontLoaded) {
    return (
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingtop: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});
