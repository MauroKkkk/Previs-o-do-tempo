// import { View, Text, StyleSheet } from "react-native"
// import { Feather } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons'; 
// import { Entypo } from '@expo/vector-icons'; 

// export default function CardInfo(props){
//     return(
//         <View style={styles.info}>
//             <View style={styles.subInfo}>

//                 <View style={styles.cardIcons0}>
//                   <Fontisto name="wind" size={24} color="white" />
//                   <View style={styles.infoLayout}>
//                     <Text style={{color:'#A0BDFF', fontWeight:500}}>Vento</Text>
//                     <Text style={{color:'white'}}>19.2km/j</Text>
//                   </View>
                

//                 <View style={styles.cardIcons1}>
//                   <Feather name="sun" size={24} color="white"/>
//                   <View style={styles.infoLayout}>
//                     <Text style={{color:'#A0BDFF', fontWeight:500}}>Incidencia UV</Text>
//                     <Text style={{color:'white'}}>2</Text>
//                   </View>
                    

//             </View>

//               <View style={styles.cardIcons2}>
//                 <Feather name="thermometer" size={24} color="white" />
//                 <View style={styles.infoLayout}>
//                   <Text style={{color:'#A0BDFF', fontWeight:500}}>Sensação termica</Text>
//                   <Text style={{color:'white'}}>30°</Text>
//                 </View>
//               </View>
//               <View style={styles.cardIcons3}>
//                 <Entypo name="line-graph" size={24} color="white" />
//                 <View style={styles.infoLayout}>
//                   <Text style={{color:'#A0BDFF', fontWeight:500}}>Pressão</Text>
//                   <Text style={{color:'white'}}>1014 mbar</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     info:{
//         alignItems:'center',
//         flexDirection:'row',
//         justifyContent:'space-between',
//         marginEnd:10,
//         width:200,
//     },
//     subInfo:{
//         marginStart:-66,
//         flexDirection:'column',
//         justifyContent:'space-between',
//     },
//     cardIcons0:{
//         flexDirection:'row',
//         justifyContent: 'center',
//         height:73,
//         alignItems:'center',
//         borderColor:'#A0BDFF', 
//         borderLeftColor:'white',   
//         borderWidth:1,
//         width:171,
//     },
//     cardIcons1:{
//         flexDirection:'row',
//         justifyContent: 'center',
//         height:74,
//         alignItems:'center',
//         borderColor:'#A0BDFF',   
//         borderLeftColor:'white',
//         borderBottomColor:'white', 
//         borderWidth:1,
//         width:171,
//     },
//     cardIcons2:{
//         flexDirection:'row',
//         justifyContent: 'center',
//         height:73,
//         alignItems:'center',
//         borderColor:'#A0BDFF',
//         borderRightColor:'white',    
//         borderWidth:1,
//         width:171,
//     },
//     cardIcons3:{
//         flexDirection:'row',
//         justifyContent: 'center',
//         height:74,
//         alignItems:'center',
//         borderColor:'#A0BDFF',
    
//         borderRightColor:'white',
//         borderBottomColor:'white',     
//         borderWidth:1,
//         width:171,
//     },
//     infoLayout:{
//         marginStart: 19,
//         alignItems:'center',
//         marginTop:1,
//         borderTopColor:'white',
//         flexDirection:'column',
//     },
// })