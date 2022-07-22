import useSessionStorage from '../../hooks/useSessionStorage';
import useSessionReducer from '../../hooks/useSessionReducer';

const init = (value) => {
	return {
		count: value,
	};
};

const initialState = {
	count: 0,
};

const sessionReducer = (state, { type, payload, method }) => {
	switch (type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'reset':
			return init(payload);
		default:
			throw new Error();
	}
};

const Hooks = () => {
	const [name, setName] = useSessionStorage('name');
	const [state, dispatch] = useSessionReducer(sessionReducer, initialState, 'init');

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
				<>
					Count: {state.count}
					<button className="btn-prinary" onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
					<button className="btn-prinary" onClick={() => dispatch({ type: 'decrement' })}>-</button>
					<button className="btn-prinary" onClick={() => dispatch({ type: 'increment' })}>+</button>
				</>
			</div>
		</div>
	);
};

export default Hooks;
