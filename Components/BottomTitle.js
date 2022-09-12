import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function BottomTitle(){
    return(
        <View style={styles.titleBottom}>
            <Text>Hoje</Text>
            <TouchableOpacity>
                <Text style={{color:'gray'}}>Proximos 7 dias {">"} </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    titleBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:340,
    },
})