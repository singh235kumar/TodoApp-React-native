import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/Login';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import TodoScreen from './component/Todoscreen';
import { EventRegister } from 'react-native-event-listeners'
import React, {useState,useEffect} from 'react';
import theme from './theme/theme';
import themeContext from './theme/themeContext';
const Stack=createNativeStackNavigator();

export default function App() {
  const [darkMode,setdarkMode]=useState(false);
  useEffect(()=>{
    const listner=EventRegister.addEventListener("ChangeTheme",(data)=>{
      setdarkMode(data)

    })
    return ()=>{
      EventRegister.removeAllListeners(listner)
    }
  },[darkMode])
  return (
    <themeContext.Provider value={darkMode===true ? theme.dark:theme.light}>
      
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='Home' component={TodoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
      </themeContext.Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
