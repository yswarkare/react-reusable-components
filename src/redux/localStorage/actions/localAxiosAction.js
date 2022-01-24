import reduxAxiosAction from "../../actions/reduxAxiosAction";

const localAxiosAction = (method, url, data, entity) => {
	return reduxAxiosAction(method, url, data, entity, 'session');
};

export default localAxiosAction;