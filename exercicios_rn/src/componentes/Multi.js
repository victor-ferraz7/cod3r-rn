import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

 const Inverter = props =>{
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

 const MegaSena = props =>{
    const [min, max] = [1,60]
    const numeros = Array(props.numeros || 6).fill(0) // Gera Array de 6 posições zeradas

    for (let i = 0; i < numeros.length ; i++){// Até completar as posições do array
        let novo = 0
        while (numeros.includes(novo)){ // Enquanto o Numero for igual ao let novo
            novo = Math.floor(Math.random() * (max - min +1)) + min // é gerado um número aleatório diferente, para sair da condicional while
        }
        numeros[i] = novo // valor de novo é passado para o array
    }
    numeros.sort((a,b) => a - b) // Ordenar os valores em ordem crescente
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

export default Inverter // foi exportado da forma padrão, por isso que poderá ser importado dentro ou fora das chaves 
export { Inverter,MegaSena }