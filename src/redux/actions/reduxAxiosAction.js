import axios from "axios";

const reduxAxiosAction =
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

  export default reduxAxiosAction;