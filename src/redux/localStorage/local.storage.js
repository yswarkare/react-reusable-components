//* function to save redux state to local storage

export const saveToLocalStorage = (reduxStateTitle, state) => {
	try {
		// console.log("local state => ", state);
		const serializedLocalState = JSON.stringify(state);
		localStorage.setItem(reduxStateTitle, serializedLocalState);
	} catch (error) {
		console.log(error);
	}
};

//* function to load redux state from Local storage

export const loadFromLocalStorage = (reduxStateTitle) => {
	try {
		let serializedLocalState = localStorage.getItem(reduxStateTitle);
		if (serializedLocalState === null) {
			return undefined;
		}
		return JSON.parse(serializedLocalState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};
