## Single Select Buttons


```
<SingleSelectButtons
options={this.state?.sections} // array of all options
direction="rows"
containerClass=""
containerWidth="flex-wrap"
selected={[this.state?.sections[0]]} // array of options to set default checked
getSelected={(selected)=>{this.setSelected(selected)}} // to get array of strings
getSelectedOptions={(selected)=>{this.setSelected(selected)}} // to get array of objects
optionProps={["label", "value"]} // array of property names to get in resultant option object
></SingleSelectButtons>

// another example
 
<SingleSelectButtons
    options={this.state?.priorities}
    ref={this.priorityOptionsRef}
    direction="rows"
    containerClasses={`flex flex-row flex-wrap md:grid grid-cols-${this.state?.priorities?.length}`}
    labelClasses={`text-sm pt-1/2`}
    defaultSelected={rowData?.priority} 
    selected={this.state.actionPriorities[(this.state.actionPriorities.indexOf(rowData?.priority))]} 
    getSelectedOption={(selected)=>{this.setActionPriority(selected, rowData)}}
    optionProps={["id", "label", "name"]}
    buttonStyle={{width: "2rem"}}
    buttonClasses={`mx-2 my-1 px-2 py-1 rounded-3xl border-1 border-gray-status flex flex-row justify-center content-center items-center`}
></SingleSelectButtons>
```