import sessionState from './session.state';

const sessionReducer = (state = sessionState, action) => {
	const { type = '', method = '', entity = '', payload, message = '', status = '' } = action;
	
	switch (type) {
		case `${method}_${entity}_session`:
			console.log(action.type);
			if (state[entity]) return { ...state, [entity]: payload };
			return state;

		case `array_${method}_[${entity.toString()}]_session`: {
			console.log(action.type);
			let newState = { ...state };
			entity.forEach((element, index) => {
				if (state[entity]) newState = { ...newState, [element]: payload[index] };
			});
			return newState;
		}

		case `wating_to_${method}_${entity}_session`: {
			console.log(action.type);
			if (state[entity])
				return { ...state, wating_to: { ...state.wating_to, [`${method}_${entity}`]: payload } };
			return state;
		}

		case `show_api_response_${method}_${entity}_session`: {
			console.log(action.type);
			let newMessage = message;
			if (!message && (status === 200 || status === 201)) {
				newMessage = `Successful to ${method} ${entity}`;
			} else {
				newMessage = `Failed to ${method} ${entity}`;
			}
			return {
				...state,
				show_api_response: { ...state.show_api_response, [`${method}_${entity}`]: true },
				api_response: {
					...state.api_response,
					[`${method}_${entity}`]: {
						message: newMessage,
						status: status,
					},
				},
			};
		}

		case `remove_api_response_${method}_${entity}_session`: {
			console.log(action.type);
			let wating_to = { ...state.wating_to };
			let show_api_response = { ...state.show_api_response };
			let api_response = { ...state.api_response };
			delete wating_to[`${method}_${entity}`];
			delete show_api_response[`${method}_${entity}`];
			delete api_response[`${method}_${entity}`];
			return {
				...state,
				wating_to,
				show_api_response,
				api_response,
			};
		}

		case `hide_api_response_${entity}_session`: {
			console.log(action.type);
			let wating_to = { ...state.wating_to };
			let show_api_response = { ...state.show_api_response };
			let api_response = { ...state.api_response };
			delete wating_to[`${entity}`];
			delete show_api_response[`${entity}`];
			delete api_response[`${entity}`];
			return {
				...state,
				wating_to,
				show_api_response,
				api_response,
			};
		}

		case `nested_object_${method}_${entity}_session` : {
			let newState = state;
			let props = entity.split('.');
			console.log({props});
			let newProps = [];
			props.forEach((item)=>{
				if(item.includes("[")) {
					let obj = item.split('[')
					obj[1] = obj[1].split(']')[0]
					newProps.push(obj[0]);
					newProps.push(obj[1]);
				} else {
					newProps.push(item);;
				};
			})
			console.log({newProps});
			
			return newState;
		}

		default:
			return state;
	}
};

export default sessionReducer;
