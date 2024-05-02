import { forwardRef } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { TfiUpload } from 'react-icons/tfi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';

import Button from '../common/button';
import SearchBar from '../common/searchbar';
import Logo from '../common/logo';
import Notifications from '../common/notifications';
import { useHeader } from './hooks';

const Header = forwardRef((props, ref) => {
	const { widgetRef } = useHeader();

	return (
		<header
			ref={ref}
			className='flex z-20 px-4 py-2 bg-blue w-full h-fit justify-between font-semibold shadow-xl sticky top-0'>
			<div className='flex w-fit items-center justify-center p-2'>
				<Button
					onClick={props.hamburgerBehaviour}
					icon={<FiAlignJustify size={30} />}
					rounded={true}
					inline={false}
				/>
				<Logo />
			</div>
			<SearchBar />
			<div className='flex items-center justify-between w-80'>
				<Button
					onClick={() => {
						widgetRef.current.open();
					}}
					icon={<TfiUpload size={20} />}
					rounded={true}
					inline={false}
				/>
				<Button
					onClick={() =>
						props.setNotificationStatus((status) => !status)
					}
					icon={<IoIosNotificationsOutline size={30} />}
					rounded={true}
					inline={false}
				/>
				<Button
					navLink='/profile'
					icon={<BsPersonCircle size={35} />}
					rounded={true}
					inline={false}
				/>
			</div>
			{props.notificationStatus && <Notifications />}
		</header>
	);
});

export default Header;
