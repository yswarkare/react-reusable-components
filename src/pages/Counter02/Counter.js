import React, { useState } from 'react';

const Counter02 = () => {
  const [ counter, setCounter] = useState(0);

	return (
		<div className={`w-full py-4 flex flex-row justify-center content-center items-center`}>
			<div className={`w-fit flex flex-col justify-center content-center items-center`}>
				<label className='px-2 py-1 border-1 border-orange-500 bg-gray-200'>
					<button
						className='btn-blue text-12 text-pink-700'
						onClick={() => setCounter(prev => prev + 1)}
					>
						{`increase by 1`}
					</button>
				</label>
			</div>
			<div className={`w-fit px-4 flex flex-col justify-start content-center items-start`}>
				<span className='text-15 text-white'>{counter}</span>
			</div>
			<div className={`w-fit flex flex-col justify-center content-center items-center`}>
				<label className='px-2 py-1 border-1 border-orange-500 bg-gray-200'>
					<button
						className='btn-blue text-12 text-pink-700'
						onClick={() => setCounter(prev => prev - 1)}
					>
						{`decrease by 1`}
					</button>
				</label>
			</div>
		</div>
	);
};

export default Counter02;
