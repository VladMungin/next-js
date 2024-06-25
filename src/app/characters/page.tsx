'use client'

import { fetchCharacters } from '@/entities/characters/api/character-get-collection'
import { ICharacter } from '@/entities/characters/api/types'
import CharacterCard from '@/entities/characters/ui/character-card'
import Catalog from '@/shared/ui/catalog'
import { useEffect, useState } from 'react'

export default function Characters() {
	const [characters, setCharacters] = useState<ICharacter[]>()
	useEffect(() => {
		fetchCharacters()
			.then(data => setCharacters(data))
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<div className='max-w-[1280px] mx-auto px-5'>
			<h1 className='my-5 text-5xl text-center'>Characters</h1>
			<Catalog>
				{characters?.map(character => (
					<CharacterCard key={character.id} character={character} />
				))}
			</Catalog>
		</div>
	)
}
