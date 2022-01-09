import React, { Fragment, Component } from "react";
import { Options, Selected } from "./Options";

class MultiSelectButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeClasses: `shadow-lg ${this.props?.activeClasses || ""} ${
				this.props?.activeColor || "bg-primary-color-300 hover:bg-primary-color-400"
			}`,
			inactiveClasses: `shadow-md ${this.props?.inactiveClasses || ""} ${
				this.props?.inactiveColor || "bg-primary-bg-surface hover:bg-gray-300"
			}`,
			options: new Options(this.props?.options) || [],
			selected: [],
			defaultSelected: new Selected(this.props?.defaultSelected) || [],
			currentIndex: this.props?.currentIndex || 0,
			currentOptionChecked: this.props?.currentOptionChecked || [],
			prevOptions: new Options(this.props?.options) || [],
			prevDefaultSelected: new Selected(this.props?.defaultSelected) || [],
		};
	}

	componentDidMount = () => {
		let newOptions = this.state?.options;
		if (!(newOptions instanceof Options)) {
			newOptions = new Options(this.state?.options);
		}
		if (this.props?.defaultSelected) {
			newOptions.setDefault(this.state?.defaultSelected);
			// console.log(newOptions);
			this.setState({ selected: newOptions });
		}
		this.setState({ options: newOptions });
	};

	componentDidUpdate = () => {
		// console.log(this.state);
	}

	static getDerivedStateFromProps = (props, state) => {
		if (state.prevDefaultSelected !== props.selected || state.prevOptions !== props.options) {
			if (state.prevDefaultSelected !== props.defaultSelected) {
				state.defaultSelected = props.defaultSelected;
				state.prevDefaultSelected = props.defaultSelected;
			}
			if (state.prevOptions !== props.options) {
				state.options = props.options;
				state.prevOptions = props.options;
			}
			return state;
		}
		return null;
	};

	getSelected = (option, index) => {
		// console.log(option);
		let newSelected = this.state.selected;
		if (!(newSelected instanceof Selected)) {
			newSelected = new Selected(this.state.selected);
		}
		newSelected.setSelected(option);
		// console.log(newSelected);
		let newOptions = this.state.options;
		if (!(newOptions instanceof Options)) {
			newOptions = new Options(this.state.options);
		}
		newOptions.toggleChecked(index);
		// console.log(newOptions);
		this.setState({
			options: newOptions,
			selected: newSelected,
			currentIndex: index,
			currentOptionChecked: newOptions[index].checked,
		});
		console.log(this.state.options[index]);
		let finalOptions = new Options(newOptions);
		if (this.props.getSelected) {
			let result = Options.getSelected(finalOptions);
			this.props.getSelected(result);
		}
		let result = []
		if (this.props.optionProps) {
			result = Options.deleteProps(finalOptions, this.props.optionProps);
		}
		if (this.props.getOption) {
			if (this.props.optionProps) {
				console.log(finalOptions)
				console.log(index)
				this.props.getOption(finalOptions[index], index);
			} else {
				this.props.getOption(finalOptions[index], index);
			}
		}
		if (this.props.getSelectedOptions) {
			if (this.props.optionProps) {
				this.props.getSelectedOptions(result);
			} else {
				this.props.getSelectedOptions(finalOptions);
			}
		}
	};

	render() {
		return (
			<Fragment>
				<div
					className={`select-sections ${this.props?.containerClasses || `py-1 rounded-md`} ${
						this.props?.containerWidth || "w-full"
					} ${
						this.props?.direction === "rows"
							? "flex flex-row justify-center content-center items-center"
							: this.props?.direction === "columns"
							? "flex flex-col"
							: "flex flex-row justify-start content-center items-center"
					}`}
					style={this.props?.containerStyle}
				>
					{this.state?.options?.map?.((option, index) => {
						return (
							<button
								key={index}
								className={`cursor-pointer self-stretch ${this.props?.buttonClasses || `mx-2 my-1 px-2 py-2 pt-3 w-full rounded-lg flex flex-row justify-center justify-items-center content-center items-center `} ${
									this.state?.options[index].checked === true
										? this.state?.activeClasses
										: ""
								} ${
									this.state?.options[index].checked === false
										? this.state?.inactiveClasses
										: ""
								} ${this.props?.buttonClasses}`}
								onClick={() => {
									this.getSelected(option, index);
								}}
								name={`${option?.name}`}
								label={`${option?.label}`}
								value={option?.value}
								checked={option?.checked}
								defaultChecked={option?.defaultChecked}
								disabled={this.props?.disabled}
							>
								<span
									className={`text-lg text-black text-center ${this.props?.labelClasses}`}
								>
									{`${option?.label || option?.name || option?.value}`}
								</span>
							</button>
						);
					})}
				</div>
			</Fragment>
		);
	}
}

export default MultiSelectButtons;

/* <MultiSelectButtons
options={this.state?.sections} // array of all options
direction="rows"
containerClass=""
containerWidth="flex-wrap"
selected={[this.state?.sections[0]]} // array of options to set default checked
getSelected={(selected)=>{this.setSelected(selected)}} // to get array of strings
getSelectedOptions={(selected)=>{this.setSelected(selected)}} // to get array of objects
optionProps={["label", "value"]} // array of property names to get in resultant option object
></MultiSelectButtons> */
