import React from 'react'
import { ScrollView, View, Text, FlatList} from 'react-native'

const alunos = [
    {   id: 1, nome: 'Renato', nota: 7 },
    {   id: 2, nome: 'Renata', nota: 6 },
    {   id: 3, nome: 'Renate', nota: 5 },
    {   id: 4, nome: 'Renan', nota: 8 },
    {   id: 5, nome: 'Renivaldo', nota: 3 },
    {   id: 6, nome: 'Renavan', nota: 9 },
    {   id: 7, nome: 'Ronivon', nota: 5 },
    {   id: 8, nome: 'Repelente', nota: 8 },
    {   id: 9, nome: 'Retiro', nota: 9 },

    {   id: 11, nome: 'Renato', nota: 7 },
    {   id: 12, nome: 'Renata', nota: 6 },
    {   id: 13, nome: 'Renate', nota: 5 },
    {   id: 14, nome: 'Renan', nota: 8 },
    {   id: 15, nome: 'Renivaldo', nota: 3 },
    {   id: 16, nome: 'Renavan', nota: 9 },
    {   id: 17, nome: 'Ronivon', nota: 5 },
    {   id: 18, nome: 'Repelente', nota: 8 },
    {   id: 19, nome: 'Retiro', nota: 9 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 75,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex Now!
    
    alignItems: 'center', // cross axis
    flexDirection: 'row',
    justifyContent: 'space-between' // main axis

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text> Nome:{props.nome}</Text>
        <Text style={{fontWeight:'bold'}}>Nota:{props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}