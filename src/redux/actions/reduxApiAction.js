const showApiResponse = async (dispatch, response, method, entity, storage) => {
	//? Set response to show in toast messages
	await dispatch({
		type: `show_api_response_${method}_${entity}_${storage}`,
		payload: response?.data,
		message: response?.message,
		status: response?.status,
		method,
		entity,
	});
};

const showSpinner = async (dispatch, value, method, entity, storage) => {
	//? Set a variable to show spinner
	await dispatch({
		type: `wating_to_${method}_${entity}_${storage}`,
		payload: value,
		method,
		entity,
	});
};

const removeVariables = async (dispatch, response, method, entity, storage) => {
	//? Remove variables used for spinner and toast message after their use
	await dispatch({
		type: `remove_api_response_${method}_${entity}_${storage}`,
		payload: response?.data,
		message: response?.message,
		status: response?.status,
		method,
		entity,
	});
};

export const reduxApiAction =
	(func, method, entity, data, storage = 'session') =>
	async (dispatch) => {
		try {
			await showSpinner(dispatch, true, method, entity, storage);
			//? Execute api function and get response
			let response = data ? await func({ ...data }) : await func();
			console.log({ response });
			if (response?.status === 200 || response?.status === 201) {
				await dispatch({
					type: `${method}_${entity}_${storage}`,
					payload: response?.data,
					method,
					entity,
				});
			}
			await showApiResponse(dispatch, response, method, entity, storage);
			await showSpinner(dispatch, false, method, entity, storage);
			await setTimeout(async () => {
				await removeVariables(dispatch, response, method, entity, storage);
			}, 5000);
			return response
		} catch (error) {
			console.log({ error });
			await showApiResponse(dispatch, error?.response, method, entity, storage);
			await showSpinner(dispatch, false, method, entity, storage)
			await removeVariables(dispatch, error?.response, method, entity, storage);
			throw error;
		}
	};

export default reduxApiAction;
