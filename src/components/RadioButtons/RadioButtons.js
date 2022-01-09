import React, { Component, Fragment } from 'react';
import { Options } from './Options';

class RadioButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: new Options(this.props?.options) || [],
			prevOptions: new Options(this.props?.options) || [],
			defaultSelected: new Options(this.props?.defaultSelected) || [],
			prevDefaultSelected: new Options(this.props?.defaultSelected) || [],
		};
	}

	componentDidMount = () => {
		let options = this.state.options;
		if (!(options instanceof Options)) {
			options = new Options(this.state.options);
		}
		if (this.props.defaultSelected) {
			options.setSelected(this.props.defaultSelected[0]);
		}
		this.setState({ options: options });
	};

	static getDerivedStateFromProps = (props, state) => {
		if (state.prevOptions !== props.options) {
			state.options = props.options;
			state.prevOptions = props.options;
			return state;
		}
		return null;
	};

	getSelected = async (option, index) => {
		console.log(option, index);
		let options = this.state.options;
		if (!(options instanceof Options)) {
			options = await new Options(this.state.options);
		}
		await options.setSelected(option);
		this.setState({
			options: options,
		});
		// console.log(options)
		let newOptions = await new Options(options);
		if (this.props.getSelected) {
			let result = await Options.getSelected(newOptions);
			this.props.getSelected(result);
		}
		if (this.props.getSelectedOptions) {
			if (this.props.optionProps) {
				let result = Options.deleteProps(newOptions, this.props.optionProps);
				let results = result.filter((option) => option.checked === true);
				this.props.getSelectedOptions(results);
				// console.log(results)ssss
			} else {
				let results = newOptions.filter((option) => option.checked === true);
				this.props.getSelectedOptions(results);
			}
		}
	};

	render() {
		return (
			<Fragment>
				{this.props?.title && (
					<div
						className={`${
							this.props?.titleContainerClasses || `w-full flex flex-row justify-start content-center items-start`
						}`}
					>
						<span className={`${this.props?.titleClasses || `pl-6 text-lg text-gray-600 bg-dark-grey-100`}`}>
							{this.props?.title}
						</span>
					</div>
				)}
				<div
					className={`${this.props?.containerWidth || 'w-full'} ${
						this.props?.direction === 'row'
							? 'flex flex-row justify-start content-start items-start'
							: this.props?.direction === 'columns'
							? 'flex flex-col justify-start content-start items-start'
							: ''
					} ${this.props?.containerClasses || ''}`}
					style={this.props?.containerStyle}
				>
					{this.state?.options?.map?.((option, index) => {
						return (
							<div
								key={index}
								className={`w-fit px-1 mx-2 cursor-pointer ${
									this.props?.optionClasses || 'flex flex-row justify-start content-center items-start'
								}`}
								onClick={() => {
									this.getSelected(option, index);
								}}
								style={{
									backgroundColor: `${option.backgroundColor}`,
									...this.props.wrapperStyle,
								}}
							>
								<input
									type='radio'
									className={`green pr-2 mt-1 ${this.props?.checkboxClass}`}
									name={`${option?.name}`}
									label={`${option?.label}`}
									value={option?.value}
									checked={option?.checked}
									defaultChecked={option?.defaultChecked}
									disabled={this.props?.disabled}
								></input>
								<label className={`pl-2 cursor-pointer ${this.props?.labelClass}`}>
									{`${option?.label || option?.name || option?.value}`}
								</label>
								{option?.info && (
									<span className={`${this.porps?.infoClasses || `pl-2 text-base text-gray-600`}`}>
										{`${option?.info || ''}`}
									</span>
								)}
							</div>
						);
					})}
				</div>
			</Fragment>
		);
	}
}

export default RadioButtons;
