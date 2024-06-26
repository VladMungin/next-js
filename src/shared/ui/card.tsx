import { ReactElement, ReactNode } from 'react'

interface ICard {
	children: string | JSX.Element | JSX.Element[] | ReactNode | ReactElement
}

const Card = ({ children }: ICard) => {
	return (
		<div className='flex flex-col px-4 py-2 shadow-lg rounded-lg transition-all hover:scale-110 hover:cursor-pointer max-w-sm'>
			{children}
		</div>
	)
}

export default Card
