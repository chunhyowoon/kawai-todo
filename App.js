import { StatusBar } from "expo-status-bar";
import React from "react";
import ToDo from "./ToDo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window");
export default function App() {
  const [startState, updateState] = React.useState("first");
  function changeText(text){
    updateState(text);
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Kawai To Do</Text>
      <View stylea={styles.card}>
        <TextInput style={styles.input} placeholder={"inputText"} value={startState} onChangeText={changeText}></TextInput>
        <ScrollView contentContainerStyle={styles.todos}>
          <ToDo></ToDo>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f23657",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  input: {},
  toDos:{
    alignItems:"center"
  }
});
