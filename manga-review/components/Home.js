import react, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

export default Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {name:"One-Piece", body:"lorem ipsum yada yada", rating:"10", key:"1"},
    {name:"Naruto", body:"lorem ipsum yada yada", rating:"8", key:"2"},
    {name:"HunterxHunter", body:"lorem ipsum yada yada", rating:"9", key:"3"},
    {name:"One-Punch-Man", body:"lorem ipsum yada yada", rating:"8", key:"4"},
    {name:"Attack On Titan", body:"lorem ipsum yada yada", rating:"8.5", key:"5"},
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList 
      data={reviews}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Reviews', item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
      <Button
      title="review"
      onPress={() => navigation.navigate("ReviewPage")}
      />
    </View>
  );
};
