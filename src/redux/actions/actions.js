import axios from "axios";

export const reduxStateAction =
	(method, entity, data, storage = "session") => async (dispatch) => {
		let type = ``;
		if (Array.isArray(entity) && Array.isArray(data)) {
			if (entity?.length !== data?.length) throw console.log("entity length is not equal to data length");
			type = `array_${(method)}_[${(entity.toString())}]_local`;
		}
		if (typeof(entity) === "string") {
			type = `${(method)}_${(entity)}_${(storage)}`;
		}
		try {
			await dispatch({
				type,
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
	(method, url, data, entity, storage = "session") =>
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
