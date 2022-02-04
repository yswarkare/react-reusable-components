import { useEffect, useState } from 'react';

const getStoredValue = (key, initialValue = null) => {
	let storedValue = JSON.parse(localStorage.getItem(key));
	if (storedValue) return storedValue;
	if (initialValue instanceof Function) return initialValue();
	return initialValue;
};

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		return getStoredValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;
