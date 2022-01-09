import { reduxApiAction, reduxStateAction } from "../actions/actions";

export const sessionStateAction = (method, entity, data) => {
    return reduxStateAction(method, entity, data, "session");
}

export const sessionApiAction = (method, url, data, entity) => {
    return reduxApiAction(method, url, data, entity, "session");
}