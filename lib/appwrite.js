import { Account, Client } from 'react-native-appwrite'

export const config = () => {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.jsm.food',
	projectId: '66981ccf0020ad31c142',
	databseId: '66981e0f001a98a93f12',
	userCollectionId: '66981e39003d7a5054f1',
	videoCollectionId: '66981e6c001fd02aeaee',
	storageId: '66981fd60005da8d1b9a'
}


const client = new Client()

client
	.setEndpoint(config.endpoint)
	.setProejct(config.projectId)
	.setPlatform(config.platform)

const account = new Account(client)

export const createUser () => {
	account.create(ID.unique(), 'me@example.com', 'password', 'John Doe')
		.then(function (response) {
			console.log(response)
		}, function (error) {
			console.log(response)
		})

}
