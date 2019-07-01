import React from 'react'
import { View,Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// Componente Funcional 

// export default function(props){
//     return <Text>{props.texto}</Text>
// }

// export default props =>
//      //Return Implícito
//     <View>
//         <Text> Arrow 1: {props.texto}</Text>
//         <Text> Arrow 2: {props.texto}</Text>
//     </View> 

// export default props => [
//     //Return implícito
//     <Text key={1}>Arrow 1 por array : {props.texto}</Text>,
//     <Text key={2}> Arrow 2 por array : {props.texto}</Text>
// ]

export default props => <Text style={Padrao.ex}>Arrow : {props.texto}</Text>