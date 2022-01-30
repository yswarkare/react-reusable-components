const removeApiResponse =
	( entity, storage = 'session' ) =>
	async (dispatch) => {
		try {
			await dispatch({
				type: `hide_api_response_${entity}_${storage}`,
				entity,
			});
		} catch (error) {
			console.log({ error });
		}
	};

export default removeApiResponse;
