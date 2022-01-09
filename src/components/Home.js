import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../pages/counter';
import Counter02 from '../pages/Counter02';
import { localStateAction } from '../redux/localStorage/local.actions';
import Checkboxes from './Checkboxes_02/Checkboxes';
import RadioButtons from './RadioButtons_02/RadioButtons';
import NewRadioButtons from './RadioButtons_03/RadioButtons';

const Home = () => {
	const entries = useSelector((state) => state.local?.entries);
	const users = useSelector((state) => state.session?.users);
	const abc = useSelector((state) => state.session?.abc);
	const dispatch = useDispatch();

	const [selectedRadio, setSelectedRadio] = useState('a');
	const [selectedCheckboxes, setSelectedCheckboxes] = useState(['a', 'c']);

	useEffect(() => {
		
	}, []);

	return (
		<Fragment>
			<div className={`w-full py-4 flex flex-col justify-center content-center items-center`}>
				<div
					className={`w-fit py-4 flex flex-row flex-wrap gap-4 justify-center content-center items-center`}
				>
					<RadioButtons
						name={`alphabets`}
						data={entries}
						selected={selectedRadio}
						containerClasses={`px-2 py-1 border-1 border-orange-500 bg-gray-200`}
						labelClasses={`px-2 py-1 text-12 text-pink-800`}
						onChange={(e) => {
							setSelectedRadio(e.target.value);
						}}
					></RadioButtons>
				</div>
				<div
					className={`w-fit py-4 flex flex-row flex-wrap gap-4 justify-center content-center items-center`}
				>
					<NewRadioButtons
						name={`alphabets`}
						data={entries}
						selected={selectedRadio}
						containerClasses={`px-2 py-1 border-1 border-orange-500 bg-gray-200`}
						labelClasses={`px-2 py-1 text-12 text-pink-800`}
						onChange={(e) => {
							setSelectedRadio(e.target.value);
						}}
					></NewRadioButtons>
				</div>
				<div className={`w-full flex flex-col justify-center content-center items-center`}>
					<span className='text-15 text-white'>{selectedRadio}</span>
				</div>
				<div
					className={`w-fit py-4 flex flex-row flex-wrap gap-4 justify-center content-center items-center`}
				>
					<Checkboxes
						name={`alphabets`}
						data={entries}
						containerClasses={`px-2 py-1 border-1 border-orange-500 bg-gray-200`}
						labelClasses={`px-2 py-1 text-12 text-pink-800`}
						selected={selectedCheckboxes}
						getSelected={(selected) => {
							setSelectedCheckboxes(selected);
							console.log(selected);
						}}
					></Checkboxes>
				</div>
				<div className={`w-fit flex flex-col justify-start content-center items-start`}>
					<span className='text-15 text-white'>{JSON.stringify(selectedCheckboxes)}</span>
				</div>
				<Counter></Counter>
				<Counter02></Counter02>
			</div>
		</Fragment>
	);
};

export default Home;
