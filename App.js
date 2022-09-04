import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


export default function App() {

  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] =  useState('BR, Maceio')

  const styles = StyleSheet.create({
    container: {
      margin:25,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent:'center',
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
    },
    temperatureText:{
      fontSize: 40,
    },
    cardView:{
      flexDirection: 'row',
    },
    firstCard:{
      backgroundColor: '#427BFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      margin: 10,
      padding: 10,
      width: 50,
      height: 100,
    },
    card:{
      backgroundColor: 'white',
      borderColor:'gray',
      borderWidth:1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      margin: 10,
      padding: 10,
      width: 50,
      height: 100,
    },

    menus:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:370,

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
      marginTop:10,
      marginBottom:10,
      width: 350,
      height:10,
    },
    titleBottom:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:340,
    },
    mainCard:{
      alignItems:'center',
      borderRadius: 10,
      backgroundColor: '#427BFF',
      marginTop:10,
      height:480,
      width:340,
    },
    info:{
      marginTop:15,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      marginEnd:10,
      
    
      width:200,
    },
    subInfo:{
      marginStart:-50,
      flexDirection:'column',
      justifyContent:'space-between',
      width:160,
    },
    cardIcons:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:70,
      borderColor:'white',
      borderRadius:1,
      borderBottomStartRadius:10,
      borderWidth:1,
      width:150,
    },
    infoLayout:{
      borderTopColor:'white',

      flexDirection:'column',
    },

  });
  return (
    <View style={styles.container}>
      <View style={styles.menus}>
        <TouchableOpacity>
          <AntDesign name="bars" size={30} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name='ellipsis1' style={{marginTop:7}} size={24} color='black'/>
        </TouchableOpacity>

      </View>
        
      <View style = {styles.location}>
        <Text style={{fontSize:30}}>Marechal,</Text>
        <Text style={{color:'gray', fontSize:25, marginTop:5}}> Alagoas</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.mainCard}>
          <Feather name="sun" style={{marginTop:40}} size={70} color="orange"/>
          <Text style={{color:'white',fontSize:30, marginTop:5,fontWeight:500}}>Ensolarado</Text>
          <Text style={{color:'#A0BDFF', fontSize:15}}>Segunda, 05 Nov</Text>
          <View style={styles.temperature}>
            <Text style={[styles.temperatureText, {color:'white',fontWeight:600,fontSize:85,marginTop:15,  }]}>{currentTemperature}°</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.subInfo}>
              <View>
                <View style={styles.cardIcons}>
                  <Fontisto name="wind" size={24} color="white" />
                  <View style={styles.infoLayout}>
                    <Text style={{color:'#A0BDFF', fontWeight:500}}>Vento</Text>
                    <Text style={{color:'white'}}>19.2km/j</Text>
                  </View>
                </View>
                
              </View>
                <View style={styles.cardIcons}>
                  <Feather name="sun" size={24} color="white"/>
                  <View style={styles.infoLayout}>
                    <Text style={{color:'#A0BDFF', fontWeight:500}}>Incidencia UV</Text>
                    <Text style={{color:'white'}}>2</Text>
                  </View>
                    
                </View>
            </View>
            <View>
              <View style={styles.cardIcons}>
                <Feather name="thermometer" size={24} color="white" />
                <View style={styles.infoLayout}>
                  <Text style={{color:'#A0BDFF', fontWeight:500}}>Sensação termica</Text>
                  <Text style={{color:'white'}}>30°</Text>
                </View>
              </View>
              <View style={styles.cardIcons}>
                <Entypo name="line-graph" size={24} color="white" />
                <View style={styles.infoLayout}>
                  <Text style={{color:'#A0BDFF', fontWeight:500}}>Pressão</Text>
                  <Text style={{color:'white'}}>1014 mbar</Text>
                </View>
              </View>
            </View>
            
          </View>
        </View>

      </View>
      <View style={styles.titleBottom}>
        <Text>Hoje</Text>
        <TouchableOpacity>
          <Text style={{color:'gray'}}>Proximos 7 dias > </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.cardView}>

      
        <View style={styles.firstCard}>
          <Text style={{color:'white'}}>12:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text style={{color:'white'}}>Now</Text>
        </View>
        <View style={styles.card}>
          <Text>14:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>30°</Text>
        </View>
        <View style={styles.card}>
          <Text>16:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>29°</Text>
        </View>
        <View style={styles.card}>
          <Text>18:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>27°</Text>
        </View>
        <View style={styles.card}>
          <Text>20:00</Text>
          <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
          <Text>24°</Text>
        </View>
        
      </View>
    </View>
  )


      

}
