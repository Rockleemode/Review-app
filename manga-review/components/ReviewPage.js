import react from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

export default ReviewPage = ({ route}) =>{
    const { name, body, rating} = route.params
    return(
        <View style={globalStyles.container}> 
            <Text style={globalStyles.textTitle}>{name}</Text>  
            <Text style={globalStyles.textTitle}>{body}</Text>  
            <Text style={globalStyles.textTitle}>{rating}</Text>  
        </View>
    )
}
