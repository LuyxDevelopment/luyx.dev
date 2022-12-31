import { APIProject, APIUser, BaseAuthRouteOptions } from 'luyx-management-api-types/v1';
import { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import UserCard from '../components/UserCard';
import { useMetaData } from '../lib/hooks/useMetaData';

interface Props {
	users: APIUser[];
	projects: APIProject[];
}

const Home: NextPage<Props> = ({ users, projects }) => {
	return (
		<>
			{useMetaData('Home', 'Luyx Home Page', '/')}
			<Layout>
				<div className='absolute bottom-0 w-screen rounded-xl overflow-auto p-8'>
					<div className='flex justify-center'>
						<a href='#content' className='animate-bounce bg-reddish-orange p-2 w-10 h-10 ring-1 ring-gray-200/30 shadow-lg shadow-white/10 rounded-full flex items-center justify-center'>
							<svg className='w-6 h-6 text-white' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
								<path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
							</svg>
						</a>
					</div>
				</div>

				<audio src='/assets/audio/start.ogg' hidden={true} autoPlay={false} id='startAudio' />

				<div className='h-screen w-screen grid items-center'>
					<div className='container mb-20'>
						<div className='mb-10'>
							<h1 className='text-5xl font-bold mb-2'>
								Hello, we are Luyx LLC.
							</h1>
							<p className='text-2xl mb-2'>
								A fullstack team of developers ready to build scalable platforms for your needs.
							</p>
							<p className='italic'>
								suitable for: artists, musicians, photographers, entrepreneurs, organizations, volunteers
							</p>
						</div>
						<div className='mb-10'>
							<h2 className='text-2xl font-bold mb-2'>
								An overview of our expertise
							</h2>
							<div className='mb-2'>
								<Link
									href={'https://skillicons.dev'}>
									<img
										alt='Skill Icons'
										src={'https://skillicons.dev/icons?i=nodejs,ts,java,py,html,react,git,mongodb,mysql,nginx,docker,gcp,&theme=light'}
										width={2048}
										height={2048}
									/>
								</Link></div>
							<p className='italic'>
								platforms: websites, webstores, apps, data management systems, integrations with other software
							</p>
						</div>
						<h2 className='text-3xl font-bold mt-5'>
							Interested?
						</h2>
						<p>
							Reach out to us at <a className='font-bold' href='mailto:contact@luyx.dev'>contact@luyx.dev</a>
						</p>
					</div>
				</div>

				{/* <div className="h-screen w-screen grid items-center">
					<div className=''>
						<img alt="Luyx Development Logo" src='/assets/images/luyx.svg' className="mx-auto h-64 lg:block hidden" />
						<img alt="Luyx Development Small" src='/assets/images/luyx.svg' className="mx-auto h-64 block lg:hidden" />
						<p className="text-2xl font-bold">Luyx Development</p>
					</div>
				</div> */}

				<div className='bg-gradient-to-b from-white to-egg-sour p-8'>
					{/* <div>
						<h2 className='text-center text-3xl title'>Our Projects</h2>
						<h3 className='max-w-4xl text-xl mt-2 mx-auto text-center'>
							These are the projects that we&apos;re currently working on.
						</h3>
						<div className='max-w-4xl mx-auto mt-8 grid lg:grid-cols-2 gap-8'>
							{
								projects.filter(u => !u.isPrivate).map((u, i) => {
									return (
										<ProjectCard project={u} key={i} />
									);
								})
							}
							<Link
								target={'_blank'}
								rel='noopener noreferrer'
								href={'https://treefarmer.xyz'}
							>
								<div
									style={{ background: '#236f21' }}
									className='p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-green-500 hover:shadow-lg hover:shadow-green-500/40 bg-black'
								>
									<Image
										alt='Tree farmer logo'
										src={'/assets/images/tree-farmer.svg'}
										height={100}
										width={500}
										className='h-16 mx-auto' />
								</div>
							</Link>
							<Link
								target={'_blank'}
								rel='noopener noreferrer'
								href='https://count.bot'
							>
								<div
									className='p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-orange-500 hover:shadow-lg hover:shadow-orange-500/40 bg-black'
								>
									<Image
										alt='CountBot logo'
										src={'/assets/images/countbot.svg'}
										height={100}
										width={500}
										className='h-16 mx-auto' />
								</div>
							</Link>
						</div>
					</div> */}

					<div>
						<h2 className='text-center text-3xl title mt-8 cursor-pointer' onClick={(): string => (window.location.href = '/team')}>Our Team</h2>
						<h3 className='max-w-4xl text-xl mt-2 mx-auto text-center'>
							Spanning multiple countries and timezones, we can get it done.
						</h3>
						<div className='max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 mt-8'>
							{
								users.map((u, i) => {
									return (
										<UserCard user={u} key={i} />
									);
								})
							}
						</div>
					</div>

					<h2 className='text-center text-3xl title mt-8'>Our Hosting</h2>
					<div className='max-w-4xl mx-auto'>
						<h3 className='text-center mt-2 mx-auto'>
							Something.Host provides the fastest servers. We use them to run your projects.
						</h3>
						<Link
							href='https://something.host/en?fpr=fyrlex'
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className='grid mt-8'>
								<div style={{ background: '#6a54dd' }} className='flex p-4 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 bg-black'>
									<div className='mx-auto flex'>
										<Image
											alt='Something.host logo'
											src={'/assets/images/somethinghost.svg'}
											height={8}
											width={'100'}
											className='h-8 my-auto' />
										<p className='ml-4 my-auto'>Check out Something.Host</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</Layout>
		</>);
};

export const getServerSideProps = async ({
	res,
}: NextPageContext): Promise<{ props: { users: APIUser[]; projects: APIProject[]; }; }> => {
	res?.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59',
	);

	const usersRequest = await fetch(
		'https://api.luyx.dev/v1/users',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);

	const usersResponse = (await usersRequest.json()) as BaseAuthRouteOptions<APIUser[]>['Reply'];

	const projectsRequest = await fetch(
		'https://api.luyx.dev/v1/projects',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);


	const projectsResponse = (await projectsRequest.json()) as BaseAuthRouteOptions<APIProject[]>['Reply'];

	return {
		props: {
			users: usersResponse.data!,
			projects: projectsResponse.data!
		},
	};
};

export default Home;