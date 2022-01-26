const reduxApiAction =
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
			// console.log({res});
			if (res?.status === 200 || res?.status === 201) {
				await dispatch({
					type: `${(method)}_${(entity)}_${(storage)}`,
					payload: res?.data,
					method,
					entity,
				});
			}
			await dispatch({
				type: `show_api_response_${method}_${entity}_${(storage)}`,
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
					type: `remove_api_response_${method}_${entity}_${(storage)}`,
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

export default reduxApiAction;