import { FC } from 'react';

const Footer: FC = () => {

	return (
		<footer className='w-screen bg-egg-sour'>
			<div className='max-w-4xl mx-auto pt-16 lg:pt-16 pb-16 lg:flex'>
				<div className='lg:mt-0 mt-8 lg:gap-y-0 gap-y-8 lg:ml-16 grid lg:grid-cols-4 gap-x-16 lg:text-left text-center'>
					<div>
						<h3 className='text-xl title font-bold'>Projects</h3>
						<div className='grid gap-y-1'>
							<a href='https://count.bot' className='decoration-transparent decoration-2 text-sm hover:decoration-orange-500 transition-all duration-300 hover:underline'>
								CountBot
							</a>
							<a href='https://treefarmer.xyz' className='decoration-transparent decoration-2 text-sm hover:decoration-green-500 transition-all duration-300 hover:underline'>
								Tree Farmer
							</a>
							<a href='https://2048bot.com' className='decoration-transparent decoration-2 text-sm hover:decoration-yellow-500 transition-all duration-300 hover:underline'>
								2048
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title font-bold'>Sponsors</h3>
						<div className='grid gap-y-1'>
							<a href='https://something.host/en?fpr=fyrlex' className='decoration-transparent decoration-2 text-sm hover:decoration-indigo-500 transition-all duration-300 hover:underline'>
								Something.Host
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title font-bold'>Legal</h3>
						<div className='grid gap-y-1'>
							<a href='/privacy' className='decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline'>
								Privacy Policy
							</a>
							<a href='/terms' className='decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline'>
								Terms of use
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title font-bold'>Socials</h3>
						<div className='grid gap-y-1'>
							<a href='https://github.com/LuyxDevelopment' className='decoration-transparent decoration-2 text-sm hover:decoration-blue-500 transition-all duration-300 hover:underline'>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;