import { APIUser, AuthorityLevel } from 'luyx-management-api-types/v1';
import Image from 'next/image.js';
import Link from 'next/link';
import { FC } from 'react';

const AdminUserCard: FC<{ user: APIUser; }> = ({ user }) => {

	return (
		<Link
			legacyBehavior
			href={`${'http://127.0.0.1:3000'}/admin/management/users/${user._id}`}>
			<div className='group bg-gray-200 p-4 rounded-lg shadow-md hover:scale-[1.04] transiton-all duration-[400ms] ease-in-out relative cursor-pointer'>
				<Image
					alt={user.alias}
					src={user.avatarURL}
					width={128}
					height={128}
				/>
				<h1 className='text-xl font-bold'>{user.alias}</h1>
				<p className='mb-5'>{user.firstName} {user.lastName}</p>
				<p className='font-bold'>{user.position} ({AuthorityLevel[user.authorityLevel]})</p>
				<p className='mb-5'>{user.subPositions.join(', ')}</p>
				<p>{user.contact.discordId}</p>
				<p>{user.contact.email}</p>
				<p className='mb-5'>{user.contact.gitHub}</p>
				<p>Projects: {user.projects}</p>
			</div>
		</Link>
	);
};

export default AdminUserCard;