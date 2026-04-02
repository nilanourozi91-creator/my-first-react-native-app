import Coffee from "@/assets/images/coffee.jpg";
import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Coffee} resizeMode="cover" style={styles.Image}>
        <Text style={styles.title}>coffee shopp</Text>
        <Link style={{ marginHorizontal: "auto" }} asChild href="/explore">
          <Pressable>
            <text>Explore</text>
          </Pressable>
        </Link>
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
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  Link: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 42,
  },
});
