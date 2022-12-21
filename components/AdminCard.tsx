import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
	name: string;
	url: string;
	svg: string;
}

const AdminPageCard: FC<Props> = ({ name, url, svg }) => {

	return (
		<Link
			legacyBehavior
			href={url}>
			<div className='group bg-gray-200 p-4 rounded-lg shadow-md hover:scale-[1.04] transiton-all duration-[400ms] ease-in-out relative cursor-pointer'>
				<Image
					className='w-52 rounded-lg transition-all duration-[400ms] ease-in-out group-hover:shadow-md group-hover:scale-[]'
					draggable={false}
					src={svg}
					alt={name}
					width='256'
					height='256' />
				<h1 className='text-xl font-bold'>{name}</h1>
			</div>
		</Link>
	);
};

export default AdminPageCard;