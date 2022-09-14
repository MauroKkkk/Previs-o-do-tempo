import { View, Text, StyleSheet } from "react-native-web";
import { Feather } from '@expo/vector-icons';
import CardInfo from "./CardInfo";
import SubCard from "./SubCard";
import DatePicker from 'react-native-datepicker';

export default function Card(props){
    return(
        <View style={styles.mainCard}>
          <Feather name="sun" style={{marginTop:40}} size={70} color="orange"/>
          <Text style={{color:'white',fontSize:30, marginTop:5,fontWeight:500}}>{props.weather}</Text>
          <Text style={{color:'#A0BDFF', fontSize:15}}>{props.date}</Text>
          <View style={styles.temperature}>
            <Text style={[styles.temperatureText, {color:'white',fontWeight:600,fontSize:85,marginTop:15,  }]}>27°</Text>
          </View>
          <View style={styles.cardSub}>
          <View style={styles.cardSubTop}>
                <View style={styles.cardSubLeftTop}>
                    Car
                </View>
                <View style={styles.cardSubRightTop}>

                </View>
            </View>
                <View style={styles.cardSubBottom}>
                    <View style={styles.cardSubLeftBottom}>
                   
                    </View>
                    <View style={styles.cardSubRightBottom}>
                        
                    </View>
                    
                </View>
          </View>


            </View>
    )
}
                

const styles = StyleSheet.create({
    mainCard:{
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: '#427BFF',
        marginTop:35,
        height:480,
        width:340,
    },
    temperature:{
        alignItems: 'center',
        marginBottom:25,
    },
    temperatureText:{
        fontSize: 40,
    },
    cardSub:{
        flexDirection:'column',
    },
    cardSubTop:{
        flexDirection:'row',
        width: 342,
    },
    cardSubBottom:{
        flexDirection:'row',
    },
    cardSubTopLeft:{
        width: 171,
    },
    cardSubBottom:{
        flexDirection:"row",
        width: 342,
    },

    
})