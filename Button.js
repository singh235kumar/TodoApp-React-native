import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'
const Button = () => {
    const theme=useContext(themeContext)
    const [darkMode,setdarkMode]=useState(false)
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
    <Text>Switch Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={(value)=>{setdarkMode(value)
        EventRegister.emit('ChangeTheme',value)}}/>

    </View>
  )
}

export default Button

const styles = StyleSheet.create({})