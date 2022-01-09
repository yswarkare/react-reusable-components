import localState from "./local.state";

const localReducer = (state = localState, action) => {
    
    const { type = "", method = "", entity = "", payload } = action;
    console.log(action);

    switch (type) {

        case `${(method)}_${(entity)}_local`:
        console.log(action);
        if (state[entity]) return {...state, [entity]: payload };
        return state;

        case `array_${(method)}_[${(entity.toString())}]_local`: {
            console.log(action);
            let newState = {...state};
            entity.forEach((element, index) => {
                if (state[element]) newState = {...newState, [element]: payload[index] };
            });
            return newState;
        }

        default:
        return state;
    }
}

export default localReducer;