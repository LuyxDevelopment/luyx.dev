import { APIUser } from 'luyx-management-api-types/v1/index.js';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
	user: APIUser;
}

const TeamMemberCard: FC<Props> = ({ user }) => {
	return (
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
					<p className='text-sm text-ellipsis'>{user.position}</p>
				</div>
			</div>
		</Link>
	);
};

export default TeamMemberCard;