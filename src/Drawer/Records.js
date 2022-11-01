import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Records extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Reached Record</Text>
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
        backgroundColor:'violet'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'white'
    }
})