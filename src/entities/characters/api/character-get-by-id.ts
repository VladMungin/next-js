import { httpCLient } from '@/shared/lib/httpClient'
import { ICharacter } from './types'

export const fetchCharacterById = async (id: string): Promise<ICharacter> => {
	// Make HTTP request to fetch character by ID
	const response = await httpCLient.get(`/character/${id}`)
	return response.data
}
