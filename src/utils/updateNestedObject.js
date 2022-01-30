const updateProperty = (obj = {}, prop = '', value = '') => {
	return {
		...obj,
		[prop]: value,
	};
};

const findObjectInArray = (array, id, prop, value) => {
	let obj = array.find((item) => item[id] === value);
	return obj[prop];
};

const getPropsArray = (entity) => {
	let props = entity.split('.');
	let newProps = [];
	props.forEach((item) => {
		if (item.includes('[')) {
			let obj = item.split('[');
			obj[1] = obj[1].split(']')[0];
			let identifier = obj[1].split('=');
			newProps.push(obj[0]);
			newProps.push(identifier[0]);
			newProps.push(identifier[1]);
		} else {
			newProps.push(item);
		}
	});
	return newProps;
};

const getProps = (entity) => {
	let props = entity.split('.');
	return props;
};

const getObjFromArray = (prevObj, item) => {
	let newProps = [];
	if (item.includes('[') && item.includes(']') && item.includes('=')) {
		let obj = item.split('[');
		obj[1] = obj[1].split(']')[0];
		let identifier = obj[1].split('=');
		newProps.push(obj[0]);
		newProps.push(identifier[0]);
		newProps.push(identifier[1]);
	} else {
		console.log(`Syntax to find object in array is wrong`);
	}

	let nextObj = {};
	if (Array.isArray(prevObj.newProps[0])) {
		nextObj = prevObj.newProps[0].find((item) => item[newProps[1]] === JSON.parse(newProps[2]));
	} else {
		console.log(`${newProps[0]} is not array`);
	}
	return nextObj;
};

const getNextObj = (prevObj, next) => {
	let nextObj = prevObj[next];
	if (nextObj) return nextObj;
};

const modifyObject = (method, obj) => {

}

const findObject = () => {
  
}

const updateNestedObjecct = (state, entity) => {
	let propsArray = getProps(entity);
  let newState = state;
 	console.log({ propsArray });
	propsArray.forEach((element, index) => {
		let nextObj = state[element];
    if (propsArray.length === index+1) {
      modifyObject()
    } else {
      let nextObj = findObject();
    }
	});

  propsArray.reduce((prevValue, currentValue, index, array) => {
    if (propsArray.length === index+1) {
      modifyObject()
    } else {
      findObject()
    }
  })
};

export default updateNestedObjecct;
