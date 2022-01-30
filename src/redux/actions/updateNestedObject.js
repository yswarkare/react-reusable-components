const updateNestedObject =
	(method, entity, data, storage = 'session') =>
	async (dispatch) => {
		console.log({ method, entity, data, storage });
		let type = `nested_object_${method}_${entity}_${storage}`;
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

export default updateNestedObject;
