import React , { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import  Inverter,{ MegaSena }  from './componentes/Multi' // Inverter foi exportado de forma padrão, por isso pode ficar fora das chaves

export default class App extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Simples texto='Flex Flex' />
				<ParImpar numero={5} />
				<Inverter texto='REACT NATIVO' />
				<MegaSena numeros={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})