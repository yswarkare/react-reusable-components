const reduxStateAction =
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
			if(entity.includes(".") || entity.includes("[")) {
				type = `nested_object_${(method)}_${(entity)}_${(storage)}`;
			} else {
				type = `${(method)}_${(entity)}_${(storage)}`;
			}
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

export default reduxStateAction;