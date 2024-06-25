import { ReactElement, ReactNode } from 'react'

interface ICatalogProps {
	children: string | JSX.Element | JSX.Element[] | ReactNode | ReactElement
}

const Catalog = ({ children }: ICatalogProps) => {
	return <div className='grid grid-cols-3 gap-4'>{children}</div>
}

export default Catalog
