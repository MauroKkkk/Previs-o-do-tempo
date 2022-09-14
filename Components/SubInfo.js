import { View, StyleSheet, Text } from 'react-native'

export default function SubInfo(props){
    return(
        <View style={styles.subInfo}>
            {props.info == "pressão"?<Text style={{color:'#A0BDFF', fontWeight:500}}>Pressão</Text><Text style={{color:'white'}}>1014 mbar</Text>:null}

            
        </View>
    )

}

const styles = StyleSheet.create({
    subInfo:{
        flexDirection:'column',
    }
})