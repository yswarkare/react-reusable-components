// import { useEffect } from 'react';
// import { useContextState } from '../../hooks/ContextState';
import useSessionStorage from '../../hooks/useSessionStorage';

const Hooks = () => {
	const [name, setName] = useSessionStorage('name');
	// const users = useContextState().users;

	// useEffect(() => {
	// 	console.log(users);
	// }, []);

	return (
		<div className={`w-full gap-2 flex flex-col justify-center content-center items-center`}>
			<span className={`text-15 text-white`}>React Hooks</span>
			<div className={`w-full flex flex-col justify-center content-center items-center`}>
				<input
					type={`text`}
					className={`w-1/3 px-2 py-1 bg-gray-900 active:bg-gray-800 focus:bg-gray-700`}
					name={`name`}
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				></input>
			</div>
			<div className={`w-full flex flex-col justify-center content-center items-center`}>
				<span>{name}</span>
			</div>
			<div className={`py-8 w-full flex flex-col justify-center content-center items-center`}>
				
			</div>
		</div>
	);
};

export default Hooks;
