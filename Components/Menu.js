import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Menu(){

    return(
        <View style={styles.menus}>
            <TouchableOpacity>
                <AntDesign name="bars" size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name='ellipsis1' style={{ marginTop: 7 }} size={24} color='black' />
            </TouchableOpacity>
        </View>

    );


}


const styles = StyleSheet.create({
    menus:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:370,
  
    },
});

