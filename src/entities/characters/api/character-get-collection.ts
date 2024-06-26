import { httpCLient } from '@/shared/lib/httpClient'
import { ICharacter } from './types'

export const getCharacters = async (): Promise<ICharacter[]> => {
	const response = await httpCLient.get('/character')
	return response.data.results
}
