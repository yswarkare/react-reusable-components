import reduxStateAction from "../../actions/reduxStateAction";

const sessionStateAction = (method, entity, data) => {
  return reduxStateAction(method, entity, data, "session");
}

export default sessionStateAction;