//* function to save redux state to session storage */

export const saveToSessionStorage = (state) => {
	try {
		// console.log("session state => ", state);
		const serializedSessionState = JSON.stringify(state);
		sessionStorage.setItem("redux_session_state", serializedSessionState);
	} catch (error) {
		console.log(error);
	}
};

//* function to load redux state from session storage */

export const loadFromSessionStorage = () => {
	try {
		let serializedSessionState = sessionStorage.getItem("redux_session_state");
		if (serializedSessionState === null) {
			return undefined;
		}
		return JSON.parse(serializedSessionState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};