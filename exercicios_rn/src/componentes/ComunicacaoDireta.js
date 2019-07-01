import React from 'react'
import {View,Text} from 'react-native'

const fonte = {
    style : {fontSize: 30}
}

function filhosComProps(props){
    return React.Children.map(props.children, c => React.cloneElement(c,{...props, ...c.props}))
}


export const Filho = props => 
    <View>
        <Text {...fonte}>Filho:{props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai:{props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {/* {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avo:{props.nome} {props.sobrenome}</Text>
        <Pai nome='Andre' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Thiago' />
            <Filho nome='Thais' />
        </Pai>
        <Pai {...props} nome='Victor'>
            <Filho nome='Antonio'/>
            <Filho nome='Jaci'/>
        </Pai>
    </View>