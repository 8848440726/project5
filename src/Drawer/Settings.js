import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Reached settings</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#808000',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'darkslategrey'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'white'
    }
})