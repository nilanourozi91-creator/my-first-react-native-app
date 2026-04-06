import Coffee from "@/assets/images/coffee-1.jpg";
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
        <Link style={{ marginHorizontal: "auto" }} asChild href="/ContactUs">
          <Pressable style={styles.button}>
            <text style={styles.byttontext}>Contact Us</text>
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
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 42,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.27)",
    padding: 6,
  },
  byttontext: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
});
