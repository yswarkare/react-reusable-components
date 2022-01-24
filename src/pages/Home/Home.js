import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import sessionApiAction from '../../redux/sessionStorage/actions/sessionApiAction';
import getUsers from '../../services/getUsers';

const Home = () => {
	const users = useSelector((state) => state.session.users);
	const wating_to_get_users = useSelector((state) => state.session?.wating_to_get_users);
	const dispatch = useDispatch();

	useEffect(() => {
		const getUsersList = async () => {
			await dispatch(sessionApiAction(getUsers, 'get', null, 'users'));
		};
		getUsersList();
	}, []);

	return (
		<div id={`home-page`} className={`flex flex-col justify-center content-center items-center`}>
			<span className='text-12 text-white'>Home Page</span>
			<div className={`w-full flex flex-col justify-center content-center items-center`}>
				{!wating_to_get_users && users?.map((user, index) => {
					return (
						<div
							className={`w-full flex flex-col justify-center content-center items-center`}
							key={index}
						>
							<span>{user?.name}</span>
						</div>
					);
				})}
				<Loader visible={wating_to_get_users} />
			</div>
		</div>
	);
};

export default Home;
