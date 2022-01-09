
class BaseArray extends Array {
    constructor(array, model_01){
        super(array)
        if (Array?.isArray?.(array)) {
            this.setNewObjectList(array, model_01);
        }
    }

    static findByID (array, id) {
        for (let i = 0; i < array?.length; i++) {
            if (array[i]?.id === id) {
                return array[i];
            }
        }
    }

    setNewObjectList (array, model_01) {
        if (Array.isArray?.(array)) {
            this.forEach(()=>{this.pop()});
            for (let i = 0; i < array.length; i++) {
                if (typeof(array[i]) === "object") {
                    if (model_01) {
                        if ((array[i] instanceof model_01) === false) {
                            let element = new model_01(array[i]);
                            element.setNewObjectPropsModel(array[i]);
                            this.push(element);
                        }
                    }
                } else {
                    this.push(array[i]);
                }
            }
        }
        return this;
    }

    findOneByKeyValue (object) {
        let result = [];
        for (let i = 0; i < this?.length; i++) {
            if (this[i]?.[object?.key] === object?.value) {
                result.push(this[i]);
            }
        }
        if (result.length === 1) {
            return result[0];
        }
        return result;
    }

    getElementByID (id) {
        let object = {};
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            if (element?.id === id){
                object = element;
                break;
            }
        }
        return object;
    }

    newArray (array, objectModel) {
        this.map(()=>this.pop());
        for (let i = 0; i < array.length; i++) {
            if (objectModel) {
                const element = new objectModel();
                element.newObject(array[i]);
                this.push(element);
            } else {
                const element = array[i];
                this.push(element);
            }
        }
    }

    updateByID (element) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].id === element.id){
                this[i] = element;
                break;
            }
        }
        return this;
    }

    updateByIndex (element, index) {
        if (this[index].id === element.id){
            this[index] = element;
        }
        return this;
    }

    updateKeyValueByID (object) {
        if (object.key === "delete") {
            this.splice(object.index, 1);
        } else if ( object.key === "add-new-at-start") { 
            this.unshift({});
        } else if ( object.key === "add-new-at-end") { 
            this.push({});
        } else {
            for (let i = 0; i < this.length; i++) {
                if (this[i].id === object.id) {
                    for (const key in this[i]) {
                        if (key === "delete") {
                            this.splice(i, 1);
                            return this;
                        }
                        if (key === object.key) {
                            this[i][key] = object.value;
                        }
                    }
                }
            }
        }
        return this;
    }

    updateKeyValueByIndex (object) {
        if (object.key === "delete") {
            this.splice(object.index, 1);
        } else if ( object.key === "add-new-at-start") { 
            this.unshift({});
        } else if ( object.key === "add-new-at-end") { 
            this.push({});
        } else {
            for (const key in this[object.index]) {
                if (key === object.key) {
                    this[object.index][object.key].value = object.value;
                }
            }
        }
        return this;
    }

    deleteByID (object) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].id === object.id) {
                this.splice(i, 1);
            }
        }
    }

    searchStrInArrOfObjects (object) {
        let str = object.string.toLowerCase().trim();
        let filtered = this.filter((obj)=>{
            return obj[object.propName]?.value?.toLowerCase().includes(str);
        });
        return filtered;
    }


    validateArray (array) {
        let validations = []
        for (let i = 0; i < array.length; i++) {
            let object = array[i];
            for (let key in object) {
                if (key !== "id") {
                    let valid = array[i].validate();
                    console.log({valid})
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

    isOnlyElement (index) {
        return this[index] === 0 && this.length === 1 ? true : false;
    }

    hasOnlyOneElement () {
        return this.length === 1 ? true : false;
    }

    isLastElement (index) {
        return ((this[index])+1) === this.length ? true : false;
    }
}

export default BaseArray;