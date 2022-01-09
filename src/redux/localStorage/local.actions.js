import { reduxApiAction, reduxStateAction } from "../actions/actions";

export const localStateAction = (method, entity, data) => {
    return reduxStateAction(method, entity, data, "local");
}

export const localApiAction = (method, url, data, entity) => {
    return reduxApiAction(method, url, data, entity, "session");
}