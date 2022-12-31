import { FC } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Dropdown, { DropdownItem } from './Dropdown';
import { NavBarPage } from '../src/typings';

const teamDropdown: DropdownItem[] = [
	{
		text: 'Admin',
		href: '/admin',
	},
	{
		text: 'Login',
		href: '/admin/login',
	},
];

const pages: NavBarPage[] = [
	{
		name: 'Home',
		url: '/',
	},
	// {
	// 	name: 'Projects',
	// 	url: '/projects',
	// },
	{
		name: 'GitHub',
		url: 'https://github.com/LuyxDevelopment',
	},
];

const mobilePages: NavBarPage[] = [
	{
		name: 'Home',
		url: '/',
	},
];

const Navbar: FC = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<nav className={'bg-egg-sour text-black shadow-lg p-1 flex flex-row justify-between sm:justify-evenly items-center'}>
				<div className="cursor-pointer">
					<Image
						src="/assets/images/luyx.svg"
						width='70'
						height='70'
						alt="Logo"
						onClick={(): string => (window.location.href = '/')}
					/>
				</div>
				<div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-evenly font-extrabold">
					{pages.map((page, i) => {
						return (
							<h1
								className="cursor-pointer hover:bg-basket-ball-orange text-black font-bold py-2 px-3 ml-1 mr-1 rounded-2xl transition-all duration-300 ease-in-out"
								onClick={(): string => (window.location.href = page.url)}
								key={i}
							>
								{page.name}
							</h1>
						);
					})}
					{/* <Dropdown
						direction="bottom"
						items={shopping}
						tw="z-10"
					>
						<h1 className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 ml-1 mr-1 rounded-2xl transition-all duration-300 ease-in-out">
							Team
						</h1>
					</Dropdown> */}
				</div>
				<span
					className="block float-right sm:hidden cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out"
					onClick={(): void => setShowMenu(!showMenu)}
				>
					<Image
						src="/assets/icons/hamburger.svg"
						width={35}
						height={35}
						alt="Navbar"
					/>
				</span>
			</nav>
			{showMenu && (
				<div className="animate-translate_top flex flex-col items-center justify-center sm:hidden bg-gray-200 shadow-xl p-3 font-extrabold mt-5">
					{mobilePages.map(({ name, url }, i) => {
						return (
							<h1
								className="cursor-pointer hover:underline transition-all duration-300 ease-in-out"
								onClick={(): string => (window.location.href = url)}
								key={i}
							>
								{name}
							</h1>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Navbar;
