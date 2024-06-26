import { ICharacter } from '../api/types'

interface OneCharacterProps {
	character: ICharacter
}

export default function OneCharacter({ character }: OneCharacterProps) {
	return (
		<div className='max-w-[800px] mx-auto flex flex-col justify-center items-center mt-5'>
			{!character && <div>Loading...</div>}
			{character && (
				<div className='text-xl'>Character Name: {character.name}</div>
			)}
			{character && (
				<div>
					<img src={character.image} alt='' />
				</div>
			)}
			{character && <div>Character gender: {character.gender}</div>}
			{character && <div>Character species: {character.species}</div>}
			{character && <div>Character status: {character.status}</div>}
			{character && <div>Character origin: {character.origin.name}</div>}
			{character && <div>Character location: {character.location.name}</div>}
			{character && <div>Character created: {character.created}</div>}
			{character && (
				<div>Character type: {character.type ? character.type : 'unknow'}</div>
			)}
		</div>
	)
}
