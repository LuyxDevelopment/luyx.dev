import { APIUser } from 'luyx-management-api-types/v1/index.js';
import getFlagEmoji from '../data/CountryToEmoji';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

interface Props {
	user: APIUser;
}

const DynamicLink: FC<{ href: string | null, children: ReactElement }> = ({ href, children }) => {
	if (href) {
		return <Link href={href}>{children}</Link>;
	}
	return children;
};

const UserCard: FC<Props> = ({ user }) => {
	return (
		<div className='hover:-translate-y-2 duration-300'>
			<DynamicLink
				href={user.contact.gitHub ? `https://github.com/${user.contact.gitHub}` : null}
			>
				<div className='p-4 bg-egg-sour shadow-lg ring-1 ring-gray-200/30 rounded-md flex cursor-pointer'>
					<Image
						alt={user.alias}
						src={user.avatarURL}
						className='rounded-md w-24 mr-4'
						height={256}
						width={256}
					/>
					<div className='w-full'>
						<p className='text-2xl text-ellipsis title font-bold'>{user.alias}</p>
						<p className='text-s text-ellipsis font-bold'>{user.position}</p>
						<p>{getFlagEmoji(user.info.countryCode)}</p>
					</div>
				</div>
			</DynamicLink>
		</div>
	);
};

export default UserCard;