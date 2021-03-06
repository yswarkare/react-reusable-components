import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
//? bring reducers
import localReducer from "./localStorage/local.reducer";
import sessionReducer from "./sessionStorage/session.reducer";
//? functions to store and get state
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage/local.storage";
import { loadFromSessionStorage, saveToSessionStorage } from "./sessionStorage/session.storage";

//* name of redux state in storage
const reduxStateTitle = 'redux_session_state';

//* variable to hold loaded session state */

const persistedSessionState = loadFromSessionStorage(reduxStateTitle);

//* variable to hold loaded local state

const persistedLocalState = loadFromLocalStorage(reduxStateTitle);

const initialState = {
    ...persistedSessionState,
    local: persistedLocalState,
}

const rootReducer = combineReducers({
    local: localReducer,
    session: sessionReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const storeState = (reduxStateTitle, store) => {
    const globalState = store.getState();
    //* saveToLocalStorage(globalState.local); */
    saveToSessionStorage(reduxStateTitle, {...globalState, local: null });
    saveToLocalStorage(reduxStateTitle, { ...globalState.local });
}

storeState(reduxStateTitle, store);

//* save redux state to session storage and local storage */
store.subscribe(()=>{
    storeState(reduxStateTitle, store);
});

export default store;