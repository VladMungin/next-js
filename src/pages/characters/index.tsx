'use client'
import { getCharacters } from '@/entities/characters/api/character-get-collection'
import { ICharacter } from '@/entities/characters/api/types'
import CharacterCard from '@/entities/characters/ui/character-card'
import Catalog from '@/shared/ui/catalog'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'


export const getStaticProps = (async () => {
	const response = await getCharacters()
	return { props: { characters: response } }
}) satisfies GetStaticProps<{
	characters: ICharacter[]
}>

export default function Characters({
	characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className=' max-w-[1200px] mx-auto'>
			<h1 className='text-5xl text-center my-8'>Characters</h1>
			<Catalog>
				{characters.map((character: ICharacter) => (
					<CharacterCard key={character.id} character={character} />
				))}
			</Catalog>
		</div>
	)
}
