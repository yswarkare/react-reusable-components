import sessionState from './session.state';

const sessionReducer = (state = sessionState, action) => {
	const { type = '', method = '', entity = '', payload, message = '', status = '' } = action;

	switch (type) {
		case `${method}_${entity}_session`:
			console.log(action);
			if (state[entity]) return { ...state, [entity]: payload };
			return state;

		case `array_${method}_[${entity.toString()}]_session`: {
			console.log(action);
			let newState = { ...state };
			entity.forEach((element, index) => {
				if (state[entity]) newState = { ...newState, [element]: payload[index] };
			});
			return newState;
		}

		case `wating_to_${method}_${entity}_session`: {
			console.log(action);
			if (state[entity]) return { ...state, [`wating_to_${method}_${entity}`]: payload };
			return state;
		}

		case `show_api_response_${method}_${entity}_session`: {
			console.log(action);
			let newMessage = message;
			if (!message && (status === 200 || status === 201)) {
				newMessage = `Successful to ${method} ${entity}`;
			} else {
				newMessage = `Failed to ${method} ${entity}`;
			}
			return {
				...state,
				[`show_api_response_${method}_${entity}`]: true,
				[`api_response_${method}_${entity}`]: {
					message: newMessage,
					status: status,
				},
			};
		}

		case `remove_api_response_${method}_${entity}_session`: {
			let newState = {...state};
			delete newState[`wating_to_${method}_${entity}`];
			delete newState[`show_api_response_${method}_${entity}`];
			delete newState[`api_response_${method}_${entity}`];
			console.log({newState});
			console.log(`remove_api_response_${method}_${entity}_session`);
			return newState;

		}

		default:
			return state;
	}
};

export default sessionReducer;
