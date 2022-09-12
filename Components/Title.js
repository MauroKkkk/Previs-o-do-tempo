import { View, Text, StyleSheet } from "react-native";

export default function Title(props){
    return(
        <View style = {styles.location}>
            <Text style={{fontSize:30}}>{props.cidade},</Text>
            <Text style={{color:'gray', fontSize:25, marginTop:5}}> {props.estado}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    location:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        width: 350,
        height:10,
      },
});