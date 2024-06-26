import axios from 'axios'

export const httpCLient = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
})
