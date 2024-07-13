import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
	return (
		<>
			<TouchableOpacity 
				onPress={handlePress}
				activeOpacity={0.7}
				className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity' : ''}`}
				disable={isLoading}
			>
				<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
			</TouchableOpacity>
		</>
	)
}

export default CustomButton