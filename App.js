import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Menu from './Components/Menu.js';
import Title from './Components/Title';
import Card from './Components/Card.js';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import BottomTitle from './Components/BottomTitle.js';
import CardInfo from './Components/CardInfo.js';
import BottomCard from './Components/BottomCard.js';


export default function App() {


  return (
    <View style={styles.container}>
      <Menu/>
      <Title cidade="Maceió" estado="Alagoas"/>
      <Card weather="Nublado" date="Segunda-Feira, 12 Out"/>
      <BottomTitle/>
      <BottomCard/>
    </View>
  )
      
}

const styles = StyleSheet.create({
  container: {
    margin:25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
 



  
});