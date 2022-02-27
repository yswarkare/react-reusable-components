import { Suspense, useEffect } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import ShowApiResponse from '../../views/ShowApiResponse/ShowApiResponse';
import Header from '../Header/Header';
import Loader from '../../components/Loader';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';

const DefaultLayout = () => {
	const theme = useContextState().theme;
	const updateContextState = useUpdateContextState();
	const match = useMatch('');
	useEffect(() => {
		if (match) console.log({ match });
		else console.log("match doesn't exists");
	}, []);
	return (
		<div className={`w-full h-full flex flex-col justify-start content-center items-center`}
			style={{
				minHeight: '100vh'
			}}
		>
			<ShowApiResponse></ShowApiResponse>
			<header className={`w-full flex flex-col justify-center content-center items-center`}>
				<Header></Header>
			</header>
			<main className={`w-full flex-grow flex flex-col justify-start content-center items-center`}>
				<Suspense fallback={<Loader visible={true} />}>
					<Outlet />
				</Suspense>
			</main>
			<footer className='w-full flex flex-col justify-center content-center items-center'>
				<div className={`w-full flex flex-row justify-end content-center items-center`}>
					<label className='px-4 py-2 gap-4 flex flex-row justify-center content-center items-center'>
						<span>Theme</span>
						<select className='select' onChange={(e)=>updateContextState("theme", e.target.value)} value={theme} >
							<option value={"light"}>{`Light`}</option>
							<option value={"dark"}>{`Dark`}</option>
						</select>
					</label>
				</div>
			</footer>
		</div>
	);
};

export default DefaultLayout;
