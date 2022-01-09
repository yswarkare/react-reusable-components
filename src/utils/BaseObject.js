import Prop from "./Prop";

class BaseObject {
    constructor(object){
        
    }

    setInitial (object) {
        for (const key in this) {
            if (object[key] || object[key] === ""){
                let newProp = new Prop({ name: key, value: object[key] });
                this[key] = newProp;
            }
        }
        return this;
    }

    getFinal () {
        for (const key in this) {
            this[key] = this[key].value;
        }
        return this;
    }

    setDate (date) {
        let newDate = new Date(date);
        return newDate;
    }

    setNewObject (object) {
        for(const key in object){
            if (this.hasOwnProperty(key)) {
                this[key].value = object[key] ?? this[key].value;
            }
        }
    }

    setNewObjectPropsModel (object) {
        for(const key in object){
            if (this.hasOwnProperty(key)) {
                if ((this[key] instanceof Prop) === false) {
                    this[key] = new Prop({ name: key, value: object[key]});
                } else {
                    console.log(this[key])
                    this[key] = object[key] ?? this[key];
                }
            }
        }
        return this;
    }

    newObject (object) {
        for(const key in object){
            if (this.hasOwnProperty(key)) {
                this[key] = object[key] ?? this[key];
            }
        }
        return this;
    }

    updateObject (object) {
        for(const key in this){
            if (object.hasOwnProperty(key)) {
                this[key] = object[key] ?? this[key];
            }
        }
        return this;
    }

    updateKeyValue (object) {  //* { key: "name", value: "new name" }
        for (const key in this) {
            if( key === object.key ){
                this[object.key].value = object.value ?? this[key].value;
            }
        }
        return this;
    }

    validate () {
        let validations = [];
        for (let key in this) {
            if ((this[key].required === true) || (this[key]?.required === false && this[key]?.valFunc)) {
                let valid;
                if (this[key].validate()) {
                    valid = this[key].validate();
                } else {
                    valid = this?.validateProp?.(this[key]);
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

    validateProp_01 (key) {
        if (this[key].required === true) {
            if (this[key].value === null || this[key].value === undefined || this[key].value === "") {
                this[key].setInvalidProp(`${this[key].label} is empty`);
                return false;
            } else {
                this[key].resetValidation();
            }
        }
        if (typeof(this[key].value) !== this[key].type) {
            this[key].setInvalidProp(`${this[key].label} is not a ${this[key].type}`);
            return false;
        } else {
            this[key].resetValidation();
        }
        if (this[key].valFunc) {
            let validation = this[key].valFunc(this[key].value);
            if (this[key].required === true) {
                this[key].updateValidation(validation);
                return validation.valid;
            } else if (this[key].required === false) {
                if (this[key].value === null || this[key].value === undefined || this[key].value === "") {
                    this[key].setValidProp();
                    return true;
                } else if (this[key].value) {
                    this[key].updateValidation(validation);
                    return validation.valid;
                }
            }
        } else {
            this[key].setValidProp()
            return true
        }
    }

    validateKey (key) {
        // console.log(this[key])
        // console.log(this[key] instanceof Prop)
        if (this[key] instanceof Prop) {
            if ((this[key].required === true) || (this[key]?.required === false && this[key]?.valFunc)) {
                let valid;
                if (this[key].validate()) {
                    valid = this[key].validate();
                } else {
                }
                if (valid === false) {
                    return false;
                } else if (valid === true) {
                    return true;
                }
            }
        }
    }
}

export default BaseObject;