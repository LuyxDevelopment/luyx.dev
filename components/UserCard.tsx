import { APIUser } from 'luyx-management-api-types/v1/index.js';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
	user: APIUser;
}

const UserCard: FC<Props> = ({ user }) => {
	return (
		<div className='hover:-translate-y-2 duration-300'>
			<Link
				href={`https://github.com/${user.contact.gitHub}`}
			>
				<div className='p-4 bg-egg-sour shadow-lg ring-1 ring-gray-200/30 rounded-md flex cursor-pointer'>
					<Image
						alt={user.alias}
						src={user.avatarURL}
						className='rounded-md w-24 mr-4'
						height={256}
						width={256}
					/>
					<div className='w-full'>
						<p className='text-xl text-ellipsis title'>{user.alias}</p>
						<p className='text-sm text-ellipsis mb-4'>{user.position}</p>
						<p>{user.info.countryCode}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default UserCard;