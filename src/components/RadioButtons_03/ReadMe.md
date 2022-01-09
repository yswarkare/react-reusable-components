### Radio Buttons


___
```
<RadioButtons
    options={this.props?.moduleList} // array of all options
    direction="columns"
    containerClass="grid grid-cols-3"
    containerWidth="flex-wrap"
    selected={[this.props?.moduleList[0]]} // array of options to set default checked
    getSelected={(selected)=>{this.setSelected(selected)}} // to get array of strings
    getSelectedOptions={(selected)=>{this.setSelected(selected)}} // to get array of objects
    optionProps={["label", "value"]} // array of property names to get in resultant option object
></RadioButtons>
```
___