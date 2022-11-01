import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
}from 'react-native'
class FlexContent extends Component{
   componentDidMount(){
    console.log('the username is',this.props.username)
   } 
    
    render(){
        return(
            <View>
                <Text style={styles.contenttext}>Hi {this.props.username} !!</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>WeLComE</Text>
                <Text style={styles.text}>KiTTy</Text>
                <Text style={styles.text}>wOrLd</Text>
                <TouchableHighlight style={styles.button}
                underlayColor='red'
                onPress={()=>this.props.navigation.navigate('Tab')}>
                    <Text style={styles.buttontext}>Go!!</Text>
                </TouchableHighlight>
                <FlexContent username={this.props.route.params.username}></FlexContent>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
         backgroundColor:'#800080',
         alignItems:'center',
         justifyContent:'center'
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff'
    },
    button:{
        height:50,
        width:'40%',
        backgroundColor:'#008000',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    buttontext:{
        fontSize:28,
        color:'white',
        fontWeight:'bold'
    },
    contenttext:{
        fontSize:40,
        color:'pink',
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:40
    }
})