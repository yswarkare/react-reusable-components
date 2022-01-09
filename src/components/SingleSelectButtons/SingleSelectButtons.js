import React, { Fragment, Component } from "react";
import { Options, Selected, Option } from "./Options";

class SingleSelectButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeClasses: `${this.props?.activeClasses || ""} ${
				this.props?.activeColor || "bg-primary-color-300 hover:bg-primary-color-400"
			}`,
			inactiveClasses: `${this.props?.inactiveClasses || ""} ${
				this.props?.inactiveColor || "bg-primary-bg-surface hover:bg-gray-300"
			}`,
			options: new Options(this.props?.options) || [],
			selected: new Option(),
			prevSelected: new Option(),
			defaultSelected: new Option(this.props?.defaultSelected) || new Option(),
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
			let defaultSelected = this.props?.defaultSelected;
			if ((this.state?.defaultSelected instanceof Option) === false) {
				defaultSelected = new Option(this.state?.defaultSelected);
			}
			// console.log(defaultSelected)
			// console.log(JSON.stringify(newOptions));
			newOptions.setDefault(defaultSelected);
			// console.log(newOptions);
			this.setState({ selected: newOptions });
		}
		this.setState({ options: newOptions });
	};

	componentDidUpdate = () => {
		// console.log(this.state);
	}

	static getDerivedStateFromProps = (props, state) => {
		if (state.prevSelected !== props.selected) {
			state.selected = new Option(props.selected);
			state.prevSelected = new Option(props.selected);
			return state;
		}
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

	setSelected = (option) => {
		console.log(option)
		let newOptions = this.state.options;
		if (!(newOptions instanceof Options)) {
			newOptions = new Options(this.state.options);
		}
		// console.log(newOptions[index])
		let index = 0;
		for (let i = 0; i < newOptions.length; i++) {
			if (newOptions[i]?.id === option?.id);
			index = i;
		}
		newOptions.setDefault(option);
		// console.log(newOptions[index]);
		let newSelected = newOptions[index];
		console.log(newOptions)
		this.setState({
			options: newOptions,
			selected: newSelected,
			prevSelected: newSelected,
			currentIndex: index,
			currentOptionChecked: newOptions[index].checked,
		});
	}

	getSelected = (option, index) => {
		// console.log(option);
		let newOptions = this.state.options;
		if (!(newOptions instanceof Options)) {
			newOptions = new Options(this.state.options);
		}
		// console.log(newOptions[index])
		newOptions.toggleChecked(index);
		// console.log(newOptions[index]);
		let newSelected = newOptions[index];
		this.setState({
			options: newOptions,
			selected: newSelected,
			prevSelected: newSelected,
			currentIndex: index,
			currentOptionChecked: newOptions[index].checked,
		});
		// console.log(this.state.options[index]);
		let finalOptions = new Options(newOptions);
		if (this.props.getSelected) {
			let result = Options.getSelected(finalOptions);
			this.props.getSelected(result[0]);
		}
		let result = []
		if (this.props.optionProps) {
			result = Options.deleteProps(finalOptions, this.props.optionProps);
		}
		if (this.props.getOption) {
			if (this.props.optionProps) {
				console.log(finalOptions)
				this.props.getOption(finalOptions[index], index);
			} else {
				this.props.getOption(finalOptions[index], index);
			}
		}
		if (this.props.getSelectedOption) {
			if (this.props.optionProps) {
				// console.log(result)
				if (result[0]?.checked === false) {
					this.props.getSelectedOption(undefined);
				} else {
					this.props.getSelectedOption(result[0]);
				}
			} else {
				this.props.getSelectedOption(finalOptions[0]);
			}
		}
	};

	render() {
		return (
			<Fragment>
				<div
					className={`${this.props?.containerClasses || `py-1 rounded-md ${
						this.props?.containerWidth || ""
					} ${
						this.props?.direction === "rows"
							? "flex flex-row justify-center content-center items-center"
							: this.props?.direction === "columns"
							? "flex flex-col"
							: "flex flex-row justify-start content-center items-center"
					}`}`}
					style={this.props?.containerStyle}
					{...this.props?.containerProps}
				>
					{this.state?.options?.map?.((option, index) => {
						return (
							<button
								key={index}
								className={`cursor-pointer ${this.props?.buttonClasses || `mx-2 my-1 px-3 border-1 border-gray-status rounded-md flex flex-row justify-center justify-items-center content-center items-center`} ${
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
                                style={this.props?.buttonStyle}
								{...this.props?.buttonProps}
							>
								<span
									className={`${this.props?.labelClasses || "pt-1 text-lg text-black text-center"}`}
                                    style={this.props?.labelStyle}
									{...this.props?.labelProps}
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

export default SingleSelectButtons;

/* <SingleSelectButtons
options={this.state?.sections} // array of all options
direction="rows"
containerClass=""
containerWidth="flex-wrap"
selected={[this.state?.sections[0]]} // array of options to set default checked
getSelected={(selected)=>{this.setSelected(selected)}} // to get array of strings
getSelectedOption={(selected)=>{this.setSelected(selected)}} // to get array of objects
optionProps={["label", "value"]} // array of property names to get in resultant option object
></SingleSelectButtons> */
