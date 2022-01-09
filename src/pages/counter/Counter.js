import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	setCounter = (action) => {
    let newCounter = this.state.counter;
    if (action === "increase") newCounter = newCounter + 1;
    if (action === "decrease") newCounter = newCounter - 1;
    this.setState({ counter: newCounter });
  };

	render() {
		return (
				<div className={`w-full py-4 flex flex-row justify-center content-center items-center`}>
					<div className={`w-fit flex flex-col justify-center content-center items-center`}>
						<label className='px-2 py-1 border-1 border-orange-500 bg-gray-200'>
							<button
								className='btn-blue text-12 text-pink-700'
								onClick={() => this.setCounter("increase")}
							>
								{`increase by 1`}
							</button>
						</label>
					</div>
					<div className={`w-fit px-4 flex flex-col justify-start content-center items-start`}>
						<span className='text-15 text-white'>{this.state.counter}</span>
					</div>
					<div className={`w-fit flex flex-col justify-center content-center items-center`}>
						<label className='px-2 py-1 border-1 border-orange-500 bg-gray-200'>
							<button
								className='btn-blue text-12 text-pink-700'
								onClick={() => this.setCounter("decrease")}
							>
								{`decrease by 1`}
							</button>
						</label>
					</div>
				</div>
		);
	}
}

export default Counter;
