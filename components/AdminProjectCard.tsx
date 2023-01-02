import { APIProject, AuthorityLevel } from 'luyx-management-api-types/v1';
import Image from 'next/image.js';
import Link from 'next/link';
import { FC } from 'react';

const AdminProjectCard: FC<{ project: APIProject; }> = ({ project }) => {

	return (
		<Link
			legacyBehavior
			href={`${'http://127.0.0.1:3000'}/admin/projects/${project._id}`}>
			<div className='group bg-gray-200 p-4 rounded-lg shadow-md hover:scale-[1.04] transiton-all duration-[400ms] ease-in-out relative cursor-pointer'>
				<Image
					alt={project.name}
					src={project.imageURL}
					width={128}
					height={128}
				/>
				<h1 className='text-xl font-bold'>{project.name}</h1>
				<p className='mb-5'>{project.description} </p>
				<p className='mb-5'>{project.createdAt} </p>
				<p className='mb-5'>{project.deadline} </p>
				<p className='font-bold'>{project.stage}</p>
				<p>Users</p>
				<p className='mb-5'>{project.assignedUsers.join(', ')}</p>
				<p>{project.wallet}</p>
				<p>{project.isPrivate}</p>
			</div>
		</Link>
	);
};

export default AdminProjectCard;