/* eslint-disable linebreak-style */
import { useState } from 'react';

import Logo from './assets/images/logo.svg';
import CountBotLogo from './assets/images/countbot.svg';
import SomethingHostLogo from './assets/images/somethinghost.svg';
import TreeFarmerLogo from './assets/images/tree-farmer.svg';
import Cube from './assets/images/cube.svg';
import CubeWhite from './assets/images/cube-white.svg';

import { AlertInfo, team } from './assets/util';

function App(): JSX.Element {
	const [Played, setPlayed] = useState(false);


	const playSoundStart = (): void => {
		if (Played) return;

		const audio = document.getElementById('startAudio') as HTMLAudioElement;
		audio.play();
		setPlayed(true);
	};

	return (<>
		<div className="absolute bottom-0 w-screen rounded-xl overflow-auto p-8">
			<div className="flex justify-center">
				<a
					onClick={playSoundStart}
					href="#content"
					className="animate-bounce bg-gray-900 p-2 w-10 h-10 ring-1 ring-gray-200/30 shadow-lg shadow-white/10 rounded-full flex items-center justify-center"
				>
					<svg className="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
					</svg>
				</a>
			</div>
		</div>

		<audio src="/audio/start.ogg" hidden={true} autoPlay={false} id="startAudio" />

		<div className="bg-black h-screen w-screen grid items-center">
			<div>
				<img alt="Luyx Development Logo" src={Logo} className="mx-auto h-64 lg:block hidden" />
				<img alt="Luyx Development Small" src={Cube} className="mx-auto h-64 block lg:hidden" />

				{
					AlertInfo.show && <div className="max-w-4xl mx-auto lg:mt-0 mt-8">
						<div
							className={'rounded-xl border-2 border-transparent relative mx-4' + (AlertInfo.url && ' cursor-pointer')}
							onClick={(): void => {
								if (AlertInfo.url) window.location.href = AlertInfo.url;
							}}
						>
							<div className={'absolute w-full h-full rounded-xl border-2 border-gray-500 border-dashed transition-all ' + (AlertInfo.url ? 'hover:animate-stop animate-pulse-fast' : 'animate-pulse-fast')}></div>
							<div className="p-3 text-center">
								<span className="p-1 text-sm bg-green-600 rounded-lg mr-3 uppercase">
									{AlertInfo.smallText}
								</span>
								<span className="text-base">
									{AlertInfo.text}
								</span>
							</div>
						</div>
					</div>
				}
			</div>
		</div>

		<div id="content" className="bg-gradient-to-b from-black to-gray-900 p-8">
			<h1 className="text-center text-3xl title">Our projects</h1>
			<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
				These are the projects that we're currently working on.
			</h2>
			<div className="max-w-4xl mx-auto mt-8 grid lg:grid-cols-2 gap-8">
				<a
					href="https://count.bot"
					className="p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-orange-500 hover:shadow-lg hover:shadow-orange-500/40 bg-black"
				>
					<img alt="CountBot logo" src={CountBotLogo} className="h-16 mx-auto" />
				</a>
				<a
					href="https://treefarmer.xyz"
					style={{ background: '#236f21' }}
					className="p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-green-500 hover:shadow-lg hover:shadow-green-500/40 bg-black"
				>
					<img alt="Tree farmer logo" src={TreeFarmerLogo} className="h-16 mx-auto" />
				</a>
			</div>

			<h1 className="text-center text-3xl title mt-8">Our team</h1>
			<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
				These are the people who make Luyx Development possible.
			</h2>
			<div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 mt-8">
				{
					team.map(t => {
						return (
							<div className="p-4 bg-gray-900 shadow-lg ring-1 ring-gray-200/30 rounded-md flex">
								<img alt={t.name} src={t.image} className="rounded-md w-24 mr-4 bg-gray-800" />
								<div className="w-full">
									<p className="text-xl text-ellipsis title">{t.name}</p>
									<p className="text-sm text-ellipsis">{t.role}</p>
								</div>
							</div>
						);
					})
				}
			</div>

			<h1 className="text-center text-3xl title mt-8">Our sponsor host</h1>
			<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
				We use Something.Host to host all our projects.
			</h2>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-center mt-2 mx-auto">
					Something.Host provides you blazing fast hosting, with an easy to use platform to manage all your services.
				</h2>
				<div className="grid mt-8">
					<a
						href="https://something.host/en?fpr=fyrlex"
						style={{ background: '#6a54dd' }}
						className="flex p-4 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 bg-black"
					>
						<div className="mx-auto flex">
							<img alt="Something.host logo" src={SomethingHostLogo} className="h-8 my-auto" />
							<p className="ml-4 my-auto">Check out Something.Host</p>
						</div>
					</a>
				</div>
			</div>
		</div>

		<footer className="w-screen bg-gradient-to-b to-black from-gray-900">
			<div className="max-w-4xl mx-auto pt-16 lg:pt-32 pb-16 lg:flex">
				<img alt="White cube logo" src={CubeWhite} className="w-24 lg:mx-0 mx-auto" />

				<div className="lg:mt-0 mt-8 lg:gap-y-0 gap-y-8 lg:ml-16 grid lg:grid-cols-4 gap-x-16 lg:text-left text-center">
					<div>
						<h3 className="text-xl title">Projects</h3>
						<div className="grid gap-y-1">
							<a
								href="https://count.bot"
								className="decoration-transparent decoration-2 text-sm hover:decoration-orange-500 transition-all duration-300 hover:underline"
							>
								CountBot
							</a>
							<a
								href="https://treefarmer.xyz"
								className="decoration-transparent decoration-2 text-sm hover:decoration-green-500 transition-all duration-300 hover:underline"
							>
								Tree Farmer
							</a>
							<a
								href='https://2048bot.com'
								className="decoration-transparent decoration-2 text-sm hover:decoration-yellow-500 transition-all duration-300 hover:underline"
							>
								2048 Bot
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl title">Sponsors</h3>
						<div className="grid gap-y-1">
							<a
								href="https://something.host/en?fpr=fyrlex"
								className="decoration-transparent decoration-2 text-sm hover:decoration-indigo-500 transition-all duration-300 hover:underline"
							>
								Something.Host
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl title">Legal</h3>
						<div className="grid gap-y-1">
							<a
								href="/privacy"
								className="decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline"
							>
								Privacy policy
							</a>
							<a
								href="/terms"
								className="decoration-transparent decoration-2 text-sm hover:decoration-red-500 transition-all duration-300 hover:underline"
							>
								Terms of use
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl title">Socials</h3>
						<div className="grid gap-y-1">
							<a
								href="https://discord.com/invite/jRUWbXhCYN"
								className="decoration-transparent decoration-2 text-sm hover:decoration-blue-500 transition-all duration-300 hover:underline"
							>
								Discord
							</a>
							<a
								href='https://github.com/LuyxDevelopment'
								className='decoration-transparent decoration-2 text-sm hover:decoration-blue-500 transition-all duration-300 hover:underline'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</>);
}

export default App;