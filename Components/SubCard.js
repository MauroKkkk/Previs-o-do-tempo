import { View, StyleSheet } from "react-native-web";
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SubCardIcons from "./SubCardIcons";
import SubInfo from "./SubInfo";

export default function SubCard(props){
    return(
        <View style={styles.subcard}>
            {props.subcard=="wind"?<SubCardIcons icon="wind"/><SubInfo />:null}
            {props.subcard=='thermometer'?<SubCardIcons icon='thermometer'/>:null}
            {props.subcard=="sun"?<SubCardIcons icon="sun"/>:null}
            {props.subcard=="line-graph"?<SubCard icon='line-graph'/>:null}

        </View>
    )
}

const styles = StyleSheet.create({
    subcard:{
        height:73,
        borderColor:'#A0BDFF',   
        borderWidth:1,
        width:171,
    },
});