import BaseObject from "./BaseObject";
import Prop from "./Prop";

class ArrayUtilities extends Array {
    constructor(array){
        super(array)
    }

    static findOneByKeyValue (array, key, value) {
        let result = [];
        for (let i = 0; i < array?.length; i++) {
            if (array[i]?.[key] === value) {
                result.push(array[i]);
            }
        }
        if (result.length === 1) {
            return result[0];
        }
        return result;
    }

    static findByID (array, id) {
        for (let i = 0; i < array?.length; i++) {
            if (array[i]?.id === id) {
                return array[i];
            }
        }
    }

    static findByID_Value (array, id) {
        for (let i = 0; i < array?.length; i++) {
            if (array[i]?.id.value === id) {
                return array[i];
            }
        }
    }

    static updateByID (array, element) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === element.id){
                array[i] = element;
                break;
            }
        }
        return array;
    }

    static updateByIndex (array, element, index) {
        if (array[index].id === element.id){
            array[index] = element;
        }
        return array;
    }

    static updateKeyValueByID (array, object) {
        if (object.key === "delete") {
            array.splice(object.index, 1);
        } else if ( object.key === "add-new-at-start") { 
            array.unshift({});
        } else if ( object.key === "add-new-at-end") { 
            array.push({});
        } else {
            for (let i = 0; i < array.length; i++) {
                if (array[i].id.value === object.id.value) {
                    for (const key in array[i]) {
                        if (key === "delete") {
                            array.splice(i, 1);
                            return array;
                        }
                        if (key === object.key) {
                            array[i][key].value = object.value;
                        }
                    }
                }
            }
        }
        return array;
    }

    static updateKeyValueByIndex (array, object) {
        if (object.key === "delete") {
            array.splice(object.index, 1);
        } else if ( object.key === "add-new-at-start") { 
            array.unshift({});
        } else if ( object.key === "add-new-at-end") { 
            array.push({});
        } else {
            for (const key in array[object.index]) {
                if (key === object.key) {
                    array[object.index][object.key].value = object.value;
                }
            }
        }
        return array;
    }

    static deleteByID (array, object) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === object.id) {
                array.splice(i, 1);
            }
        }
    }

    static searchStrInArrOfObjects (array, object) {
        let str = object.string.toLowerCase().trim();
        let filtered = array.filter((obj)=>{
            console.log(obj[object.propName]);
            return obj[object.propName]?.value?.toLowerCase().includes(str);
        });
        return filtered;
    }

    static validateArray (array) {
        let validations = []
        for (let i = 0; i < array.length; i++) {
            let object = array[i];
            for (let key in object) {
                if (key !== "id") {
                    let valid;
                    if (array[i]?.validate) {
                        valid = array[i].validate();
                    } else {
                        valid = this.validateProp(array[i]);
                    }
                    if (valid === false) {
                        validations.push({key, i});
                    }
                    if (valid === true) {
                        if (validations[{key, i}]) {
                            validations.splice(validations.indexOf({key, i}), 1);
                        }
                    }
                }
            }
        }
        if (validations.length > 0) {
            return false;
        } else {
            return true
        }
    }

    static isOnlyElement (array, index) {
        return array[index] === 0 && array.length === 1 ? true : false;
    }

    static hasOnlyOneElement (array) {
        return array.length === 1 ? true : false;
    }

    static isLastElement (array, index) {
        return ((array[index])+1) === array.length ? true : false;
    }

    static validateObject (object) {
        // let object = new BaseObject(object_01);
        let validations = [];
        for (let key in object) {
            if ((object[key].required === true) || (object[key]?.required === false && object[key]?.valFunc)) {
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
            return true
        }
    }

    static validateProp (prop_01) {
        let prop = new Prop(prop_01);
        if (prop.required === true) {
            if (prop.value === null || prop.value === undefined || prop.value === "") {
                prop.valid = false;
                prop.error = true;
                prop.message = `${prop.label} is empty`
                return false;
            } else {
                prop.valid = false;
                prop.error = false;
                prop.message = "";
            }
        }
        if (typeof(prop.value) !== prop.type) {
            prop.valid = false;
            prop.error = true;
            prop.message = `${prop.label} is not a ${prop.type}`
            return false;
        } else {
            prop.valid = false;
            prop.error = false;
            prop.message = "";
        }
        if (prop?.valFunc) {
            let validation = prop.valFunc(prop.value);
            console.log(validation)
            if (prop.required === true) {
                prop.valid = validation?.valid ?? prop.valid;
                prop.error = validation?.error ?? prop.error;
                prop.message = validation?.message ?? prop.message;
                return validation.valid;
            } else if (prop.required === false) {
                if (prop.value === null || prop.value === undefined || prop.value === "") {
                    prop.valid = true;
                    prop.error = false;
                    prop.message = ""
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
            prop.message = ""
            return true
        }
    }

    static removeEmptyElements = (array) => {
        let array_01 = []
        for (let i = 0; i < array.length; i++) {
            let array_02 = []
            let array_03 = []
            let object = array[i];
            for (let key in object) {
                if (key !== "id") {
                    if (typeof(object[key]) === "string" || typeof(object[key]) ===  "number") {
                        array_02.push(key);
                        if(object[key] === ""){
                            array_03.push(key);
                        }
                    }
                }
            }
            // console.log(array_02)
            // console.log(array_03)
            if (array_03.length === -1) {
            }
            if (array_02.length !== array_03.length) {
                array_01.push(array[i]);
                // console.log(array_01)
            }
        }
        return array_01;
    }
}

export default ArrayUtilities;