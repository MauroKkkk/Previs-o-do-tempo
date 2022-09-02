import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] =  useState('BR, Maceio')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      margin:0,
      padding:0,
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
      flexDirection: 'row',
    },
    card:{
      backgroundColor: '#427BFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      margin: 10,
      padding: 10,
      width: 50,
      height: 100,
    },

    refreshButton:{
      position: 'absolute',
      margin: 30,
      alignSelf: 'self-start',
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText:{
      fontSize: 20,
    },

    cardTitle:{
      fontSize: 10,
    },
    location:{
      flexDirection:'row',
      marginTop: 70,
      padding: 10,
      width: 350,
      height:10,
    }
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <AntDesign name="bars" size={30} color='black'/>
      </TouchableOpacity>
      <View style = {styles.location}>
        <Text style={{fontSize:30}}>Marechal,</Text>
        <Text style={{color:'gray'}}> Alagoas</Text>
      </View>
      <View style={styles.container}>
        <Feather name="sun" style={{marginTop:100, }} size={70} color="orange"/>
        <View style={styles.temperature}>
          <Text style={[styles.temperatureText, {fontSize:85, marginTop:65 }]}>{currentTemperature}°</Text>
        </View>
      </View>
      <View style = {styles.cardView}>

      
        <View style={styles.card}>
          <Text>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>Now</Text>
        </View>
        <View style={styles.card}>
          <Text>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>Now</Text>
        </View>
        <View style={styles.card}>
          <Text>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>Now</Text>
        </View>
        <View style={styles.card}>
          <Text>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>Now</Text>
        </View>
        <View style={styles.card}>
          <Text>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>Now</Text>
        </View>
        
      </View>
    </View>
  )


      

}
