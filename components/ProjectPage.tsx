import { FC } from 'react';
import { useHydrationSafeDate } from '../lib/hooks/useHydrationSafeDate';
import Image from 'next/image';
import { APIProject } from 'luyx-management-api-types/v1';
import { useMetaData } from '../lib/hooks/useMetaData';
import Link from 'next/link.js';

interface Props {
	project: APIProject;
}

const ProjectPage: FC<Props> = ({ project }) => {
	const createdDate = useHydrationSafeDate(project.createdAt);
	const deadlineDate = useHydrationSafeDate(project.deadline);
	return (
		<>
			{useMetaData('Admin', 'Admin Page', '/admin/projects')}
			<div className='flex flex-col justify-center'>
				<div
					style={{
						background: `url(${project.imageURL}) no-repeat center`,
						backgroundSize: 'cover',
						width: '100%',
						height: '11rem',
					}}
				></div>
				<div className='text-center'>
					<h1 className='pb-3 pt-3 text-5xl font-bold'>{project.name}</h1>
					<h2 className='mb-3 rounded-3xl bg-basket-ball-orange p-2'>
						<span className='font-medium'>Created At</span>
						<span className='cursor-pointer bg-gray-100 p-1 text-lg font-medium text-gray-700 hover:underline'>
							{createdDate}
						</span>
						<span className='font-medium'>Deadline</span>
						<span className='cursor-pointer bg-gray-100 p-1 text-lg font-medium text-gray-700 hover:underline'>
							{deadlineDate}
						</span>
					</h2>
					<p className='px-2 pb-3 text-lg'>{project.description}</p>
					<p className='px-2 pb-3 text-lg font-bold'>
						<Link
							href={`https://github.com/LuyxDevelopment/${project.name.replace(/\s+/g, '-').toLowerCase()}`}>
							GitHub
						</Link>
					</p>
				</div>
				<div>
					<h2 className='text-3xl font-bold'>Project Settings</h2>
					<div className='flex flex-col font-semibold text-lg my-3'>
						<p>
							Privacy:{' '}
							<span className='text-gray-500 italic underline'>
								{`${project.isPrivate}`}
							</span>
						</p>
						<p>
							Deadline:{' '}
							<span className='text-gray-500 italic underline'>
								{project.deadline}
							</span>
						</p>
					</div>
				</div>
				<div>
					<h2 className='text-3xl font-bold'>Contact Info</h2>
					<div className='flex flex-col font-semibold text-lg my-3'>
						<p>
							Email:{' '}
							<span className='text-gray-500 italic underline'>
								{project.contact.email}
							</span>
						</p>
						<p>
							Phone:{' '}
							<span className='text-gray-500 italic underline'>
								{project.contact.phone}
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
