import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class WalletBalance extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Reached Balance</Text>
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
        backgroundColor:'indigo'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'white'
    }
})