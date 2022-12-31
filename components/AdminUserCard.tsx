import { APIUser, AuthorityLevel } from 'luyx-management-api-types/v1';
import Image from 'next/image.js';
import Link from 'next/link';
import { FC } from 'react';


const AdminUserCard: FC<{ user: APIUser; }> = ({ user }) => {

	return (
		<Link
			legacyBehavior
			href={`${'http://127.0.0.1:3001'}/admin/users/${user._id}`}>
			<div className='group bg-gray-200 p-4 rounded-lg shadow-md hover:scale-[1.04] transiton-all duration-[400ms] ease-in-out relative cursor-pointer'>
				<Image
					alt={user.alias}
					src={user.avatarURL}
					width={128}
					height={128}
				/>
				<div className='w-52 rounded-lg transition-all duration-[400ms] ease-in-out group-hover:shadow-md group-hover:scale-[]'>
					{`${'http://127.0.0.1:3001'}/admin/projects/${user._id}`}
				</div>
				<h1 className='text-xl font-bold'>{user.alias}</h1>
				<p className='mb-5'>{user.firstName} {user.lastName}</p>
				<p className='font-bold'>{user.position} ({AuthorityLevel[user.authorityLevel]})</p>
				<p>{user.subPositions.join(', ')}</p>
			</div>
		</Link>
	);
};

export default AdminUserCard;