import { View, StyleSheet } from "react-native-web";
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function SubCard(props){
    return(
        <View style={styles.subcard}>
            {props.icon == 'line-graph'?<Entypo name="line-graph" style={{marginStart:-100}} size={24} color="white" />:null}
            {props.icon == 'wind'?<Fontisto name="wind" style={{marginStart:-100}} size={24} color="white" />:null}
            {props.icon == 'sun'?<Feather name="sun" style={{marginStart:-100}} size={24} color="white" />:null}
            {props.icon == 'thermometer'?<Feather name='thermometer' style={{marginStart:-100}} size={24} color='white'/>:null}
        </View>
    )
}

const styles = StyleSheet.create({
    subcard:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent: 'center',
        height:73,
        alignItems:'center',
        borderColor:'#A0BDFF',   
        borderWidth:1,
        width:171,
    },
});