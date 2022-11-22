import { FC } from 'react';

const Footer: FC = () => {

	return (
		<footer className='w-screen bg-gradient-to-b to-black from-gray-900'>
			<div className='max-w-4xl mx-auto pt-16 lg:pt-32 pb-16 lg:flex'>
				<img alt='White cube logo' src={'/assets/images/cube-white.svg'} className='w-24 lg:mx-0 mx-auto' />

				<div className='lg:mt-0 mt-8 lg:gap-y-0 gap-y-8 lg:ml-16 grid lg:grid-cols-4 gap-x-16 lg:text-left text-center'>
					<div>
						<h3 className='text-xl title'>Projects</h3>
						<div className='grid gap-y-1'>
							<a href='https://count.bot' className='decoration-transparent decoration-2 text-sm hover:decoration-orange-500 transition-all duration-300 hover:underline'>
								CountBot
							</a>
							<a href='https://treefarmer.xyz' className='decoration-transparent decoration-2 text-sm hover:decoration-green-500 transition-all duration-300 hover:underline'>
								Tree Farmer
							</a>
							<a href='https://2048bot.com' className='decoration-transparent decoration-2 text-sm hover:decoration-yellow-500 transition-all duration-300 hover:underline'>
								2048 Bot
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title'>Sponsors</h3>
						<div className='grid gap-y-1'>
							<a href='https://something.host/en?fpr=fyrlex' className='decoration-transparent decoration-2 text-sm hover:decoration-indigo-500 transition-all duration-300 hover:underline'>
								Something.Host
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title'>Legal</h3>
						<div className='grid gap-y-1'>
							<a href='/privacy' className='decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline'>
								Privacy policy
							</a>
							<a href='/terms' className='decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline'>
								Terms of use
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-xl title'>Socials</h3>
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