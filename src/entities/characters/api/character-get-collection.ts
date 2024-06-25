import { httpCLient } from '@/shared/lib/httpClient'
import { ICharacter } from './types'

export const fetchCharacters = async (): Promise<ICharacter[]> => {
	// Make HTTP request to fetch characters
	const response = await httpCLient.get('/character')
	return response.data.results
}
