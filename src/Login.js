import React,{Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native'
export default class Login extends Component{
  constructor(){
    super();
    this.state={
      name:null
    }
  }
  updateValue(username){
    console.log(username)
    this.setState({
      name:username
    })
  }
  render(){
    return(
      <View style={styles.container}>
       <ImageBackground source={require('../assets/sky.jpg')}
       style={styles.backgroundimage}>
        <Image source={require('../assets/nasa.png')}
        style={styles.logo}></Image>
          <Text style={styles.text}>PHILIPINES UNIVERSITY</Text>
        <TextInput style={styles.inputview}
        placeholder='username'
        placeholderTextColor={'red'}
        maxLength={10}
        onChangeText={(username)=>this.updateValue(username)}
       ></TextInput>
        <TextInput style={styles.inputview}
        placeholder='Password'
        placeholderTextColor={'red'}
        secureTextEntry ={true}></TextInput>
        <TouchableHighlight style={styles.button}
        UnderlayColor='#fff'
        onPress={(username)=>this.props.navigation.navigate('Flexbox',{username:this.state.name})}>
          <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}

 const styles= StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
    
  },
  backgroundimage:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    color:'#fff'
  },
  inputview:{
    height:55,
    width:'80%',
    borderWidth:1,
    marginTop:40,
    paddingLeft:20,
    borderColor:'#360'
  },
  button:{
    width:'40%',
    height:40,
    backgroundColor:'#360',
    borderRadius:8,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'

  }
  
})