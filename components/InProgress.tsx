import { NextPage } from 'next';
import Layout from './Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import MoonLoader from 'react-spinners/MoonLoader';

interface Props {
	pageName: string;
}

const InProgress: NextPage<Props> = ({ pageName }) => {
	return (
		<>
			<Layout>
				{useMetaData('Page in progress', 'Page in progress', pageName)}
				<div className='relative'>
					<div className='absolute top-10 left-14 sm:left-20 text-white'>
						<div className='flex flex-wrap w-56 sm:w-96'>
							<h1 className='text-5xl pb-2 font-bold text-black'>
								This page is in progress.
							</h1>
							<p className='text-xl text-black'>
								Please come back later.
							</p>
						</div>
					</div>
				</div>
				<div className='grid place-items-center h-96'>
					<MoonLoader
						color={'#f28963'}
						loading={true}
						size={100}
						speedMultiplier={0.5}
						aria-label='Loading Spinner'
						data-testid='loader'
					/>
				</div>
			</Layout>
		</>
	);
};

export default InProgress;