//* function to save redux state to local storage

export const saveToLocalStorage = (state) => {
	try {
		// console.log("local state => ", state);
		const serializedLocalState = JSON.stringify(state);
		localStorage.setItem("redux_local_state", serializedLocalState);
	} catch (error) {
		console.log(error);
	}
};

//* function to load redux state from Local storage

export const loadFromLocalStorage = () => {
	try {
		let serializedLocalState = localStorage.getItem("redux_local_state");
		if (serializedLocalState === null) {
			return undefined;
		}
		return JSON.parse(serializedLocalState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};
