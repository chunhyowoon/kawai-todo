import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from  "react-native"
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const{width, height} = Dimensions.get("window");
export default function ToDo(){
  const [currentState, updateState] = React.useState();
  var state = {
    isEdting:false,
    isComplated:false,
  }
  console.log(state);
  let _toggleComplate = ()=> {
    console.log("abcdefg");
    updateState(state.isComplated)
  }
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={_toggleComplate}>
        <View style={styles.circle}>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Hello I'm a ToDo</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    width:width -50,
    borderBottomColor:"#bbb",
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection:"row"
  },
  circle:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:"red",
    borderWidth:10,
    marginRight:20
  },
  completedCircle:{
    borderColor:"#bbb"
  },
  uncomplatedCircle:{
    borderColor: "#f23657"
  },
  text:{
    fontWeight:"600",
    fontSize:20,
    marginVertical:20,
  }
})