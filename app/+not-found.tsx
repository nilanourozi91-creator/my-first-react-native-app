import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
const App = () => {
  return (
    <>
      <Stack.Screen options={{ title: "not-found" }} />
      <ThemedView style={styles.container}>
        <ThemedText>this screen does ont ecxists</ThemedText>
        <Link style={styles.Link} href="/">
          Home
        </Link>
        <ThemedText>go to the home page</ThemedText>
      </ThemedView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Link: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 20,
    margin: 10,
    borderRadius: 50,
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
