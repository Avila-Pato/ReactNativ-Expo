import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import image from './assets/texting.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <Image source={{uri: 'https://picsum.photos/200/300'}}
      style={styles.image} >
      </Image>

      <Image 
      source={image}
      style={styles.image}>
      </Image>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff" },
  image : {height: 200, width: 200},
 },
);

export default App