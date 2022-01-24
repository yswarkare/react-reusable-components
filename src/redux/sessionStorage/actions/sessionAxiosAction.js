import reduxAxiosAction from "../../actions/reduxAxiosAction";

const sessionAxiosAction = (method, url, data, entity) => {
  return reduxAxiosAction(method, url, data, entity, "session");
}

export default sessionAxiosAction;