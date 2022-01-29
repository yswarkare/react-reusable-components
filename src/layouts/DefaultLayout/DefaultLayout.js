import { useEffect } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import ShowApiResponse from '../../views/ShowApiResponse/ShowApiResponse';
import Header from '../Header/Header';

const DefaultLayout = () => {
	const match = useMatch('');
	useEffect(() => {
		if (match) console.log({ match });
		else console.log("match doesn't exists");
	}, []);
	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
			<ShowApiResponse></ShowApiResponse>
			<header className={`w-full flex flex-col justify-center content-center items-center`}>
				<Header></Header>
			</header>
			<main className={`w-full flex flex-col justify-center content-center items-center`}>
				<Outlet />
			</main>
		</div>
	);
};

export default DefaultLayout;
