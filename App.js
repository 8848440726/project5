import React from 'react'
import{NavigationContainer}from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Searchbar } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Login from './src/Login'
import Flexbox from './src/Flexbox'
import Home from './src/Drawer/Home'
import Profile from './src/Drawer/Profile'
import WalletBalance from './src/Drawer/Wallet Balance'
import Records from './src/Drawer/Records'
import Refund from './src/Drawer/Refund'
import AboutUs from './src/Drawer/AboutUS'
import Help from './src/Drawer/Help'
import Settings from './src/Drawer/Settings'
import Drawercontent from './src/Drawer/Drawer content'
import Videos from './src/Tab/Videos'
import Chapter from './src/Tab/Chapter'
import Resources from './src/Tab/Resources'
import QNBank from './src/Tab/QN Bank'
import Call from './src/Bottomtab/Call'
import Chat from './src/Bottomtab/Chat'
import Status from './src/Bottomtab/Status'
import { View } from 'react-native'

const drawer=createDrawerNavigator()
const stack=createStackNavigator()
const tab=createMaterialTopTabNavigator()
const bottomtab=createBottomTabNavigator()


function Mystack(){
  
  return(
<stack.Navigator>
  
  <stack.Screen
  name='Login'
  component={Login}/>
  <stack.Screen
  name='Flexbox'
  component={Flexbox}/>
  <stack.Screen
  name='Drawer'
  component={Mydrawer}
  options={{headerShown:false}}/>
  <stack.Screen
  name='Tab'
  component={Mytab}
  options={{headerShown:false}}/>
  <stack.Screen
  name='Bottomtab'
  component={Mybottomtab}
  options={{headerShown:false}}/>
 
</stack.Navigator>

  )
}


function Mydrawer(){
  return(
    <drawer.Navigator
    drawerContent={(props)=><Drawercontent{...props}/>}>
      <drawer.Screen 
      name='Home'
      component={Home}/>
      <drawer.Screen
      name='Profile'
      component={Profile}/>
      <drawer.Screen
      name='Wallet Balance'
      component={WalletBalance}/>
      <drawer.Screen
      name='Records'
      component={Records}/>
      <drawer.Screen
      name='Refund'
      component={Refund}/>
      <drawer.Screen
      name='AboutUs'
      component={AboutUs}/>
      <drawer.Screen
      name='Help'
      component={Help}/>
      <drawer.Screen
      name='Settings'
      component={Settings}/>
    </drawer.Navigator>
  )
}
  
function Mytab(){
  const [searchQuery,setSearchQuery] =React.useState('');
  const onChangeSearch = query=>setSearchQuery(query);

  return(
    <View width='100%'
    height='100%' >
      <Searchbar 
  placeholder='Search'
  onChangeText={onChangeSearch}
  value={searchQuery}/>
  <tab.Navigator
  screenOptions={{
    tabBarLabelStyle:{fontSize:12},
    tabBarItemStyle:{width:100},
    tabBarStyle:{backgroundColor:'white'}
  }}>
      <tab.Screen
      name='Videos'
      component={Videos}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarPressColor:'red',
        tabBarIcon:({focused})=> focused ?<Icon name='movie' size={24} color='red'/>:
        <Icon name='movie' size={24} color='grey'/>
            
      }}
      />
      <tab.Screen
      name='Chapter'
      component={Chapter}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='note' size={24} color='red'/>:
        <Icon name='note' size={24} color='grey'/>

      }}
      />
      <tab.Screen
      name='Resources'
      component={Resources}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='extension' size={24} color='red'/>:
        <Icon name='extension' size={24} color='grey'/>
      }}
      />
      <tab.Screen
      name='QN Bank'
      component={QNBank}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='account-balance' size={24} color='red'/>:
        <Icon name='account-balance' size={24} color='grey'/>
      }}
      />
    </tab.Navigator>
  </View>
  )
}

function Mybottomtab(){
  return(
    <bottomtab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'white'}
    }}>
      <bottomtab.Screen 
      name='Call'
      component={Call}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='call' size={24} color='red'/>:
        <Icon name='call' size={24} color='grey'/>
      }}
      />
      <bottomtab.Screen 
      name='Chat'
      component={Chat}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='chat' size={24} color='red'/>:
        <Icon name='chat' size={24} color='grey'/>
      }}
      />
      <bottomtab.Screen 
      name='Status'
      component={Status}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarIcon:({focused})=> focused ?<Icon name='timelapse' size={24} color='red'/>:
        <Icon name='timelapse' size={24} color='grey'/>
      }}
      />
    </bottomtab.Navigator>
  )
}



export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}