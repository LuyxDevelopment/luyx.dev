import { APIProject } from 'luyx-management-api-types/v1';
import Link from 'next/link';
import { FC } from 'react';

const AdminProjectCard: FC<{ project: APIProject; }> = ({ project }) => {

	return (
		<Link
			legacyBehavior
			href={`${process.env.NEXTAUTH_URL}/admin/projects/${project._id}`}>
			<div className='group bg-gray-200 p-4 rounded-lg shadow-md hover:scale-[1.04] transiton-all duration-[400ms] ease-in-out relative cursor-pointer'>
				<div className='w-52 rounded-lg transition-all duration-[400ms] ease-in-out group-hover:shadow-md group-hover:scale-[]'>
					{`${process.env.NEXTAUTH_URL}/admin/projects/${project._id}`}
				</div>
				<h1 className='text-xl font-bold'>{project.name}</h1>
			</div>
		</Link>
	);
};

export default AdminProjectCard;