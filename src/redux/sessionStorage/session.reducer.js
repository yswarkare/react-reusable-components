import sessionState from "./session.state";

const sessionReducer = (state = sessionState, action) => {
    
    const { type = "", method = "", entity = "", payload } = action;

    switch (type) {

        case `${(method)}_${(entity)}_session`:
            console.log(action);
            if (state[entity]) return {...state, [entity]: payload };
            return state;

        case `array_${(method)}_[${(entity.toString())}]_session`: {
            console.log(action);
            let newState = {...state};
            entity.forEach((element, index) => {
                if (state[entity]) newState = {...newState, [element]: payload[index] };
            });
            return newState;
        }

        default:
        return state;
    }
}

export default sessionReducer;