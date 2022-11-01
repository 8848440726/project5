import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight
}from 'react-native'
export default class Drawercontent extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.profilecontainer}>
                <View style={styles.profileicon}>
                    <Image source={require('../../assets/gcat.png')}
                         style={styles.image}>
                         </Image>
                         <View>
                            <TouchableHighlight
                            style={styles.bottombutton}>
                              <Text style={styles.boxtext}>Invite</Text>   
                            </TouchableHighlight>
                         </View>
                </View>
                <View style={styles.infoview}>
                   <Text style={styles.nametext}>Monu</Text>
                <View style={styles.button}>
                    <Text style={styles.boxtext}>silver</Text>
                </View>
                <View style={styles.rightbottom}>
                <Text style={styles.bottomtext}>Total Scores</Text>
                <Text style={styles.bottomtext}>Scores:500</Text>
                </View>
               </View>
               </View>
                
                
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Records')}>Records</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Refund')}>Refund</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Help')}>Help</Text>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>

            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    text:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        paddingLeft:20,
        marginTop:10
        

    },
    profilecontainer:{
        height:'30%',
        width:'100%',
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center'
        },
        profileicon:{
            height:100,
            width:100,
            backgroundColor:'black',
            marginBottom:70,
            borderRadius:50
        },
        image:{
            height:'100%',
            width:'100%'
        },
        infoview:{
            marginleft:10,
            marginBottom:10
            
        },
        nametext:{
            color:'white',
            fontSize:30,
            marginLeft:80
     },
        button:{
            height:25,
            width:70,
            backgroundColor:'grey',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:8,
            marginLeft:80
     },
    boxtext:{
        color:'white',
        fontSize:14,
        fontWeight:'bold'

    },
    bottombutton:{
        height:25,
            width:70,
            backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:9,
            borderColor:'yellow',
            borderWidth:2,
            marginTop:49,
            marginLeft:18
            
            
        },
        bottomtext:{
            fontSize:15,
            color:'white',
            marginLeft:70  
        },
        rightbottom:{
            marginTop:100
        }
})