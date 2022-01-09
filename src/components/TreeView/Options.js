export class Option {
    constructor(object){
        console.log(object)
        if (typeof(object) === "string") {
            this.name = object || "";
            this.label = object || "";
            this.value = object || "";
            this.checked = false;
            this.defaultChecked = false;
            this.disabled = false;
            this.backgroundColor = "inherit";
            this.active = false;
            this.expanded = false;
        } else if (typeof(object) === "object") {
            this.id = object?.id || "";
            this.name = object?.name || object?.label || object?.value || "";
            this.label = object?.label || object?.name || object?.value || "";
            this.value = object?.value || object?.label || object?.name || "";
            this.checked = object?.checked || false;
            this.defaultChecked = object?.defaultChecked || false;
            this.disabled = object?.disabled || false;
            this.backgroundColor = object?.backgroundColor || "inherit";
            this.frameworks = object?.frameworks || [];
            this.active = object?.active || false;
            this.expanded = object?.expanded || false;
            this.children = object?.children || false;
        }
    }

    deleteProps (array) {
        for (let i = 0; i < array?.length; i++) {
            this.delete(array[i]);
        }
    }
}

export class Options extends Array {
    constructor(array){
        super(array)
        this.pop()
        for (let i = 0; i < array?.length; i++) {
            const element = new Option(array[i]);
            this.push(element);
        }
    }

    setDefault (selected) {
        let option = selected;
        if ((option instanceof Option) === false) {
            option = new Option(selected);
        }
        this.setChecked(option);
    }

    setChecked (option) {
        for (let i = 0; i < this.length; i++) {
            if ((this[i]?.name === option?.name) === true) {
                this[i].checked = true;
                console.log(`${this[i].name} = ${option.name} => ${this[i].name === option.name}`)
            } else {
                this[i].checked = false;
            }
        }
    }

    toggleChecked (index) {
        // console.log({...this[index]})
        if (this !== undefined && Array?.isArray(this) === true) {
            // console.log(index)
            for (let i = 0; i < this?.length; i++) {
                if (index === i) {
                    // console.log(index)
                    // console.log({...this[i]})
                    if (this[i].checked === false) {
                        // console.log(index)
                        this[i].checked = true;
                    } else {
                        this[i].checked = false;
                        // console.log(index)
                    }
                } else {
                    this[i].checked = false;
                }
            }
            return this;
        }
        this[index].checked = !this[index].checked;
    }

    valueExists (option) {
        let option_01 = option;
        if (!(option instanceof Option)) {
            option_01 = new Option(option);
        }
        let exists = false;
        let index = undefined;
        if ((Array.isArray(this)) === true) {
            for (let i = 0; i < this?.length; i++) {
                index = i;
                if (this[i]?.value === option_01?.value) {
                    exists = true;
                    break;
                }
            }
        }
        return { exists, index }
    }

    setSelected (option) {
        let option_01 = option;
        if (!(option instanceof Option)) {
            option_01 = new Option(option);
        }
        if (this !== undefined &&  Array?.isArray(this) === true) {
            for (let i = 0; i < this?.length; i++) {
                if (this[i]?.value === option_01?.value) {
                    this[i].checked = true;
                } else {
                    this[i].checked = false;
                }
            }
            return this;
        }
    }

    returnSelected () {
        let filtered = []
        for (let i = 0; i < this.length; i++) {
            if (this[i].checked === true) {
                filtered.push(this[i].label);
            }
        }
        return filtered;
    }

    static getSelected (array) {
        let filtered = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].checked === true) {
                filtered.push(array[i].label);
            }
        }
        return filtered;
    }

    static deleteProps (array, optionProps) {
        let filtered = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].checked === true) {
                for (const key in array[i]) {
                    if (!(optionProps.includes(key))) {
                        delete array[i][key];
                    }
                }
                filtered.push(array[i]);
            }
        }
        return filtered;
    }
}

export class Selected extends Options {
    constructor(array){
        super(array)
        this.pop()
        for (let i = 0; i < array?.length; i++) {
            let element = new Option(array[i]);
            element.checked = true;
            element.defaultChecked = true;
            this.push(element);
        }
    }
}