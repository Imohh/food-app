import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = () => {
	return (
		<>
			<TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}>
				<Text className="text-primary font-psemibold text-lg">Custom Button</Text>
			</TouchableOpacity>
		</>
	)
}

export default CustomButton