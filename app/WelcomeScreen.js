import React from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'


export default function WelcomeScreen() {
	return (
		<>
			<View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
				<Text>Hello world</Text>
				<StatusBar style="light" />
				<Link href="/home" className="text-blue-500">go to Home</Link>

			</View>
		</>
	)
}