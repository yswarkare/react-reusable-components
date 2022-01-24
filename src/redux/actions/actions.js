import axios from 'axios';

export const reduxStateAction =
	(method, entity, data, storage = 'session') =>
	async (dispatch) => {
		console.log({ method, entity, data, storage });
		let type = ``;
		if (Array.isArray(entity) && Array.isArray(data)) {
			if (entity?.length !== data?.length)
				throw console.log('entity length is not equal to data length');
			type = `array_${(method)}_[${entity.toString()}]_local`;
		}
		if (typeof entity === 'string') {
			type = `${(method)}_${(entity)}_${(storage)}`;
		}
		try {
			await dispatch({
				type: type,
				payload: data,
				method,
				entity,
				storage,
			});
			console.log(type);
		} catch (error) {
			console.log(error);
			console.log({ error });
		}
	};

export const reduxApiAction =
	(method, url, data, entity, storage = 'session') =>
	async (dispatch) => {
		try {
			let res = await axios({
				method: method,
				url: url,
				data: data,
			});
			if (res?.status === 200 || res?.status === 201) {
				await dispatch({
					type: `${(method)}_${(entity)}_${(storage)}`,
					payload: res?.data,
					method,
					url,
					entity,
				});
			}
		} catch (error) {
			console.log(error);
			console.log({ error });
		}
	};

export const reduxApiFuncAction =
	(func, method, data, entity, storage = 'session') =>
	async (dispatch) => {
		try {
			await dispatch({
				type: `wating_to_${(method)}_${(entity)}_${(storage)}`,
				payload: true,
				method,
				entity,
			});
			let res = await func({ data: data });
			console.log({res});
			if (res?.status === 200 || res?.status === 201) {
				await dispatch({
					type: `${(method)}_${(entity)}_${(storage)}`,
					payload: res?.data,
					method,
					entity,
				});
			}
			await dispatch({
				type: `show_api_response_message_${storage}`,
				payload: res?.data,
				message: res?.message,
				status: res?.status,
				method,
				entity,
			});
			await dispatch({
				type: `wating_to_${(method)}_${(entity)}_${(storage)}`,
				payload: false,
				method,
				entity,
			});
			await setTimeout(async ()=>{
				await dispatch({
					type: `remove_api_response_message_${storage}`,
					payload: res?.data,
					message: res?.message,
					status: res?.status,
					method,
					entity,
				});
			}, 5000);
		} catch (error) {
			console.log(error);
			console.log({ error });
		}
	};
