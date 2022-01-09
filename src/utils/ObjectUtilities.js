import Prop from "./Prop";

class ObjectUtilities {
	constructor(object) {}

	static setDate(date) {
		let newDate = new Date(date);
		return newDate;
	}

	static setNewObject(object, newObject) {
		for (const key in object) {
			object[key].value = newObject[key] ? newObject[key] : object[key].value;
		}
		return object;
	}

	static newObject(object, newObject) {
		for (const key in object) {
			object[key] = newObject[key] ? newObject[key] : object[key];
		}
		return object;
	}

	static updateObject(object, newObject) {
		for (const key in object) {
			object[key] = newObject[key] ? newObject[key] : object[key];
		}
		return object;
	}

	static updateKeyValue(baseObject, object) {
		//* { key: "name", value: "new name" }
		for (const key in baseObject) {
			if (key === object.key) {
				baseObject[key].value = object.value ? object.value : baseObject[key].value;
			}
		}
		return baseObject;
	}

	static validateProp(prop_01) {
		let prop = new Prop(prop_01);
		if (prop.required === true) {
			if (prop.value === null || prop.value === undefined || prop.value === "") {
				prop.valid = false;
				prop.error = true;
				prop.message = `${prop.label} is empty`;
				return false;
			} else {
				prop.valid = false;
				prop.error = false;
				prop.message = "";
			}
		}
		if (typeof prop.value !== prop.type) {
			prop.valid = false;
			prop.error = true;
			prop.message = `${prop.label} is not a ${prop.type}`;
			return false;
		} else {
			prop.valid = false;
			prop.error = false;
			prop.message = "";
		}
		if (prop?.valFunc) {
			let validation = prop.valFunc(prop.value);
			console.log(validation);
			if (prop.required === true) {
				prop.valid = validation?.valid ?? prop.valid;
				prop.error = validation?.error ?? prop.error;
				prop.message = validation?.message ?? prop.message;
				return validation.valid;
			} else if (prop.required === false) {
				if (prop.value === null || prop.value === undefined || prop.value === "") {
					prop.valid = true;
					prop.error = false;
					prop.message = "";
					return true;
				} else if (prop.value) {
					prop.valid = validation?.valid ?? prop.valid;
					prop.error = validation?.error ?? prop.error;
					prop.message = validation?.message ?? prop.message;
					return validation.valid;
				}
			}
		} else {
			prop.valid = true;
			prop.error = false;
			prop.message = "";
			return true;
		}
	}

	static validateObject(object) {
		let validations = [];
		for (let key in object) {
			if (object[key].required === true || (object[key]?.required === false && object[key]?.valFunc)) {
				let valid;
				if (object[key].validate()) {
					valid = object[key].validate();
				} else {
					valid = this.validateProp(object[key]);
				}
				if (valid === false) {
					validations.push(key);
				} else if (valid === true) {
					if (validations[key]) {
						validations.splice(validations.indexOf(key), 1);
					}
				}
			}
		}
		if (validations.length > 0) {
			return false;
		} else {
			return true;
		}
	}
}

export default ObjectUtilities;
