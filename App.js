import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-web';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] =  useState('BR, Maceio')

  const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 0,
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText:{
      fontSize: 40,
    },
    refreshButton:{
      position: 'absolute',
      margin: 30,
      alignSelf: 'self-start',
    },
    cardView:{
      //color: '#0e33ff',
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <EvilIcons name="refresh" size={30} color='black'/>
      </TouchableOpacity>
  
      <View style={styles.container}>
        <Feather name="sun" style={{marginTop: 50}} size={40} color="orange"/>
        <View style={styles.temperature}>
          <Text style={styles.temperatureText}>{currentTemperature}</Text>
          <Text style={[styles.temperatureText, {fontSize: 15}]}>°C</Text>
        </View>
      </View>
    </View>
  )


      

}
