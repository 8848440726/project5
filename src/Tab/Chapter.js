import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,ScrollView,TouchableHighlight
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Chapter extends Component{
    constructor(){
        super();
        console.log('constructor')
        this.state={
            headertext:null
        }
    }
    static getDerivedStateFromProps(){
        console.log('static getderived statefromprops')
        return null
    }
    updateText(){
        console.log('updatetext')
        this.setState({headertext:'updated'})
    }
    // shouldComponentUpdate(){
        // console.log('shouldcomponent')
        // return null
    // }
    componentDidUpdate(){
        console.log('componentdidupdate')
    }
    

    componentDidMount(){
        console.log('componentdidmount')
    }
    componentWillUnmount(){
        console.log('componentunmount')
    }
    render(){
        console.log('render called')
        return(
            <View style={styles.container} >
           <ScrollView style={styles.scrollcontainer}>
            <View style={styles.scrollchildview}>
           <View style={styles.headercard}>
            <Text>{this.state.headertext}</Text>
           </View>
           <View style={styles.baselinecard}>
           <View style={styles.textholder}>
        <Icon name='edit' size={17} color='#000'></Icon>
        <Text style={styles.text}>Mounting</Text>
        </View>
        <View style={styles.textholder}>
        <Icon name='edit' size={17} color='#000'></Icon>
        <Text style={styles.text}>Mounting</Text>
        </View>
        <TouchableHighlight style={{width:'80%',backgroundColor:'#360',height:55,alignItems:'center',justifyContent:'center'}}
        underlayColor='transparent'
        onPress={()=>this.updateText()}>
            <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>update</Text>
        </TouchableHighlight>

            </View>
            </View>
           </ScrollView>
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
    scrollcontainer:{
        width:'100%',
        height:'100%'
    },
    scrollchildview:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    headercard:{
        width:'95%',
        height:200,
        alignItems:'center',
        backgroundColor:'white',
        elevation:4,
        marginTop:10
    },
    baselinecard:{
        width:'100%',
        padding:15,
        backgroundColor:'#fff',
        elevation:4,
        marginTop:30
    },
    textholder:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center'
    },
    text:{
        marginLeft:10,
        color:'#000',
        fontSize:16
    },


})