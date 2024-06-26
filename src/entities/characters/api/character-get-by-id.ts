import { httpCLient } from '@/shared/lib/httpClient'
import { ICharacter } from './types'

export const getCharacterById = async (id: string): Promise<ICharacter> => {
	const response = await httpCLient.get(`/character/${id}`)
	return response.data
}
