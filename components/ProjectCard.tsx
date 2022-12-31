import { APIProject } from 'luyx-management-api-types/v1';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ProjectCard: FC<{ project: APIProject; }> = ({ project }) => {

	return (
		<div className='w-256 h-256 border-2 hover:-translate-y-2 duration-300 rounded-md'>
			<Link
				target={'_blank'}
				rel='noopener noreferrer'
				href={`https://github.com/LuyxDevelopment/${project.name.replace(/\s+/g, '-').toLowerCase()}`}
			>
				<div>
					<Image
						alt={project.name}
						src={project.imageURL}
						height={512}
						width={256}
						className='cursor-pointer rounded-md shadow-lg transition-all duration-300 ring-1 ring-gray-200/30 hover:ring-egg-sour-500 hover:shadow-lg hover:shadow-egg-sour-500/40 bg-egg-sour'
					/>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;