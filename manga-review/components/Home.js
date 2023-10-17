import react from "react";
import { StyleSheet, View, Text } from "react-native";

export default Home = () =>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello, MOM!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24
    },
    text:{
        fontFamily:"nunito-bold"
    }
})