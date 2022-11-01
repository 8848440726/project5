import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class QNBank extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Reached QN Bank</Text>
            </View>
        )
    }
}
 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'teal'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'white'
    }
})