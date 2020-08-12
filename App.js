import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
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

export default class App extends Component {
  state = {
    newTodo: ""
  }
  render(){
    const {newTodo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"inputText"} value={newTodo} onChangeText={this._controllNewTodo}></TextInput>
          <ScrollView contentContainerStyle={styles.todos}>
            <ToDo text={"hello i'm to do"}></ToDo>
          </ScrollView>
        </View>
      </View>
    );
  }
  _controllNewTodo = (text) => {
    this.setState({
      newTodo : text
    })
  }
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
    input: {
      padding:20,
      borderBottomColor:"#bbb",
      borderBottomWidth:2,
      fontSize:25
    },
    todos:{
      alignItems:"center"
    }
  });