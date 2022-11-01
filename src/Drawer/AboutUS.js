import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class AboutUs extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Reached Aboutus</Text>
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
        backgroundColor:'cadetblue'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'white'
    }
})