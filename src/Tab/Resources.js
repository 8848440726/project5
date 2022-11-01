import React,{Component} from "react";

import{
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    FlatList
}from 'react-native';
import axios from 'axios'


export default class Resources extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }

 getData(){
 this.setState({loader:true})
    fetch('https://api.sampleapis.com/coffee/hot')
    .then((response)=>response.json())
    .then((response)=>{
        if(response.length>0){
            this.setState({DATA:response})
        }
        // this.setState({loader:false})
        //  console.log('YOUR RESPONSE IS:',response)
    })
    
    .catch((error)=>{
    // this.setState({loader:false})
    // console.log('ERROR IS:',error)
    })
}
getAxiosData(){
    this.setState({loader:true})
    axios.get('https://api.sampleapis.com/coffee/hot')
    
    .then((response)=>{
        this.setState({loader:false});
        console.log('AXIOS RESPONSE IS:',response);
        this.setState({DATA:response.data})
    })
    .catch((error)=>{
    this.setState({loader:false})
    console.log('AXIOS ERROR IS:',error)
})
}


componentDidMount(){
    this.getAxiosData()
}
    render(){
        const renderItem =({item})=>(
            <View style={styles.itemcontainer}>
                <Text style={styles.itemtext}>{item.title}</Text> 
             <Text style={styles.itemdes}>{item.description}</Text>  
                <Text style={styles.itemtext}>{item.ingredients}</Text>
                <Text style={styles.itemtext}>{item.id}</Text>  
                
            </View>
        )
    
        
        return(
            <View style={styles.container} >
                <ActivityIndicator size={50} color='red'
                animating={this.state.loader}></ActivityIndicator>
                <Text style={styles.text}
                onPress={()=>this.getAxiosData()}>Reached Resources</Text>
        <FlatList style={{width:'95%',marginTop:10,backgroundColor:'white'}}
        data= {this.state.DATA}
        renderItem={renderItem}/>
        
            </View>
        )
    }
}
 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'teal'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        color:'#ffffff'
    },
    itemcontainer:{
        width:'100%',
        padding:10,
        backgroundColor:'#fff',
        elevation:4,
        marginBottom:10
    },
    itemtext:{
        fontSize:16,
        fontWeight:'bold',
        color:'#369'
    },
    itemdes:{
        fontSize:24,
        color:'#000'
    },
    image:{
        width:100,
        height:100
    }
    
})