import reduxApiAction from '../../actions/reduxApiAction';

const sessionApiAction = (func, method, data, entity) => {
	return reduxApiAction(func, method, data, entity, 'session');
};

export default sessionApiAction;
