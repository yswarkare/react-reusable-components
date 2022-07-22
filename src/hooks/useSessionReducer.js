import { useEffect, useReducer } from 'react';

const getStoredState = (key, initialState = null) => {
	let storedState = JSON.parse(sessionStorage.getItem(key));
	if (storedState) return storedState;
	if (initialState instanceof Function) return initialState();
	return initialState;
};

const useSessionReducer = (reducer, initialState, key) => {
	const [state, dispatch] = useReducer(reducer, initialState, () => {
		return getStoredState(key, initialState);
	});

  // useEffect(()=>{
  //   getStoredState(key, initialState);
  // },[])

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state));
    console.log(state)
	}, [state, key]);

	return [state, dispatch];
};

export default useSessionReducer;
