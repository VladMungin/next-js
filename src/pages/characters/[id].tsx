import { getCharacterById } from '@/entities/characters/api/character-get-by-id'
import { getCharacters } from '@/entities/characters/api/character-get-collection'
import { ICharacter } from '@/entities/characters/api/types'
import OneCharacter from '@/entities/characters/ui/one-character'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'

export const getStaticPaths = (async () => {
	const response = await getCharacters()

	const paths = response.map((character: ICharacter) => {
		return {
			params: { id: character.id.toString() },
		}
	})
	return { paths, fallback: true }
}) satisfies GetStaticPaths

export const getStaticProps = async ({
	params,
}: {
	params: { id: string }
}) => {
	const id = params.id
	const characterData = await getCharacterById(id)
	return { props: { character: characterData } }
}

export default function Character({
	character,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <OneCharacter character={character} />
}
