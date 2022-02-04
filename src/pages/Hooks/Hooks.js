import useSessionStorage from '../../hooks/useSessionStorage';

const Hooks = () => {
	const [name, setName] = useSessionStorage('name');
	

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
				<spans>{name}</spans>
			</div>
		</div>
	);
};

export default Hooks;
