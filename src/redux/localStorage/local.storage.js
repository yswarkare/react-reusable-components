//* function to save redux state to local storage

export const saveToLocalStorage = (stateName, state) => {
	try {
		// console.log("local state => ", state);
		const serializedLocalState = JSON.stringify(state);
		localStorage.setItem(stateName, serializedLocalState);
	} catch (error) {
		console.log(error);
	}
};

//* function to load redux state from Local storage

export const loadFromLocalStorage = (stateName) => {
	try {
		let serializedLocalState = localStorage.getItem(stateName);
		if (serializedLocalState === null) {
			return undefined;
		}
		return JSON.parse(serializedLocalState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};
