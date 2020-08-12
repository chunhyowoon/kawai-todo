  
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput,} from  "react-native"
import { faCheck,faPencilAlt, faTimesCircle  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const{width, height} = Dimensions.get("window");

export default class ToDo extends React.Component{
  state = {
    isEdting:false,
    isCompleted:false,
    todoValue:"",
  }
  _toggleEdting = () => { 
    let {text} = this.props;
    let editCheck = false;
    if(this.state.isEdting == false){
      editCheck = true;
    }else if(this.state.isEdting == true){
      editCheck = false;
    }
    this.setState({
      isEdting : editCheck,
      todoValue : text,
    })
  }
  _toggleComplete = () => {
    let {text} = this.props;
    let radioCheck = false;
    if(this.state.isCompleted == false){
      radioCheck = true
    }else if(this.state.isCompleted==true){
      radioCheck = false;
    }
    this.setState(()=>{
      return (
        {isCompleted : radioCheck}
      )
    })
  }
  _controllInput = () => {
    let {text} = this.props;
    this.setState(()=>{
      return(
        {todoValue : text}
      )
    })
  }

  render(){
    const {isEdting,isCompleted} = this.state;
    const {text} = this.props;
    console.log("isCompleted: "+isCompleted)
    return(
      <View style={styles.container}>
        <View style={styles.colum} >
          <TouchableOpacity onPress={this._toggleComplete}>
            <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncomplatedCircle]}>
            </View>
          </TouchableOpacity>
          {isEdting ? (
            <TextInput 
              style={[
                styles.input, 
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
              value={this.state.todoValue}
              multiline={true}
              returnKeyType={"done"}
              onChangeText={this._controllInput}
              onBlur={this._toggleEdting}
            >
            </TextInput>
            ): (
              <Text
                style={[
                  styles.text,
                  isCompleted ? styles.completedText : styles.uncompletedText
                ]}
              >{this.props.text}</Text>
            )
          }
        </View>
        <View style={styles.colum}>
          {isEdting ? (//수정할때 모드
              <View style={styles.action}>
                <TouchableOpacity onPress={this._toggleEdting}>
                  <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>
                      <FontAwesomeIcon icon={faCheck} size="lg" />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (//수정하지 않을때 모드(기본상태)
              <View style={styles.action}>
                <TouchableOpacity onPress={this._toggleEdting}>
                  <View style={styles.actionContainer}>
                    <Text>
                      <FontAwesomeIcon icon={faPencilAlt}  size="lg" />
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._toggleEdting}> 
                  <View style={styles.actionContainer}>
                    <Text>
                      <FontAwesomeIcon icon={faTimesCircle}  size="lg" />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      </View>
    );
  }

}

const styles= StyleSheet.create({
  container:{
    width:width -50,
    borderBottomColor:"#bbb",
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  circle:{
    width:30,
    height:30,
    borderRadius:15,
    borderColor:"red",
    borderWidth:10,
    marginRight:20,
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
  },
  completedText:{
    color:"#bbb",
    textDecorationLine:"line-through"
  },
  uncompletedText:{
    color:"#353839"
  },
  colum:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  action:{
    flexDirection:"row",
  },
  actionContainer:{
    marginVertical:10,
    marginHorizontal:10
    
  },
  input:{
    marginVertical:15,
  }
})