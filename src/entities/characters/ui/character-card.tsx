import { ICharacter } from '@/entities/characters/api/types'
import Card from '@/shared/ui/card'
import Link from 'next/link'
interface CharacterCardProps {
	character: Pick<ICharacter, 'name' | 'image' | 'status' | 'species' | 'id'>
}

const CharacterCard = ({ character }: CharacterCardProps) => {
	return (
		<Link href={`/characters/${character.id}`}>
			<Card>
				<img src={character.image} alt='' />
				<h3>{character.name}</h3>
				<p>Status: {character.status}</p>
				<p>Species: {character.species}</p>
			</Card>
		</Link>
	)
}

export default CharacterCard
