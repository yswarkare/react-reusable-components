import updateNestedObject from "../../actions/updateNestedObject";

const updateNestedSessionObject = (method, entity, data) => {
  return updateNestedObject(method, entity, data, "session");
}

export default updateNestedSessionObject;