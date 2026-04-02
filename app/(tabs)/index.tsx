import Coffee from "@/assets/images/coffee.jpg";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Coffee} resizeMode="cover" style={styles.Image}>
        <Text style={styles.Text}>coffee shopp</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
  },
  Text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
