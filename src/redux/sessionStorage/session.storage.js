//* function to save redux state to session storage */

export const saveToSessionStorage = (reduxStateTitle, state) => {
	try {
		// console.log("session state => ", state);
		const serializedSessionState = JSON.stringify(state);
		sessionStorage.setItem(reduxStateTitle, serializedSessionState);
	} catch (error) {
		console.log(error);
	}
};

//* function to load redux state from session storage */

export const loadFromSessionStorage = (reduxStateTitle) => {
	try {
		let serializedSessionState = sessionStorage.getItem(reduxStateTitle);
		if (serializedSessionState === null) {
			return undefined;
		}
		return JSON.parse(serializedSessionState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};