import reduxStateAction from "../../actions/reduxStateAction";

const localStateAction = (method, entity, data) => {
	return reduxStateAction(method, entity, data, 'local');
};

export default localStateAction;