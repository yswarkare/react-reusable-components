import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
//? bring reducers
import localReducer from "./localStorage/local.reducer";
import sessionReducer from "./sessionStorage/session.reducer";
//? functions to store and get state
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage/local.storage";
import { loadFromSessionStorage, saveToSessionStorage } from "./sessionStorage/session.storage";

//* variable to hold loaded session state */

const persistedSessionState = loadFromSessionStorage();

//* variable to hold loaded local state

const persistedLocalState = loadFromLocalStorage();

const initialState = {
    ...persistedSessionState,
    local: persistedLocalState,
}

const rootReducer = combineReducers({
    local: localReducer,
    session: sessionReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const storeState = (store) => {
    const globalState = store.getState();
    //* saveToLocalStorage(globalState.local); */
    saveToSessionStorage({...globalState, local: null });
    saveToLocalStorage({ ...globalState.local });
}

storeState(store);

//* save redux state to session storage and local storage */
store.subscribe(()=>{
    storeState(store);
});

export default store;