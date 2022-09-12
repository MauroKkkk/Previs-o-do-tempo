import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Feather } from '@expo/vector-icons';
export default function BottomCard(){
    return(
        <View style = {styles.cardView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                <View style={styles.card}>
                <Text>22:00</Text>
                <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
                <Text>24°</Text>
                </View>
                <View style={styles.card}>
                <Text>00:00</Text>
                <Feather name="sun" style={{marginTop: 5}} size={35} color="orange"/>
                <Text>24°</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        paddingStart:15,
        flexDirection: 'row',
        width:400,
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
    cardTitle:{
        fontSize: 10,
    },
})