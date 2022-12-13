import { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { AlertInfo } from '../src/util';

interface Props {
	users: any[];
}

const Home: NextPage<Props> = ({ users }) => {
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
						<h1 className='text-5xl font-bold mb-5'>
							Hello, we are Luyx LLC.
						</h1>
						<p>
							A fullstack team of developers ready to support your projects, business, management and more.
						</p>
						{/* {
							AlertInfo.show && <div className='max-w-4xl mx-auto lg:mt-0 mt-8'>
								<div
									className={'rounded-xl border-2 border-transparent relative mx-4' + (AlertInfo.url && ' cursor-pointer')}
									onClick={(): void => {
										if (AlertInfo.url) window.location.href = AlertInfo.url;
									}}
								>
									<div className={'absolute w-full h-full rounded-xl border-2 border-gray-500 border-dashed transition-all ' + (AlertInfo.url ? 'hover:animate-stop animate-pulse-fast' : 'animate-pulse-fast')}></div>
									<div className='p-3 text-center'>
										<span className='p-1 text-sm bg-green-600 rounded-lg mr-3 uppercase'>
											{AlertInfo.smallText}
										</span>
										<span className='text-base'>
											{AlertInfo.text}
										</span>
									</div>
								</div>
							</div>
						} */}
					</div>
				</div>

				<div id='content' className='bg-gradient-to-b from-white to-egg-sour p-8'>
					<h1 className='text-center text-3xl title'>Our Projects</h1>
					<h2 className='max-w-4xl text-xl mt-2 mx-auto text-center'>
						These are the projects that we&apos;re currently working on.
					</h2>
					<div className='max-w-4xl mx-auto mt-8 grid lg:grid-cols-2 gap-8'>
						<Link
							legacyBehavior
							target={'_blank'}
							rel='noopener noreferrer'
							href={'https://github.com/LuyxDevelopment'}
						>
							<Image
								alt='Luyx Project'
								src='/assets/images/luyxcard.png'
								height={958}
								width={491}
								className='p-1 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-egg-sour-500 hover:shadow-lg hover:shadow-egg-sour-500/40 bg-egg-sour' />
						</Link>
						<a
							href='https://treefarmer.xyz'
							style={{ background: '#236f21' }}
							className='p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-green-500 hover:shadow-lg hover:shadow-green-500/40 bg-black'
						>
							<img alt='Tree farmer logo' src={'/assets/images/tree-farmer.svg'} className='h-16 mx-auto' />
						</a>
					</div>

					<h1 className='text-center text-3xl title mt-8 cursor-pointer' onClick={(): string => (window.location.href = '/team')}>Our Team</h1>
					<h2 className='max-w-4xl text-xl mt-2 mx-auto text-center'>
						Spanning multiple countries and timezones, we can get it done.
					</h2>
					<div className='max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 mt-8'>
						{
							users.map((t, i) => {
								return (
									<div className='p-4 bg-egg-sour shadow-lg ring-1 ring-gray-200/30 rounded-md flex cursor-pointer' key={i} onClick={(): string => (window.location.href = `https://github.com/${t.contact.gitHub}`)}>
										<img alt={t.alias} src={t.avatar} className='rounded-md w-24 mr-4' />
										<div className='w-full'>
											<p className='text-xl text-ellipsis title'>{t.alias}</p>
											<p className='text-sm text-ellipsis'>{t.position}</p>
										</div>
									</div>
								);
							})
						}
					</div>

					<h1 className='text-center text-3xl title mt-8'>Our Hosting</h1>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-center mt-2 mx-auto'>
							Something.Host provides the fastest servers. We use them to run your projects.
						</h2>
						<div className='grid mt-8'>
							<a
								href='https://something.host/en?fpr=fyrlex'
								style={{ background: '#6a54dd' }}
								className='flex p-4 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 bg-black'
							>
								<div className='mx-auto flex'>
									<img alt='Something.host logo' src={'/assets/images/somethinghost.svg'} className='h-8 my-auto' />
									<p className='ml-4 my-auto'>Check out Something.Host</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</>);
};

export const getServerSideProps = async ({
	res,
}: NextPageContext): Promise<{ props: { users: []; }; }> => {
	res?.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59',
	);

	const request = await fetch(
		'https://api.luyx.dev/v1/users',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);

	const response = (await request.json());

	return {
		props: {
			users: response.data!
		},
	};
};

export default Home;